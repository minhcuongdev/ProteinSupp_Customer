import { View, Image, FlatList, ScrollView, Pressable, RefreshControl } from 'react-native'
import React, { useEffect, useState } from 'react'
import Swiper from 'react-native-swiper'

import styles from './HomePageStyles'
import Color from 'src/constants/Color'
import MyText from 'src/components/MyText/MyText'
import Search from 'src/components/Search/Search'
import SmallButton from 'src/components/SmallButton/SmallButton'
import ProductCard from 'src/components/Card/ProductCard'
import ScrollableTabs from 'src/components/ScrollableTabs/ScrollableTabs'
import { Ionicons } from '@expo/vector-icons';

import banner1 from 'src/assets/images/banner1.jpg'
import banner2 from 'src/assets/images/banner2.jpg'
import banner3 from 'src/assets/images/banner3.jpg'
import defaultImage from 'src/assets/images/default-user-image.png'

import { setSnackBar } from 'src/redux/slices/snackBarSlice'
import { useSelector, useDispatch } from 'react-redux'
import { setProducts, setPromotionalProducts } from 'src/redux/slices/productSlice'
import productApi from 'src/apis/productApi'

const HomePage = ({ navigation }) => {
  const user = useSelector(state => state.account.account)
  const products = useSelector(state => state.product.products)
  const promotionalProducts = useSelector(state => state.product.promotionalProducts)
  const [indexCategory, setIndexCategory] = useState(0)
  const [productCategory, setProductCategory] =useState([])
  const [refreshing, setRefreshing] = useState(false);
  const dispatch = useDispatch()

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    callApi();
  }, []);

  const callApi = async () => {
    try {
      const products = await productApi.getAllProduct()

      const promotionalProduct = products.filter(product => product.promotional)
      dispatch(setProducts(products))
      dispatch(setPromotionalProducts(promotionalProduct))
      
      const proteinGainWeight = products.filter(product => product?.typeProduct.includes("Protein & Gain weight"))
      setProductCategory(proteinGainWeight)

    } catch (error) {
      dispatch(setSnackBar({
        open: true,
        title: error.message
      }))
    } finally {
      setRefreshing(false)
    }
  }

  useEffect(() => {
    callApi()
  }, [])

  const renderCategoryProducts = () => {
    switch (indexCategory) {
      case 0:
        const proteinGainWeight = products.filter(product => product?.typeProduct.includes("Protein & Gain weight"))
        setProductCategory(proteinGainWeight)
        break
      case 1:
        const proteinEnergyHealth = products.filter(product => product?.typeProduct.includes("Energy & Health"))
        setProductCategory(proteinEnergyHealth)
        break
      case 2:
        const proteinLoseFatLoseWeight = products.filter(product => product?.typeProduct.includes("Lose fat & Lose weight"))
        setProductCategory(proteinLoseFatLoseWeight)
        break
      default:
        break
    }
  }

  useEffect(() => {
    renderCategoryProducts()
  },[indexCategory])

  const renderCartProduct = ({ item }) => (
    <ProductCard nameProduct={item.name} priceProduct={item.price} uriImage={item.imageProduct} productId={item._id} />
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.leftHeaderWrapper}>
          <Pressable onPress={() => navigation.navigate("Profile")}>
            {user.profilePicture ?
              <Image source={{
                uri: user.profilePicture
              }} style={styles.avatar} />
              :
              <Image source={defaultImage} style={styles.avatar} />
            }
          </Pressable>
          <View style={styles.textWrapper}>
            <MyText title={"Welcome Back!"} variant="h4" color={Color.PRIMARY_YELLOW_COLOR} style={{ textAlign: "left" }} />
            <MyText title={user.username} numberOfLines={2} variant="body1" color={Color.PRIMARY_YELLOW_COLOR} style={{ lineHeight: 27, width: 250, textAlign: "left", fontSize: 20 }} />
          </View>
        </View>
        <Pressable onPress={() => navigation.navigate("Chat")}>
          <Ionicons name="ios-chatbubble-ellipses-sharp" size={35} color={Color.PRIMARY_YELLOW_COLOR} />
        </Pressable>
      </View>
      <ScrollView refreshControl={<RefreshControl
            refreshing={refreshing}  
            onRefresh={onRefresh}
            colors={[Color.PRIMARY_YELLOW_COLOR]}
          />}>
        <View style={styles.searchContainer}>
          <Search />
        </View>
        <View style={styles.bannerContainer}>
          <Swiper autoplay={true} paginationStyle={{ bottom: 10 }} activeDotColor={Color.PRIMARY_RED_COLOR} showsButtons={false}>
            <View >
              <Image source={banner1} resizeMode='cover' style={{ width: '100%', height: '100%' }} ></Image>
            </View>
            <View >
              <Image source={banner2} resizeMode='cover' style={{ width: '100%', height: '100%' }}></Image>
            </View>
            <View >
              <Image source={banner3} resizeMode='cover' style={{ width: '100%', height: '100%' }}></Image>
            </View>
          </Swiper>
        </View>
        {promotionalProducts.length > 0 && <View style={styles.promotionProductContainer}>
          <View style={styles.title}>
            <MyText
              title={"Promotional product"}
              variant="body2"
              color={Color.PRIMARY_YELLOW_COLOR} />
            <SmallButton label={"See all"} onTap={() => navigation.navigate("PromotionProduct")} />
          </View>
          <View style={styles.product}>
            <FlatList
              data={promotionalProducts}
              renderItem={renderCartProduct}
              keyExtractor={item => item._id}
              horizontal
              showsHorizontalScrollIndicator={false}
            />
          </View>
        </View>}

        <View style={styles.productCategory}>
          <ScrollableTabs index={indexCategory} setIndex={setIndexCategory} />
          <View style={styles.productCate}>
            {productCategory.map(item => <ProductCard key={item?._id} nameProduct={item?.name} priceProduct={item?.price} uriImage={item?.imageProduct} productId={item?._id} />)}
          </View>
        </View>
      </ScrollView>
    </View>
  )
}

export default HomePage