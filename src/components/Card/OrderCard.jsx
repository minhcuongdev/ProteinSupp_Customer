import { View, Image } from 'react-native'
import React from 'react'
import MyText from '../MyText/MyText'
import styles from './CardStyles'
import Color from 'src/constants/Color'
import PrimaryButton from '../PrimaryButton/PrimaryButton'

import productImage from 'src/assets/images/product.jpg'

const products = [{
  id: 0,
  name: "Labrada Muscle Mass",
  price: "1.750.000",
  quality: 1,
  uriImage: ""
}, {
  id: 1,
  name: "Labrada Muscle Mass",
  price: "1.750.000",
  quality: 1,
  uriImage: ""
}]

const ProductItem = ({ title, price, quality, uriImage }) => {
  return (
    <View style={styles.productItemOrderCardContainer}>
      <View style={styles.productItemImageContainer}>
        <Image source={productImage} style={styles.productItemImage} />
      </View>
      <View style={styles.productItemOrderTextWrapper}>
        <MyText title={title} variant="h1" style={{ fontSize: 12, alignSelf: "flex-start", lineHeight: 18 }} color={Color.NEUTRAL_02} />
        <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "flex-end" }} >
          <MyText title={`${price} đ`} variant="h1" style={{ fontSize: 14, alignSelf: "flex-start" }} color={Color.NEUTRAL_02} />
          <MyText title={`x${quality}`} variant="h1" style={{ fontSize: 13, alignSelf: "flex-start" }} color={Color.NEUTRAL_02} />
        </View>
      </View>
    </View>
  )
}

const OrderCard = ({orderTime, status, products, total}) => {
  return (
    <View style={styles.orderCardContainer}>
      <View style={styles.textOrderCardContainer}>
        <MyText title={"Order Time"} variant="h1" color={Color.PRIMARY_YELLOW_COLOR} style={{ fontSize: 14 }} />
        <MyText title={orderTime} variant="h3" color={Color.PRIMARY_YELLOW_COLOR} />
      </View>
      <View style={styles.textOrderCardContainer}>
        <MyText title={"Status"} variant="h1" color={Color.PRIMARY_YELLOW_COLOR} style={{ fontSize: 14 }} />
        <MyText title={status} variant="h3" color={Color.PRIMARY_YELLOW_COLOR} />
      </View>
      {products.map(item => <ProductItem key={item.id}
        title={item.name}
        price={item.price}
        quality={item.quality}
        uriImage={item.uriImage}
      />)}
      <View style={styles.divide} />
      <View style={styles.textOrderCardContainer}>
        <MyText title={"Total money"} variant="h1" color={Color.PRIMARY_YELLOW_COLOR} style={{ fontSize: 14 }} />
        <MyText title={`${total} đ`} variant="h2" color={Color.PRIMARY_RED_COLOR} />
      </View>
      <PrimaryButton
        title={"Give feedback"}
        handleOnPress={() => console.log("give feedback")} 
        style={{width: 160, alignSelf: "flex-end", marginTop: 10}}
        height={45}
      />
    </View>
  )
}

export default OrderCard