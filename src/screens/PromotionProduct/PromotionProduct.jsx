import { View, FlatList } from 'react-native'
import React from 'react'

import styles from './PromotionProductStyles'
import MyText from 'src/components/MyText/MyText'
import Color from 'src/constants/Color'
import ProductCard from 'src/components/Card/ProductCard'
import { useSelector } from 'react-redux'

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
  },{
    id: 5,
    nameProduct: "Labrada Leanbody For Her",
    priceProduct: "3.500.000",
    uri: "..."
  },
  {
    id: 6,
    nameProduct: "Labrada Leanbody For Her",
    priceProduct: "3.500.000",
    uri: "..."
  },
  {
    id: 7,
    nameProduct: "Labrada Leanbody For Her",
    priceProduct: "3.500.000",
    uri: "..."
  },
  {
    id: 8,
    nameProduct: "Labrada Leanbody For Her",
    priceProduct: "3.500.000",
    uri: "..."
  },
  {
    id: 9,
    nameProduct: "Labrada Leanbody For Her",
    priceProduct: "3.500.000",
    uri: "..."
  },
]

const PromotionProduct = () => {
  const promotionalProducts = useSelector(state=>state.product.promotionalProducts)

  const renderCartProduct = ({ item }) => (
    <ProductCard nameProduct={item.name} priceProduct={item.price} uriImage={item.imageProduct} productId={item._id} />
  );


  return (
    <View style={styles.container}>
      <MyText title={"Promotional products"} variant="body1" color={Color.PRIMARY_RED_COLOR} style={styles.title} />
      <View style={styles.body}>
      <FlatList
            data={promotionalProducts}
            renderItem={renderCartProduct}
            keyExtractor={item => item._id}
            showsVerticalScrollIndicator={false}
            numColumns={2}
          />
      </View>
    </View>
  )
}

export default PromotionProduct