import { View, FlatList } from 'react-native'
import React from 'react'

import styles from './PromotionProductStyles'
import MyText from 'src/components/MyText/MyText'
import Color from 'src/constants/Color'
import ProductCard from 'src/components/Card/ProductCard'
import { useSelector } from 'react-redux'

const PromotionProduct = () => {
  const promotionalProducts = useSelector(state=>state.product.promotionalProducts)

  const renderCartProduct = ({ item }) => (
    <ProductCard nameProduct={item.name} priceProduct={item.price} uriImage={item.imageProduct} productId={item._id} />
  );


  return (
    <View style={styles.container}>
      <MyText title={"Promotional products"} variant="body1" color={Color.PRIMARY_RED_COLOR} style={styles.title} />
      <View style={styles.body}>
      <FlatList
            data={promotionalProducts}
            renderItem={renderCartProduct}
            keyExtractor={item => item._id}
            showsVerticalScrollIndicator={false}
            numColumns={2}
          />
      </View>
    </View>
  )
}

export default PromotionProduct