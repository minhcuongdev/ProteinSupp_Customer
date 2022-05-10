import { View, Image, Pressable } from 'react-native'
import React, { useState } from 'react'
import MyText from '../MyText/MyText'
import Color from 'src/constants/Color'

import styles from './CardStyles'
import product from 'src/assets/images/product.jpg'
import Counter from '../Counter/Counter'
import { AntDesign, Ionicons } from '@expo/vector-icons';

const ProductCartCard = ({nameProduct, priceProduct, uriImage}) => {

  const [checked, setChecked] = useState(false)

  return (
    <View style={styles.productCartContainer}>
      <Pressable onPress={() => setChecked(!checked)} style={styles.checkboxWrapper}>
        <View style={styles.checkbox} >
          {checked && <AntDesign name="checksquare" size={22} color={Color.PRIMARY_YELLOW_COLOR} style={styles.iconCheckedBox} />}
        </View>
      </Pressable>
      <View style={styles.product}>
        <Image resizeMode='cover' source={product} style={styles.imagePr} />
        <View style={styles.textWrapper}>
          <MyText title={nameProduct} numberOfLines={2} variant='h1' color={Color.PRIMARY_YELLOW_COLOR} style={styles.textNamePr} />
          <MyText title={`${priceProduct} đ`} variant='h1' Color={Color.BLACK} style={styles.textPricePr} />
        </View>
      </View>
      <View style={styles.counterContainer}>
        <Pressable  style={({ pressed }) => [
          {
            backgroundColor: pressed
              ? Color.WHITE_ACTIVE
              : Color.WHITE
          },
          styles.iconBin
        ]}>
          <Ionicons name="md-trash-bin" size={24} color={Color.PRIMARY_YELLOW_COLOR} />
        </Pressable>
        <Counter />
      </View>
    </View>
  )
}

export default ProductCartCard