import { View, Image, TouchableWithoutFeedback, Keyboard } from 'react-native'
import React, { useState } from 'react'
import ForgotPW from 'src/assets/images/forgotPw.png'
import styles from './ChangePasswordStyles'
import MyText from 'src/components/MyText/MyText'
import Color from 'src/constants/Color'
import MyTextField from 'src/components/MyTextField/MyTextField'
import PrimaryButton from 'src/components/PrimaryButton/PrimaryButton'
import { useDispatch, useSelector } from 'react-redux'
import { setSnackBar } from 'src/redux/slices/snackBarSlice'
import userApi from 'src/apis/userApi'
import { useNavigation } from '@react-navigation/native'
import { MyDialogLoading } from 'src/components/MyDialog/MyDialog'
import { HelperText } from 'react-native-paper';

const ChangePassword = () => {
  const user = useSelector(state => state.account.account)
  const dispatch = useDispatch();
  const [currentPW, setCurrentPW] = useState("")
  const [newPw, setNewPw] = useState("")
  const [confirmNewPw, setConfirmNewPw] = useState("")

  const [loading,setLoading] = useState(false)
  const navigation = useNavigation()

  const callApi = async (payload) => {
    setLoading(true)
    try {
      await userApi.updateInfoUser(user._id, payload)
      navigation.goBack()
      dispatch(setSnackBar({
        open: true,
        title: "Change password successfully"
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

  const handleChangePassword = () => {
    if(newPw !== confirmNewPw) {
      dispatch(setSnackBar({
        open: true,
        title: "Confirm password is not correct"
      }))
      return
    }
    const payload = {
      oldPassword: currentPW,
      newPassword: newPw.trim()
    }

    callApi(payload)
  }

  const hasErrors = () => {
    return newPw.length < 9 && newPw !== ""
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <Image style={styles.image} resizeMode="cover" source={ForgotPW} />
        <MyText title={"Password must contain at least 1 letter, 1 number. Minimum length is 9 character"}
          numberOfLines={3}
          color={Color.PRIMARY_YELLOW_COLOR}
        />
        <View style={styles.textFieldContainer}>
          <MyTextField style={styles.textField} secureTextEntry value={currentPW} onChangeText={setCurrentPW} placeholder={"Enter your password"} />
          <View >
          <MyTextField secureTextEntry value={newPw} onChangeText={setNewPw} placeholder={"Enter new password"} />
          <HelperText type="error" visible={hasErrors()}>
            Minimum length is 9 character
          </HelperText>
          </View>
          <MyTextField style={styles.textField} secureTextEntry value={confirmNewPw} onChangeText={setConfirmNewPw} placeholder={"Confirm new password"} />
        </View>
        <View style={styles.buttonContainer}>
          <PrimaryButton title={"Confirm"} handleOnPress={() => handleChangePassword()} />
        </View>
        <MyDialogLoading isVisible={loading} />
      </View>
    </TouchableWithoutFeedback>
  )
}

export default ChangePassword