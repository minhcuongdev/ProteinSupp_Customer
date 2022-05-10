import { View, FlatList } from 'react-native'
import React from 'react'

import OrderCard from 'src/components/Card/OrderCard'
import styles from './OrderStyles'

const orderDummy = [{
  id: 0,
  orderTime: "4:01 12/04/2022",
  status: "Delivered",
  products: [{
    id: 0,
    name: "Labrada Muscle Mass",
    price: "1.750.000",
    quality: 1,
    uriImage: ""
  },{
    id: 1,
    name: "Labrada Muscle Mass",
    price: "1.750.000",
    quality: 1,
    uriImage: ""
  }],
  total: "3.500.000"
},{
  id: 1,
  orderTime: "4:01 12/04/2022",
  status: "Delivered",
  products: [{
    id: 0,
    name: "Labrada Muscle Mass",
    price: "1.750.000",
    quality: 1,
    uriImage: ""
  },{
    id: 1,
    name: "Labrada Muscle Mass",
    price: "1.750.000",
    quality: 1,
    uriImage: ""
  }],
  total: "3.500.000"
},{
  id: 2,
  orderTime: "4:01 12/04/2022",
  status: "Delivered",
  products: [{
    id: 0,
    name: "Labrada Muscle Mass",
    price: "1.750.000",
    quality: 1,
    uriImage: ""
  },{
    id: 1,
    name: "Labrada Muscle Mass",
    price: "1.750.000",
    quality: 1,
    uriImage: ""
  }],
  total: "3.500.000"
},{
  id: 3,
  orderTime: "4:01 12/04/2022",
  status: "Delivered",
  products: [{
    id: 0,
    name: "Labrada Muscle Mass",
    price: "1.750.000",
    quality: 1,
    uriImage: ""
  },{
    id: 1,
    name: "Labrada Muscle Mass",
    price: "1.750.000",
    quality: 1,
    uriImage: ""
  },{
    id: 2,
    name: "Labrada Muscle Mass",
    price: "1.750.000",
    quality: 1,
    uriImage: ""
  },{
    id: 3,
    name: "Labrada Muscle Mass",
    price: "1.750.000",
    quality: 1,
    uriImage: ""
  }],
  total: "3.500.000"
}]

const Order = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={orderDummy}
        renderItem={({item}) => <OrderCard 
        orderTime={item.orderTime} 
        status={item.status}
        products={item.products}
        total={item.total}
        />}
        keyExtractor={item => item.id}
      />
    </View>
  )
}

export default Order