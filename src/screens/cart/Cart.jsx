import { View, FlatList } from 'react-native'
import React from 'react'

import styles from './CartStyles'
import ProductCartCard from 'src/components/Card/ProductCartCard'
import DiscountButton from 'src/components/DiscountButton/DiscountButton'
import MyText from 'src/components/MyText/MyText'
import Color from 'src/constants/Color'
import PrimaryButton from 'src/components/PrimaryButton/PrimaryButton'

import { useNavigation } from '@react-navigation/native'

const productDummy = [{
  id: 0,
  name: "Labrada Muscle Mass",
  price: "1.750.000",
  uriImage: "..."
},{
  id: 1,
  name: "Labrada Muscle Mass",
  price: "1.750.000",
  uriImage: "..."
},{
  id: 2,
  name: "Labrada Muscle Mass",
  price: "1.750.000",
  uriImage: "..."
},{
  id: 3,
  name: "Labrada Muscle Mass",
  price: "1.750.000",
  uriImage: "..."
},{
  id: 4,
  name: "Labrada Muscle Mass",
  price: "1.750.000",
  uriImage: "..."
},{
  id: 5,
  name: "Labrada Muscle Mass",
  price: "1.750.000",
  uriImage: "..."
}]

const Cart = () => {
  const navigation = useNavigation()

  return (
    <View style={styles.container}>
      <View style={styles.productCartContainer}>
        <FlatList 
          data={productDummy}
          renderItem={({item}) => (<ProductCartCard nameProduct={item.name} priceProduct={item.price} />)}
          keyExtractor={(item) => item.id}
          showsVerticalScrollIndicator={false}
        />
      </View>
      <DiscountButton title={"Enter your code discount"} onPressButton={() => console.log("discount")}/>
      <View style={styles.totalPriceWrapper}>
        <MyText title={"TOTAL"} variant="h1" color={Color.GRAY_03} />
        <MyText title={"5.250.000 đ"} variant="h1" color={Color.PRIMARY_YELLOW_COLOR} />
      </View>
      <View style={styles.button}>
        <PrimaryButton handleOnPress={() => navigation.navigate("Payment")} title={"Checkout"} />
      </View>
    </View>
  )
}

export default Cart