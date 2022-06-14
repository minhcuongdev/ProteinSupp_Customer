import { View, Pressable } from 'react-native'
import React from 'react'

import styles from './CancelOrderStyles'
import { useNavigation, useRoute } from '@react-navigation/native'
import MyText from 'src/components/MyText/MyText'
import Color from 'src/constants/Color'
import PrimaryButton from 'src/components/PrimaryButton/PrimaryButton'
import billApi from 'src/apis/billApi'
import { useState } from 'react'
import { MyDialogLoading } from 'src/components/MyDialog/MyDialog'
import { useDispatch } from 'react-redux'
import { setSnackBar } from 'src/redux/slices/snackBarSlice'
import { removeBill } from 'src/redux/slices/billSlice'

const CancelOrder = () => {
  const [loading,setLoading] = useState(false)
  const { billId } = useRoute().params;
  const [numberSelected, setNumberSelected] = useState(0)
  const dispatch = useDispatch();
  const navigation = useNavigation()

  const callApi = async (payload) => {
    setLoading(true)
    try {
      const response = await billApi.updatedBill(billId, payload)
      dispatch(removeBill(response))
      navigation.navigate("Follow Order")
      dispatch(setSnackBar({
        open: true,
        title: "Cancel bill successfully"
      }))
    } catch (error) {
      dispatch(setSnackBar({
        open: true,
        title: error.response.data
      }))
    } finally {
      setLoading(false)
    }
  }

  const handleCancel = () => {
    const payload = {
      cancel: true
    }

    callApi(payload)
  }

  return (
    <View style={styles.container}>
      <View style={{ flex: 1 }}>
        <MyText title={"Choose the cancellation reason"} variant="h2" color={Color.PRIMARY_YELLOW_COLOR} />
        <View style={styles.warning}>
          <MyText numberOfLines={8} style={styles.text} title={"Please choose the cancellation reason. With this reason, all products in your cart will be removed and you cannot change anymore."} />
        </View>
        <View style={{ marginTop: 40 }}>
          <Pressable onPress={() => setNumberSelected(1)} style={styles.textWrapper}>
            <View style={numberSelected === 1 ? styles.circleActive  : styles.circleInActive} />
            <MyText title={"Want to change delivery address"} />
          </Pressable>
          <Pressable onPress={() => setNumberSelected(2)} style={styles.textWrapper}>
            <View style={numberSelected === 2 ? styles.circleActive  : styles.circleInActive}  />
            <MyText title={"Want to enter/change vouchers"} />
          </Pressable>
          <Pressable onPress={() => setNumberSelected(3)} style={styles.textWrapper}>
            <View style={numberSelected === 3 ? styles.circleActive  : styles.circleInActive}  />
            <MyText title={"Want to change products in order"} />
          </Pressable>
          <Pressable onPress={() => setNumberSelected(4)} style={styles.textWrapper}>
            <View style={numberSelected === 4 ? styles.circleActive  : styles.circleInActive}  />
            <MyText title={"Payment process was too complex"} />
          </Pressable>
          <Pressable onPress={() => setNumberSelected(5)} style={styles.textWrapper}>
            <View style={numberSelected === 5 ? styles.circleActive  : styles.circleInActive}  />
            <MyText title={"Very low delivery"} />
          </Pressable>
          <Pressable onPress={() => setNumberSelected(6)} style={styles.textWrapper}>
            <View style={numberSelected === 6 ? styles.circleActive  : styles.circleInActive}  />
            <MyText title={"Duplicate order"} />
          </Pressable>
        </View>
      </View>
      <View>
        <PrimaryButton disable={numberSelected === 0 ? true : false} title={"Cancel"} handleOnPress={() => handleCancel()} />
      </View>
      <MyDialogLoading isVisible={loading} />
    </View>
  )
}

export default CancelOrder