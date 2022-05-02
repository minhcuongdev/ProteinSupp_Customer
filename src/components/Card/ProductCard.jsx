import { View, Image } from 'react-native'
import React from 'react'

import styles from './CardStyles'
import product from 'src/assets/images/product.jpg'
import MyText from '../MyText/MyText'

const ProductCard = ({nameProduct, priceProduct,uriImage}) => {

  return (
    <View style={styles.productContainer}>
      <Image source={product} resizeMode="cover" style={styles.img} />
      <MyText title={nameProduct} variant="h1" style={styles.namePr} numberOfLines={2} />
      <MyText title={`${priceProduct} đ`} variant="h1" style={styles.pricePr} />
    </View>
  )
}

export default ProductCard