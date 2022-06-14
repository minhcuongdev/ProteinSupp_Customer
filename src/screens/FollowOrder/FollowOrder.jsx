import { View, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'

import styles from './FollowOrderStyles'
import { useDispatch, useSelector } from 'react-redux'
import FollowOrderCard from 'src/components/Card/FollowOrderCard'
import billApi from 'src/apis/billApi'
import { setSnackBar } from 'src/redux/slices/snackBarSlice'
import { FormatStringToBirthday } from 'src/utils/Calculator'
import { setBills } from 'src/redux/slices/billSlice'

const FollowOrder = () => {
  const dispatch = useDispatch();
  const bills = useSelector(state => state.bill.bills)
  const [refreshing,setRefreshing] = useState(false)


  const callApi = async () => {
    try {
      const bills = await billApi.getAllBill()
      dispatch(setBills(bills))
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
        data={bills}
        renderItem={({ item }) => <FollowOrderCard
          productsOrders={item.products}
          totalMoney={item.totalPrice}
          orderTime={FormatStringToBirthday(item.dateOrder)}
          status={item.status}
          billId = {item._id}
        />}
        keyExtractor={(item) => item._id}
        showsVerticalScrollIndicator={false}
        refreshing={refreshing}
        onRefresh={() => callApi()}
      />
    </View>
  )
}

export default FollowOrder