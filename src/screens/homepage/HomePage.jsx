import { View, Image, FlatList, ScrollView } from 'react-native'
import React from 'react'
import Swiper from 'react-native-swiper'

import styles from './HomePageStyles'
import Color from 'src/constants/Color'
import MyText from 'src/components/MyText/MyText'
import Search from 'src/components/Search/Search'
import SmallButton from 'src/components/SmallButton/SmallButton'
import ProductCard from 'src/components/Card/ProductCard'
import ScrollableTabs from 'src/components/ScrollableTabs/ScrollableTabs'

import banner1 from 'src/assets/images/banner1.jpg'
import banner2 from 'src/assets/images/banner2.jpg'
import banner3 from 'src/assets/images/banner3.jpg'

const productDummy = [
  {
    id: 0,
    nameProduct: "Labrada Leanbody For Her",
    priceProduct: "3.500.000",
    uri: "..."
  },
  {
    id: 1,
    nameProduct: "Labrada Leanbody For Her",
    priceProduct: "3.500.000",
    uri: "..."
  },
  {
    id: 2,
    nameProduct: "Labrada Leanbody For Her",
    priceProduct: "3.500.000",
    uri: "..."
  },
  {
    id: 3,
    nameProduct: "Labrada Leanbody For Her",
    priceProduct: "3.500.000",
    uri: "..."
  },
  {
    id: 4,
    nameProduct: "Labrada Leanbody For Her",
    priceProduct: "3.500.000",
    uri: "..."
  },
]

const HomePage = ({ navigation }) => {

  const renderCartProduct = ({ item }) => (
    <ProductCard nameProduct={item.nameProduct} priceProduct={item.priceProduct} />
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.textWrapper}>
          <MyText title={"Good morning!"} variant="h4" color={Color.PRIMARY_YELLOW_COLOR} style={{ textAlign: "left" }} />
          <MyText title={"Quynh Ton"} variant="body1" color={Color.PRIMARY_YELLOW_COLOR} />
        </View>
        <Image source={{
          uri: "https://i.ibb.co/sy1zLNy/Khanh-Quynh.jpg"
        }} style={styles.avatar} />
      </View>
      <ScrollView style={{}}>
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
        <View style={styles.promotionProductContainer}>
          <View style={styles.title}>
            <MyText
              title={"Promotional product"}
              variant="body2"
              color={Color.PRIMARY_YELLOW_COLOR} />
            <SmallButton label={"See all"} onTap={() => navigation.navigate("PromotionProduct")} />
          </View>
          <View style={styles.product}>
            <FlatList
              data={productDummy}
              renderItem={renderCartProduct}
              keyExtractor={item => item.id}
              horizontal
              showsHorizontalScrollIndicator={false}
            />
          </View>
        </View>
        <View style={styles.productCategory}>
          <ScrollableTabs />
          <View style={styles.productCate}>
            {productDummy.map(item => <ProductCard key={item.id} nameProduct={item.nameProduct} priceProduct={item.priceProduct} />)}
          </View>
        </View>
      </ScrollView>
    </View>
  )
}

export default HomePage