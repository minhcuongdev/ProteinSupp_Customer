import { View, FlatList } from 'react-native'
import React from 'react'

import styles from './CartStyles'
import ProductCartCard from 'src/components/Card/ProductCartCard'
import DiscountButton from 'src/components/DiscountButton/DiscountButton'
import MyText from 'src/components/MyText/MyText'
import Color from 'src/constants/Color'
import PrimaryButton from 'src/components/PrimaryButton/PrimaryButton'

import { useNavigation } from '@react-navigation/native'
import { useSelector } from 'react-redux'
import { FormatMoney } from 'src/utils/Calculator'


const Cart = () => {
  const navigation = useNavigation()
  const productsInCart = useSelector(state => state.cart.productInCart)
  const totalPrice = useSelector(state => state.cart.totalMoney)

  return (
    <View style={styles.container}>
      <View style={styles.productCartContainer}>
        <FlatList
          data={productsInCart}
          renderItem={({ item }) => (<ProductCartCard nameProduct={item.name}
            priceProduct={item.price}
            idProduct={item._id}
            uriImage={item.imageProduct} 
            checked={item.checked}
            quality={item.quality}
          />)}
          keyExtractor={(item) => item._id}
          showsVerticalScrollIndicator={false}
        />
      </View>
      <DiscountButton title={"Enter your code discount"} onPressButton={() => console.log("discount")} />
      <View style={styles.totalPriceWrapper}>
        <MyText title={"TOTAL"} variant="h1" color={Color.GRAY_03} />
        <MyText title={`${FormatMoney(totalPrice)} đ`} variant="h1" color={Color.PRIMARY_YELLOW_COLOR} />
      </View>
      <View style={styles.button}>
        <PrimaryButton disable={productsInCart.length > 0 && totalPrice > 0 ? false : true} handleOnPress={() => navigation.navigate("Payment")} title={"Checkout"} />
      </View>
    </View>
  )
}

export default Cart