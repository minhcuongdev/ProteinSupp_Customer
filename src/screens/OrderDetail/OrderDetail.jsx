import { View, ScrollView } from 'react-native'
import React, { useEffect } from 'react'
import MyText from 'src/components/MyText/MyText'
import Color from 'src/constants/Color'
import { Divider } from 'react-native-paper'

import styles from './OrderDetailStyles'
import { ProductItem } from 'src/components/Card/OrderCard'
import { useRoute } from '@react-navigation/native'
import { useDispatch, useSelector } from 'react-redux'
import { getBillById } from 'src/redux/slices/billSlice'
import { FormatMoney, FormatStringToBirthday } from 'src/utils/Calculator'

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

const ListItemCard = ({products}) => {
  return (
    <View style={styles.cardContainer}>
      <MyText title={"List of items in order"} variant="h2" color={Color.PRIMARY_YELLOW_COLOR} style={{ textAlign: "left", marginBottom: 10 }} />
      <Divider style={{ height: 1, backgroundColor: Color.PRIMARY_YELLOW_COLOR }} />
      <View style={styles.productsContainer}>
        {products.map((productOrder, index) => <ProductItem key={index}
          title={productOrder.nameProduct}
          price={productOrder.priceProduct}
          quality={productOrder.quality}
          uriImage={productOrder.imageProduct}
        />)}
      </View>
    </View>
  )
}

const EstimatedCard = ({totalPrice, dateReceive}) => {
  return (
    <View style={styles.cardContainer}>
      <View style={{ marginBottom: 10 }}>
        <View style={styles.textWrapper}>
          <MyText title={"Total money: "} variant="h2" color={Color.NEUTRAL_02} />
          <MyText title={`${FormatMoney(totalPrice)}đ`} variant="h2" color={Color.NEUTRAL_02} />
        </View>
        <View style={styles.textWrapper}>
          <MyText title={"Estimated Delivery: "} variant="h2" color={Color.NEUTRAL_02} />
          <MyText title={FormatStringToBirthday(dateReceive)} variant="h2" color={Color.NEUTRAL_02} />
        </View>
      </View>
      <Divider style={{ height: 1, backgroundColor: Color.PRIMARY_YELLOW_COLOR }} />
    </View>
  )
}

const OrderDetail = () => {
  const dispatch = useDispatch();
  const billId = useRoute().params;
  const bill = useSelector(state => state.bill.bill)

  useEffect(() => {
    dispatch(getBillById(billId))
  }, [billId])

  return (
    <ScrollView style={styles.container}>
      <View style={{paddingHorizontal: 25, paddingVertical: 10, backgroundColor: Color.WHITE}}>
        <ListItemCard products={bill.products || []} />
        <View style={{ marginTop: 40 }}>
          <EstimatedCard totalPrice={bill.totalPrice} dateReceive={bill.dateReceive} />
        </View>
      </View>
    </ScrollView>
  )
}

export default OrderDetail