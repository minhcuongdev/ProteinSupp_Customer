import { View, Image, Pressable, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { Entypo } from '@expo/vector-icons';
import styles from './EditProfileStyles'
import Color from 'src/constants/Color';
import MyText from 'src/components/MyText/MyText';
import MyEditTextField from 'src/components/MyEditTextField/MyEditTextField';
import PrimaryButton from 'src/components/PrimaryButton/PrimaryButton';
import MyDialog from 'src/components/MyDialog/MyDialog';
import { useNavigation } from '@react-navigation/native';
import { useSelector, useDispatch } from 'react-redux';
import defaultUserImage from 'src/assets/images/default-user-image.png'
import userApi from 'src/apis/userApi';
import { setAccount } from 'src/redux/slices/accountSlice';
import { saveAccountToDevice } from 'src/utils/AsyncStorageLocal';
import { MyEditTextFieldBirthday } from 'src/components/MyEditTextField/MyEditTextField';

const EditProfile = () => {
  const navigation = useNavigation()
  const dispatch = useDispatch()

  const user = useSelector(state => state.account.account)
  

  const [fullName, setFullName] = useState(user.username)
  const [birthday, setBirthday] = useState(user.birthday)
  const [phoneNumber, setPhoneNumber] = useState(user.phoneNo)
  const [address, setAddress] = useState(user.address)
  const [gender,setGender] = useState(user.gender)
  const [isOpenDialog,setIsOpenDialog] = useState(false)

  const handleSave = async () => {
    try {
      const payloadUpdateInfoUser = {
        username: fullName,
        birthday: birthday,
        phoneNo: phoneNumber,
        gender: gender,
        address: address
      }
      const newInfo = await userApi.updateInfoUser(user._id,payloadUpdateInfoUser)
      dispatch(setAccount(newInfo))
      saveAccountToDevice(newInfo)
      toggleDialog()
    } catch (error) {
      console.log(error)
    }

  }

  const toggleDialog = () => {
    setIsOpenDialog(pre => !pre)
  }

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scroll}>
        <View style={styles.avatarContainer}>
          <View>
            {user.profilePicture ? <Image
              source={{
                uri: user.profilePicture
              }}
              style={styles.image}
            />: <Image
            source={defaultUserImage}
            style={styles.image}
          />}
            
            <Pressable onPress={() => console.log("open camera")} style={({ pressed }) => [
              {
                backgroundColor: pressed
                  ? Color.WHITE_ACTIVE
                  : Color.WHITE
              },
              styles.cameraContainer
            ]}>
              <Entypo name="camera" size={16} color={Color.PRIMARY_YELLOW_COLOR} />
            </Pressable>
          </View>
        </View>
        <MyText title={"Basic Detail"} variant="h1" style={styles.textTitle} color={Color.PRIMARY_YELLOW_COLOR} />
        <View style={styles.textInputContainer}>
          <MyEditTextField title={"Full name"} value={fullName} setValue={setFullName} />
        </View>
        <View style={styles.textInputContainer}>
          <MyEditTextFieldBirthday title={"Date of Birth"} value={birthday} setValue={setBirthday} />
        </View>
        <View style={{ height: 100 }}>
          <MyText title={"Gender"} color={Color.NEUTRAL_02} style={{ textAlign: "left", marginBottom: 5 }} />
          <View style={styles.selectedIconWrapper}>
            <View style={styles.selectedContainer}>
              <Pressable onPress={() => setGender("male")} style={styles.selectedIconContainer}>
                <View style={[styles.selectedIcon, {backgroundColor: gender === "male" ? Color.PRIMARY_YELLOW_COLOR : Color.WHITE}]} />
              </Pressable>
              <MyText title={"Male"} variant="h3" color={Color.NEUTRAL_02} />
            </View>
            <View style={styles.selectedContainer}>
              <Pressable onPress={() => setGender("female")} style={styles.selectedIconContainer}>
                <View style={[styles.selectedIcon, {backgroundColor: gender === "female" ? Color.PRIMARY_YELLOW_COLOR : Color.WHITE}]}></View>
              </Pressable>
              <MyText title={"Female"} variant="h3" color={Color.NEUTRAL_02} />
            </View>
          </View>
        </View>
        <MyText title={"Contact Detail"} variant="h1" style={styles.textTitle} color={Color.PRIMARY_YELLOW_COLOR} />
        <View style={styles.textInputContainer}>
          <MyEditTextField title={"Mobile Phone"} value={phoneNumber} setValue={setPhoneNumber} keyboardType={"numeric"} />
        </View>
        <View style={styles.textInputContainer}>
          <MyEditTextField title={"Address"} multiline value={address} setValue={setAddress} />
        </View>
      </ScrollView>
      <View style={styles.button}>
        <PrimaryButton title={"Save"} handleOnPress={() => handleSave()} />
      </View>
      <MyDialog content={"You has been updated your profile successfully!"} titleButton={"Got it"} isVisibleDialog={isOpenDialog} handleOnPress={() => {
        toggleDialog()
        navigation.goBack()
      }} />
    </View>
  )
}

export default EditProfile