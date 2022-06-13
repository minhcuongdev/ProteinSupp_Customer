import { View, TouchableWithoutFeedback, Keyboard, Pressable, TextInput } from 'react-native'
import React from 'react'

import styles from './GiveFeedbackStyles'
import { useNavigation, useRoute } from '@react-navigation/native'
import MyText from 'src/components/MyText/MyText'
import Color from 'src/constants/Color'

import { AntDesign } from '@expo/vector-icons';
import { useState } from 'react'
import PrimaryButton from 'src/components/PrimaryButton/PrimaryButton'
import { useDispatch, useSelector } from 'react-redux'
import { MyDialogLoading } from 'src/components/MyDialog/MyDialog'
import commentApi from 'src/apis/commentApi'
import { setSnackBar } from 'src/redux/slices/snackBarSlice'

const GiveFeedback = () => {
  const billId = useRoute().params.billOrder
  const [text, setText] = useState('')
  const [point, setPoint] = useState(1)
  const [loading,setLoading] = useState(false)
  const dispatch = useDispatch()
  const user = useSelector(state => state.account.account)
  const billOrders = useSelector(state => state.bill.billOrders)
  const products = (billOrders.filter(bill => bill._id === billId))[0].products
  const navigation = useNavigation()

  const callApi = async (payload) => {
    setLoading(true)
    try {
      await commentApi.createComment(payload)
      navigation.goBack()
    } catch (error) {
      dispatch(setSnackBar({
        open: true,
        title: error.response.data
      }))
    } finally {
      setLoading(false)
    }
  }

  const handleComment = () => {
    const productIds = products.map(p => p.productId)
    const { username } = user

    const payload = {
      productIds: productIds,
      username: username,
      comment: text,
      point: point,
      profilePicture: user.profilePicture
    }

    callApi(payload)

  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>

      <View style={styles.container} >
        <View style={{ flex: 1 }}>
          <View>
            <MyText style={styles.text} title={"Give us your feedback"} color={Color.PRIMARY_YELLOW_COLOR} variant="h2" />
            <View style={styles.starWrapper}>
              <Pressable onPress={() => setPoint(() => 1)} style={({ pressed }) => [
                {
                  backgroundColor: pressed
                    ? Color.WHITE_ACTIVE
                    : Color.WHITE
                },
                styles.star
              ]}>
                <AntDesign style={styles.starIcon} name="star" size={30} color={Color.PRIMARY_YELLOW_COLOR} />
              </Pressable>
              <Pressable onPress={() => setPoint(() => 2)} style={({ pressed }) => [
                {
                  backgroundColor: pressed
                    ? Color.WHITE_ACTIVE
                    : Color.WHITE
                },
                styles.star
              ]}>
                <AntDesign style={styles.starIcon} name={point >= 2 ? "star" : "staro"} size={30} color={Color.PRIMARY_YELLOW_COLOR} />
              </Pressable>
              <Pressable onPress={() => setPoint(() => 3)} style={({ pressed }) => [
                {
                  backgroundColor: pressed
                    ? Color.WHITE_ACTIVE
                    : Color.WHITE
                },
                styles.star
              ]}>
                <AntDesign style={styles.starIcon} name={point >= 3 ? "star" : "staro"} size={30} color={Color.PRIMARY_YELLOW_COLOR} />
              </Pressable>
              <Pressable onPress={() => setPoint(() => 4)} style={({ pressed }) => [
                {
                  backgroundColor: pressed
                    ? Color.WHITE_ACTIVE
                    : Color.WHITE
                },
                styles.star
              ]}>
                <AntDesign style={styles.starIcon} name={point >= 4 ? "star" : "staro"} size={30} color={Color.PRIMARY_YELLOW_COLOR} />
              </Pressable>
              <Pressable onPress={() => setPoint(() => 5)} style={({ pressed }) => [
                {
                  backgroundColor: pressed
                    ? Color.WHITE_ACTIVE
                    : Color.WHITE
                },
                styles.star
              ]}>
                <AntDesign style={styles.starIcon} name={point >= 5 ? "star" : "staro"} size={30} color={Color.PRIMARY_YELLOW_COLOR} />
              </Pressable>
            </View>
          </View>
          <View>
            <MyText style={styles.text} title={"Share your opinions"} color={Color.PRIMARY_YELLOW_COLOR} variant="h2" />
            <View style={styles.textInput}>
              <TextInput multiline value={text} onChangeText={setText} selectionColor={Color.BLACK} />
            </View>
          </View>
        </View>
        <View style={styles.button}>
          <PrimaryButton disable={text.trim().length === 0 ? true : false} title={"Submit"} handleOnPress={() => handleComment()} />
        </View>
        <MyDialogLoading isVisible={loading} />
      </View>
    </TouchableWithoutFeedback>
  )
}

export default GiveFeedback