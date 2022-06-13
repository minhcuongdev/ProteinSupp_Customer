import { View, FlatList } from 'react-native'
import React from 'react'

import OrderCard from 'src/components/Card/OrderCard'
import styles from './OrderStyles'
import billApi from 'src/apis/billApi'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setSnackBar } from 'src/redux/slices/snackBarSlice'
import { setBillOrders } from 'src/redux/slices/billSlice'
import { useState } from 'react'
import { FormatMoney, FormatStringToBirthday } from 'src/utils/Calculator'

const Order = () => {
  const dispatch = useDispatch()
  const [refreshing,setRefreshing] = useState(false)
  const billOrder = useSelector(state => state.bill.billOrders)

  const callApi = async () => {
    try {
      const response = await billApi.getOrderBill();
      dispatch(setBillOrders(response))
    } catch (error) {
      dispatch(setSnackBar({
        open: true,
        title: error.response.data
      }))
    }
  }

  useEffect(() => {
    callApi()
  }, [])

  return (
    <View style={styles.container}>
      <FlatList
        data={billOrder}
        renderItem={({item}) => <OrderCard 
        orderTime={FormatStringToBirthday(item.dateOrder)} 
        status={item.status}
        products={item.products}
        total={FormatMoney(item.totalPrice)}
        billId={item._id}
        />}
        keyExtractor={item => item._id}
        refreshing={refreshing}
        onRefresh={() => callApi()}
      />
    </View>
  )
}

export default Order