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

const EditProfile = () => {
  const navigation = useNavigation()

  const [fullName, setFullName] = useState("Ton Nu Khanh Quynh")
  const [birthday, setBirthday] = useState("18 August 2001")
  const [phoneNumber, setPhoneNumber] = useState("0905674xxx")
  const [address, setAddress] = useState("KTX khu B, ĐHQG-HCM, khu pho 6, Linh Trung, Thu Duc, HCM.")
  const [gender,setGender] = useState("male")
  const [isOpenDialog,setIsOpenDialog] = useState(false)

  const toggleDialog = () => {
    setIsOpenDialog(pre => !pre)
  }

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scroll}>
        <View style={styles.avatarContainer}>
          <View>
            <Image
              source={{
                uri: "https://i.ibb.co/sy1zLNy/Khanh-Quynh.jpg"
              }}
              style={styles.image}
            />
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
          <MyEditTextField title={"Date of Birth"} value={birthday} setValue={setBirthday} />
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
          <MyEditTextField title={"Mobile Phone"} value={phoneNumber} setValue={setPhoneNumber} />
        </View>
        <View style={styles.textInputContainer}>
          <MyEditTextField title={"Address"} multiline value={address} setValue={setAddress} />
        </View>
      </ScrollView>
      <View style={styles.button}>
        <PrimaryButton title={"Save"} handleOnPress={() => toggleDialog()} />
      </View>
      <MyDialog content={"You has been updated your profile successfully!"} titleButton={"Got it"} isVisibleDialog={isOpenDialog} handleOnPress={() => {
        toggleDialog()
        navigation.goBack()
      }} />
    </View>
  )
}

export default EditProfile