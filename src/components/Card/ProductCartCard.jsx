import { View, Image, Pressable } from 'react-native'
import React, { useState } from 'react'
import MyText from '../MyText/MyText'
import Color from 'src/constants/Color'

import styles from './CardStyles'
import productDefaultImage from 'src/assets/images/productDefaultImage.png'
import Counter from '../Counter/Counter'
import { AntDesign, Ionicons } from '@expo/vector-icons';
import { removeProduct, checkedProduct, increaseQualityProduct, decreaseQualityProduct } from 'src/redux/slices/cartSlice'
import { useDispatch } from 'react-redux'
import { FormatMoney } from 'src/utils/Calculator'

const ProductCartCard = ({idProduct, nameProduct, priceProduct, uriImage, checked, quality}) => {
  const dispatch = useDispatch();

  const handleChecked = () => {
    dispatch(checkedProduct({idProduct: idProduct}))
  }

  const handleIncreaseProduct = () => {
    dispatch(increaseQualityProduct({idProduct: idProduct}))
  }

  const handleDecreaseProduct = () => {
    dispatch(decreaseQualityProduct({idProduct: idProduct}))
  }

  return (
    <View style={styles.productCartContainer}>
      <Pressable onPress={() => handleChecked()} style={styles.checkboxWrapper}>
        <View style={styles.checkbox} >
          {checked && <AntDesign name="checksquare" size={22} color={Color.PRIMARY_YELLOW_COLOR} style={styles.iconCheckedBox} />}
        </View>
      </Pressable>
      <View style={styles.product}>
        {uriImage ? <Image resizeMode='cover' source={{uri:uriImage}} style={styles.imagePr} /> : <Image resizeMode='cover' source={productDefaultImage} style={styles.imagePr} />}
        <View style={styles.textWrapper}>
          <MyText title={nameProduct} numberOfLines={2} variant='h1' color={Color.PRIMARY_YELLOW_COLOR} style={styles.textNamePr} />
          <MyText title={`${FormatMoney(priceProduct)} đ`} variant='h1' Color={Color.BLACK} style={styles.textPricePr} />
        </View>
      </View>
      <View style={styles.counterContainer}>
        <Pressable onPress={() => dispatch(removeProduct({idProduct: idProduct}))} style={({ pressed }) => [
          {
            backgroundColor: pressed
              ? Color.WHITE_ACTIVE
              : Color.WHITE
          },
          styles.iconBin
        ]}>
          <Ionicons name="md-trash-bin" size={24} color={Color.PRIMARY_YELLOW_COLOR} />
        </Pressable>
        <Counter counter={quality} actionIncrease={handleIncreaseProduct} actionDecrease={handleDecreaseProduct} />
      </View>
    </View>
  )
}

export default ProductCartCard