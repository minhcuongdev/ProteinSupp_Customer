import { View, Pressable } from 'react-native'
import React from 'react'
import MyText from '../MyText/MyText'

import styles from './CardStyles'
import Color from 'src/constants/Color'
import { Ionicons } from '@expo/vector-icons'; 
import { useDispatch } from 'react-redux'
import { setSnackBar } from 'src/redux/slices/snackBarSlice'
import addressApi from 'src/apis/addressApi'
import { deleteAddress } from 'src/redux/slices/addressSlice'

const AddressCard = ({nameUser, numberPhone, address, addressId, addressDefault }) => {
  const dispatch = useDispatch()

  const callApi = async () => {
    try {
      const response = await addressApi.deleteAddress(addressId)
      dispatch(deleteAddress(addressId))
      dispatch(setSnackBar({
        open: true,
        title: response
      }))
    } catch (error) {
      dispatch(setSnackBar({
        open: true,
        title: error.response.data
      }))
    }
  }

  const removeCard = () => {
    callApi()
  }

  return (
    <View style={styles.addressCardContainer}>
      <View style={styles.infoUserWrapper}>
        <MyText title={nameUser} variant="h1" style={styles.nameUserText} />
        <MyText title={numberPhone} variant="h3" color={Color.NEUTRAL_02} style={{fontSize: 12}} />
        <MyText numberOfLines={2} color={Color.NEUTRAL_02} title={address} variant="h3" style={{fontSize: 12, textAlign: "justify"}} />
      </View>
      <View style={styles.iconAddressWrapper}> 
      <Pressable onPress={() => removeCard()} style={({ pressed }) => [
          {
            backgroundColor: pressed
              ? Color.WHITE_ACTIVE
              : Color.WHITE
          },
        ]}>
        <Ionicons name="ios-close" size={35} color={Color.PRIMARY_YELLOW_COLOR} />
      </Pressable>
      <MyText title={addressDefault ? "Default" : ""} variant="h2" color={Color.PRIMARY_YELLOW_COLOR} style={{width: 130, marginRight: 30}} />
      </View>
    </View>
  )
}

export default AddressCard