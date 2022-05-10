import { View, Image, TouchableWithoutFeedback, Keyboard } from 'react-native'
import React, { useState } from 'react'
import ForgotPW from 'src/assets/images/forgotPw.png'
import styles from './ChangePasswordStyles'
import MyText from 'src/components/MyText/MyText'
import Color from 'src/constants/Color'
import MyTextField from 'src/components/MyTextField/MyTextField'
import PrimaryButton from 'src/components/PrimaryButton/PrimaryButton'

const ChangePassword = () => {
  const [currentPW, setCurrentPW] = useState("")
  const [newPw, setNewPw] = useState("")
  const [confirmNewPw, setConfirmNewPw] = useState("")

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <Image style={styles.image} resizeMode="cover" source={ForgotPW} />
        <MyText title={"Password must contain at least 1 letter, 1 number. Minimum length is 12 character"}
          numberOfLines={3}
          color={Color.PRIMARY_YELLOW_COLOR}
        />
        <View style={styles.textFieldContainer}>
          <MyTextField style={styles.textField} secureTextEntry value={currentPW} onChangeText={setCurrentPW} placeholder={"Enter your password"} />
          <MyTextField style={styles.textField} secureTextEntry value={newPw} onChangeText={setNewPw} placeholder={"Enter new password"} />
          <MyTextField style={styles.textField} secureTextEntry value={confirmNewPw} onChangeText={setConfirmNewPw} placeholder={"Confirm new password"} />
        </View>
        <View style={styles.buttonContainer}>
          <PrimaryButton title={"Confirm"} handleOnPress={() => console.log("Confirm")} />
        </View>
      </View>
    </TouchableWithoutFeedback>
  )
}

export default ChangePassword