import { Image, Pressable } from 'react-native'
import React from 'react'

import styles from './CardStyles'
import product from 'src/assets/images/product.jpg'
import MyText from '../MyText/MyText'
import Color from 'src/constants/Color'

import { useNavigation } from '@react-navigation/native'

const ProductCard = ({ nameProduct, priceProduct, uriImage }) => {
  const navigation = useNavigation()

  return (
    <Pressable onPress={() => navigation.navigate("SingleProduct")}  style={({ pressed }) => [
      {
        backgroundColor: pressed
          ? Color.WHITE_ACTIVE
          : Color.WHITE,
      },
      styles.productContainer
    ]}>
      <Image source={product} resizeMode="cover" style={styles.img} />
      <MyText title={nameProduct} variant="h1" style={styles.namePr} numberOfLines={2} />
      <MyText title={`${priceProduct} đ`} variant="h1" style={styles.pricePr} />
    </Pressable>
  )
}

export default ProductCard