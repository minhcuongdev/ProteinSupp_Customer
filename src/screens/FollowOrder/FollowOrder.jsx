import { View, FlatList } from 'react-native'
import React from 'react'

import styles from './FollowOrderStyles'

import FollowOrderCard from 'src/components/Card/FollowOrderCard'


const followOrderDummy = [{
  id: 0,
  orderTime: "4:01 12/04/2022",
  status: "Delivered",
  products: [{
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
  }],
  total: 3500000
}, {
  id: 1,
  orderTime: "4:01 12/04/2022",
  status: "Delivered",
  products: [{
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
  }],
  total: 3500000
}, {
  id: 2,
  orderTime: "4:01 12/04/2022",
  status: "Delivered",
  products: [{
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
  }],
  total: 3500000
}, {
  id: 3,
  orderTime: "4:01 12/04/2022",
  status: "Delivered",
  products: [{
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
  }],
  total: 3500000
}]


const FollowOrder = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={followOrderDummy}
        renderItem={({ item }) => <FollowOrderCard
          productsOrder={item.products}
          totalMoney={item.total}
          orderTime={item.orderTime}
          status={"Delivered order"}
        />}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
      />
    </View>
  )
}

export default FollowOrder