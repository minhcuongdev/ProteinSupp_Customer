import { View, Text, KeyboardAvoidingView, TouchableWithoutFeedback, Platform, Keyboard } from 'react-native'
import React, { useState } from 'react'

import styles from './LoginStyles'
import SocialButton from 'src/components/SocialButton/SocialButton'
import { AntDesign, FontAwesome } from '@expo/vector-icons';
import PrimaryButton from 'src/components/PrimaryButton/PrimaryButton';
import MyTextField from 'src/components/MyTextField/MyTextField';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} enabled={false} style={{flex: 1}}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
          <View style={styles.header}>
            <View style={styles.headerRedCircle}></View>
            <View style={styles.headerYellowCircle}></View>
          </View>
          <View style={styles.body}>
            <Text style={styles.title}>Welcome Back</Text>
            <Text style={styles.description} numberOfLines={2}>You can discover supplements which is suitable for you</Text>
            <View style={styles.socialButtonWrapper}>
              <SocialButton Icon={AntDesign} title={"Google"} iconName={"google"} handleOnPress={() => console.log("google")} />
              <SocialButton Icon={FontAwesome} title={"Facebook"} iconName={"facebook"} handleOnPress={() => console.log("facebook")} />
            </View>
            <View style={styles.textFieldWrapper}>
              <MyTextField value={email} placeholder={"Enter your email"} onChangeText={setEmail} />
              <MyTextField value={password} placeholder={"Enter your password"} onChangeText={setPassword} secureTextEntry={true} />
            </View>
            <Text style={styles.textForgotPassword}>Forgot Password</Text>
            <PrimaryButton title={"Sign In"} handleOnPress={() => { console.log("Sign In") }} />
            <View style={styles.textSignUpWrapper} >
              <Text style={styles.textSignUpYellow}>Don't have an account?</Text>
              <Text style={styles.textSignUpRed}>Sign up</Text>
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  )
}

export default Login