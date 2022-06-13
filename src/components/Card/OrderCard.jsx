import { View, Image } from 'react-native'
import React from 'react'
import MyText from '../MyText/MyText'
import styles from './CardStyles'
import Color from 'src/constants/Color'
import PrimaryButton from '../PrimaryButton/PrimaryButton'
import { useNavigation } from '@react-navigation/native'
import productDefaultImage from 'src/assets/images/productDefaultImage.png'


export const ProductItem = ({ title, price, quality, uriImage }) => {
  return (
    <View style={styles.productItemOrderCardContainer}>
      <View style={styles.productItemImageContainer}>
        {uriImage ? <Image source={{uri: uriImage}} style={styles.productItemImage} /> : <Image source={productDefaultImage} style={styles.productItemImage} />}
        
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

const OrderCard = ({orderTime, status, products, total, billId}) => {
  const navigation = useNavigation()

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
      {products.map((item, index) => <ProductItem key={index}
        title={item.nameProduct}
        price={item.priceProduct}
        quality={item.quality}
        uriImage={item.imageProduct}
      />)}
      <View style={styles.divide} />
      <View style={styles.textOrderCardContainer}>
        <MyText title={"Total money"} variant="h1" color={Color.PRIMARY_YELLOW_COLOR} style={{ fontSize: 14 }} />
        <MyText title={`${total} đ`} variant="h2" color={Color.PRIMARY_RED_COLOR} />
      </View>
      <PrimaryButton
        title={"Give feedback"}
        handleOnPress={() => navigation.navigate("Give Feedback", {billOrder: billId})} 
        style={{width: 160, alignSelf: "flex-end", marginTop: 10}}
        height={45}
      />
    </View>
  )
}

export default OrderCard