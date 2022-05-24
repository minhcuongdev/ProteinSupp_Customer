import {
  View,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Platform,
  Keyboard,
  Pressable
} from 'react-native'
import React, { useState, useEffect } from 'react'

import styles from './LoginStyles'
import SocialButton from 'src/components/SocialButton/SocialButton'
import { AntDesign, FontAwesome } from '@expo/vector-icons';
import PrimaryButton from 'src/components/PrimaryButton/PrimaryButton';
import MyTextField from 'src/components/MyTextField/MyTextField';
import TwoCircleHeader from 'src/components/TwoCircleHeader/TwoCircleHeader';
import MyText from 'src/components/MyText/MyText';
import Color from 'src/constants/Color';
import { saveAccountToDevice, saveAccessTokenToDevice, saveRefreshTokenToDevice} from 'src/utils/AsyncStorageLocal';

import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import { login } from 'src/redux/slices/accountSlice';


import authApi from 'src/apis/authApi';

const Login = () => {
  const navigation = useNavigation()
  const dispatch = useDispatch()

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  const callApi = async (account) => {
    try {
      const accountUser = await authApi.login(account)
      saveAccountToDevice(accountUser)
      saveAccessTokenToDevice(accountUser.accessToken)
      saveRefreshTokenToDevice(accountUser.refreshToken)
      dispatch(login(accountUser))
    } catch (error) {
      console.log(error)
    }
  }

  const handleSignIn = () => {
    const account = {
      email: email,
      password: password,
    }

    callApi(account)
  }

  


  return (
    <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={{ flex: 1 }}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
          <TwoCircleHeader />
          <View style={styles.body}>
            <MyText title={"Welcome Back"} color={Color.PRIMARY_YELLOW_COLOR} variant="body1" />
            <MyText title={"You can discover supplements which is suitable for you"} color={Color.SECONDARY_YELLOW_COLOR} numberOfLines={2} style={{ textAlign: "center", width: 300 }} />
            <View style={styles.socialButtonWrapper}>
              <SocialButton Icon={AntDesign} title={"Google"} iconName={"google"} handleOnPress={() => console.log("google")} />
              <SocialButton Icon={FontAwesome} title={"Facebook"} iconName={"facebook"} handleOnPress={() => console.log("facebook")} />
            </View>
            <View style={styles.textFieldWrapper}>
              <MyTextField value={email} placeholder={"Enter your email"} onChangeText={setEmail} />
            </View>
            <MyTextField value={password} placeholder={"Enter your password"} onChangeText={setPassword} secureTextEntry={true} />
            <Pressable onPress={() => navigation.navigate("ForgotPassword")} style={({ pressed }) => [
              {
                backgroundColor: pressed
                  ? Color.BLUE_ACTIVE
                  : Color.WHITE,
                borderRadius: 10,
                padding: 5
              },
              styles.textForgotPassword
            ]}>
              <MyText title={"Forgot Password"} variant="h4" color={Color.PRIMARY_RED_COLOR} />
            </Pressable>
            <PrimaryButton title={"Sign In"} handleOnPress={() => handleSignIn()} />
            <View style={styles.textSignUpWrapper} >
              <MyText title={"Don't have an account?"} variant='h4' color={Color.PRIMARY_YELLOW_COLOR} style={{ marginRight: 10 }} />
              <Pressable onPress={() => navigation.navigate("Register")} style={({ pressed }) => [
                {
                  backgroundColor: pressed
                    ? Color.BLUE_ACTIVE
                    : Color.WHITE,
                  borderRadius: 10
                },
              ]}>
                <MyText title={"Sign up"} variant="h4" color={Color.PRIMARY_RED_COLOR}>Sign up</MyText>
              </Pressable>
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  )
}

export default Login