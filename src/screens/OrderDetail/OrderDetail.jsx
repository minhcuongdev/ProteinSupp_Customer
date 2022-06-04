import { View, ScrollView } from 'react-native'
import React from 'react'
import MyText from 'src/components/MyText/MyText'
import Color from 'src/constants/Color'
import { Divider } from 'react-native-paper'

import styles from './OrderDetailStyles'
import { ProductItem } from 'src/components/Card/OrderCard'

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
}, {
  id: 2,
  name: "Labrada Muscle Mass",
  price: "1.750.000",
  quality: 1,
  uriImage: ""
}, {
  id: 3,
  name: "Labrada Muscle Mass",
  price: "1.750.000",
  quality: 1,
  uriImage: ""
}]

const ListItemCard = () => {
  return (
    <View style={styles.cardContainer}>
      <MyText title={"List of items in order"} variant="h2" color={Color.PRIMARY_YELLOW_COLOR} style={{ textAlign: "left", marginBottom: 10 }} />
      <Divider style={{ height: 1, backgroundColor: Color.PRIMARY_YELLOW_COLOR }} />
      <View style={styles.productsContainer}>
        {products.map(productOrder => <ProductItem key={productOrder.id}
          title={productOrder.name}
          price={productOrder.price}
          quality={productOrder.quality}
          uriImage={productOrder.uriImage}
        />)}
      </View>
    </View>
  )
}

const EstimatedCard = () => {
  return (
    <View style={styles.cardContainer}>
      <View style={{ marginBottom: 10 }}>
        <View style={styles.textWrapper}>
          <MyText title={"Total money: "} variant="h2" color={Color.NEUTRAL_02} />
          <MyText title={"3.500.000đ"} variant="h2" color={Color.NEUTRAL_02} />
        </View>
        <View style={styles.textWrapper}>
          <MyText title={"Estimated Delivery: "} variant="h2" color={Color.NEUTRAL_02} />
          <MyText title={"04/05/2022"} variant="h2" color={Color.NEUTRAL_02} />
        </View>
      </View>
      <Divider style={{ height: 1, backgroundColor: Color.PRIMARY_YELLOW_COLOR }} />
    </View>
  )
}

const OrderDetail = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={{paddingHorizontal: 25, paddingVertical: 10, backgroundColor: Color.WHITE}}>
        <ListItemCard />
        <View style={{ marginTop: 40 }}>
          <EstimatedCard />
        </View>
      </View>
    </ScrollView>
  )
}

export default OrderDetail