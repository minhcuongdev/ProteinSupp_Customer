import { View, FlatList, DrawerLayoutAndroid } from 'react-native'
import React, { useState, useEffect, useRef } from 'react'

import styles from './ProductStyles'
import MyText from 'src/components/MyText/MyText'
import Color from 'src/constants/Color'
import Search from 'src/components/Search/Search'
import ScrollableTabs from 'src/components/ScrollableTabs/ScrollableTabs'
import ProductCard from 'src/components/Card/ProductCard'
import { useSelector } from 'react-redux'
import { FormatMoney } from 'src/utils/Calculator'
import { Divider } from 'react-native-paper'

const navigationView = () => {

  return(
    <View  style={styles.drawer} >
    <MyText title={"Filter"} color={Color.PRIMARY_RED_COLOR} variant="h1" />
    <Divider style={{backgroundColor: Color.PRIMARY_YELLOW_COLOR}} />
  
  </View>
  )
};

const Product = () => {
  const [indexCategory, setIndexCategory] = useState(0)
  const products = useSelector(state => state.product.products)
  const [productCategory, setProductCategory] = useState([])
  const [searchText, setSearchText] = useState("");

  const drawer = useRef(null);

  const search = (data) => {
    return data.filter(item => {
      return item.name.toLowerCase().includes(searchText.toLowerCase()) ||
        FormatMoney(item.price).toLowerCase().includes(searchText.toLowerCase()) ||
        item.price.toString().toLowerCase().includes(searchText.toLowerCase())
    })
  }

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
  }, [indexCategory])

  const renderCartProduct = ({ item }) => (
    <ProductCard nameProduct={item.name} priceProduct={item.price} uriImage={item.imageProduct} productId={item._id} />
  );

 

  return (
    <DrawerLayoutAndroid
      ref={drawer}
      drawerWidth={300}
      drawerPosition={"right"}
      renderNavigationView={navigationView}
    >
      <View style={styles.container}>
        <MyText title={"Product"} variant='body1' color={Color.PRIMARY_RED_COLOR} style={styles.title} />
        <View style={styles.search}>
          <Search value={searchText} onChange={setSearchText} isFilter={true} drawer={drawer} />
        </View>
        <View style={styles.scroll}>
          <ScrollableTabs index={indexCategory} setIndex={setIndexCategory} />
        </View>
        <View style={styles.body}>
          <FlatList
            data={search(productCategory)}
            renderItem={renderCartProduct}
            keyExtractor={item => item._id}
            showsVerticalScrollIndicator={false}
            numColumns={2}
          />
        </View>
      </View>
    </DrawerLayoutAndroid>
  )
}

export default Product