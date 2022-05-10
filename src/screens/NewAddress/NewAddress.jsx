import { View, TouchableWithoutFeedback, Keyboard, Switch } from 'react-native'
import React, { useState } from 'react'

import styles from './NewAddressStyles'
import Color from 'src/constants/Color'
import MyText from 'src/components/MyText/MyText'

import MyEditTextField from 'src/components/MyEditTextField/MyEditTextField'
import PrimaryButton from 'src/components/PrimaryButton/PrimaryButton'
import MyDialog from 'src/components/MyDialog/MyDialog'

import { useNavigation } from '@react-navigation/native'

const NewAddress = () => {
  const navigation = useNavigation()

  const [fullName, setFullName] = useState("Ton Nu Khanh Quynh")
  const [numberPhone, setNumberPhone] = useState("0905674xxx")
  const [address, setAddress] = useState("KTX khu B, khu pho 6, phuong Linh Trung, quan Thu Duc, TP.HCM")
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  const [isOpenDialog,setIsOpenDialog] = useState(false)
  const toggleDialog = () => { setIsOpenDialog(pre => !pre)}

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <View style={{flex: 1}}>
          <MyText title={"Contact"} variant="h1" color={Color.PRIMARY_YELLOW_COLOR} style={styles.textTitleContact} />
          <View style={styles.editInfoContainer}>
            <MyEditTextField title={"Full name"} value={fullName} setValue={setFullName} />
            <MyEditTextField title={"Mobile number"} value={numberPhone} setValue={setNumberPhone} />
            <MyEditTextField multiline={true} title={"Address"} value={address} setValue={setAddress} />
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
          <PrimaryButton title={"Add"} handleOnPress={() => toggleDialog()} />
        </View>
        <MyDialog content={"You has been added your new address successfully!"} titleButton={"Got it"} isVisibleDialog={isOpenDialog} handleOnPress={() => {
          toggleDialog()
          navigation.goBack()
        }} />
      </View>
    </TouchableWithoutFeedback>
  )
}

export default NewAddress