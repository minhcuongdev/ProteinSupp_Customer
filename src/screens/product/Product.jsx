import { View, FlatList } from 'react-native'
import React from 'react'

import styles from './ProductStyles'
import MyText from 'src/components/MyText/MyText'
import Color from 'src/constants/Color'
import Search from 'src/components/Search/Search'
import ScrollableTabs from 'src/components/ScrollableTabs/ScrollableTabs'
import ProductCard from 'src/components/Card/ProductCard'

const productDummy = [
  {
    id: 0,
    nameProduct: "Labrada Leanbody For Her",
    priceProduct: "3.500.000",
    uri: "..."
  },
  {
    id: 1,
    nameProduct: "Labrada Leanbody For Her",
    priceProduct: "3.500.000",
    uri: "..."
  },
  {
    id: 2,
    nameProduct: "Labrada Leanbody For Her",
    priceProduct: "3.500.000",
    uri: "..."
  },
  {
    id: 3,
    nameProduct: "Labrada Leanbody For Her",
    priceProduct: "3.500.000",
    uri: "..."
  },
  {
    id: 4,
    nameProduct: "Labrada Leanbody For Her",
    priceProduct: "3.500.000",
    uri: "..."
  }, {
    id: 5,
    nameProduct: "Labrada Leanbody For Her",
    priceProduct: "3.500.000",
    uri: "..."
  },
  {
    id: 6,
    nameProduct: "Labrada Leanbody For Her",
    priceProduct: "3.500.000",
    uri: "..."
  },
  {
    id: 7,
    nameProduct: "Labrada Leanbody For Her",
    priceProduct: "3.500.000",
    uri: "..."
  },
  {
    id: 8,
    nameProduct: "Labrada Leanbody For Her",
    priceProduct: "3.500.000",
    uri: "..."
  },
  {
    id: 9,
    nameProduct: "Labrada Leanbody For Her",
    priceProduct: "3.500.000",
    uri: "..."
  },
]

const Product = () => {

  const renderCartProduct = ({ item }) => (
    <ProductCard nameProduct={item.nameProduct} priceProduct={item.priceProduct} />
  );

  return (
    <View style={styles.container}>
      <MyText title={"Product"} variant='body1' color={Color.PRIMARY_RED_COLOR} style={styles.title} />
      <View style={styles.search}>
        <Search />
      </View>
      <View style={styles.scroll}>
        <ScrollableTabs />
      </View>
      <View style={styles.body}>
        <FlatList
          data={productDummy}
          renderItem={renderCartProduct}
          keyExtractor={item => item.id}
          showsVerticalScrollIndicator={false}
          numColumns={2}
        />
      </View>
    </View>
  )
}

export default Product