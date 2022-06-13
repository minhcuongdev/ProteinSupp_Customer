import { View, TouchableWithoutFeedback, Keyboard, Switch, KeyboardAvoidingView, Platform } from 'react-native'
import React, { useState } from 'react'

import styles from './NewAddressStyles'
import Color from 'src/constants/Color'
import MyText from 'src/components/MyText/MyText'

import MyEditTextField from 'src/components/MyEditTextField/MyEditTextField'
import PrimaryButton from 'src/components/PrimaryButton/PrimaryButton'
import MyDialog, { MyDialogLoading } from 'src/components/MyDialog/MyDialog'
import addressApi from 'src/apis/addressApi'
import { useDispatch } from 'react-redux'
import { addAddress } from 'src/redux/slices/addressSlice'
import { useNavigation } from '@react-navigation/native'
import { setSnackBar } from 'src/redux/slices/snackBarSlice'

const NewAddress = () => {
  const navigation = useNavigation()
  const dispatch = useDispatch()

  const [fullName, setFullName] = useState("")
  const [numberPhone, setNumberPhone] = useState("")
  const [address, setAddress] = useState("")
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => {setIsEnabled(previousState => !previousState)};

  const [isOpenDialog, setIsOpenDialog] = useState(false)
  const [loading, setLoading] = useState(false)
  const toggleDialog = () => { setIsOpenDialog(pre => !pre) }

  const callApi = async (payload) => {
    try {
      setLoading(true)
      const address = await addressApi.createAddress(payload)
      dispatch(addAddress(address))
      toggleDialog();
    } catch (error) {
      console.log(error)
      dispatch(setSnackBar({
        open: true,
        title: error.response.data
      }))
    } finally {
      setLoading(false)
    }
  }

  const onAdd = () => {
    const payload = {
      address: address,
      nameReceivedUser: fullName,
      numberPhone: numberPhone,
      addressDefault: isEnabled
    }
    callApi(payload)
  }

  return (
    <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={{flex: 1}}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
          <View >
            <MyText title={"Contact"} variant="h1" color={Color.PRIMARY_YELLOW_COLOR} style={styles.textTitleContact} />
            <View style={styles.editInfoContainer}>
              <MyEditTextField title={"Full name"} value={fullName} setValue={setFullName} />
              <MyEditTextField keyboardType='numeric' title={"Mobile number"} value={numberPhone} setValue={setNumberPhone} />
              <MyEditTextField multiline={true} numberOfLines={2} title={"Address"} value={address} setValue={setAddress} />
            </View>
            <View style={styles.switchContainer}>
              <MyText title={"Set this address as default "} color={Color.NEUTRAL_02} />
              <Switch
                trackColor={{ false: Color.NEUTRAL_03, true: Color.PRIMARY_YELLOW_COLOR }}
                thumbColor={Color.PRIMARY_YELLOW_COLOR}
                onValueChange={toggleSwitch}
                value={isEnabled}
              />
            </View>
          </View>
          <View style={styles.button}>
            <PrimaryButton title={"Add"} handleOnPress={() => onAdd()} />
          </View>
          <MyDialog content={"You has been added your new address successfully!"} titleButton={"Got it"} isVisibleDialog={isOpenDialog} handleOnPress={() => {
            toggleDialog()
            navigation.goBack()
          }} />
          <MyDialogLoading isVisible={loading} />
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  )
}

export default NewAddress