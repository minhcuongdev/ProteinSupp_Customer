import { View, Pressable } from 'react-native'
import React, { useState } from 'react'

import styles from './RegisterStyles'
import TwoCircleHeader from 'src/components/TwoCircleHeader/TwoCircleHeader'
import MyText from 'src/components/MyText/MyText'
import Color from 'src/constants/Color'
import MyTextField from 'src/components/MyTextField/MyTextField'
import PrimaryButton from 'src/components/PrimaryButton/PrimaryButton'
import { useNavigation } from '@react-navigation/native'

const Register = () => {
  const navigation = useNavigation()

  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  return (
    <View style={styles.container}>
      <TwoCircleHeader />
      <View style={styles.titleWrapper}>
        <MyText title={"Welcome OnBoard"} variant="body1" color={Color.PRIMARY_YELLOW_COLOR} />
        <MyText title={"Let's start with some facts about you"} variant="h3" color={Color.SECONDARY_YELLOW_COLOR} />
      </View>
      <View style={styles.body}>
        <View style={styles.inputWrapper}>
          <MyTextField placeholder={"Enter your full name"} value={fullName} onChangeText={setFullName} />
          <MyTextField placeholder={"Enter your email"} value={email} onChangeText={setEmail} />
          <MyTextField placeholder={"Enter your password"} value={password} onChangeText={setPassword} secureTextEntry={true} />
          <MyTextField placeholder={"Confirm password"} value={confirmPassword} onChangeText={setConfirmPassword} secureTextEntry={true} />
        </View>
        <PrimaryButton title={"Register"} />
        <View style={styles.footer}>
          <MyText title={"Already have an account?"} color={Color.PRIMARY_YELLOW_COLOR} style={{ marginRight: 10 }} variant="h4" />
          <Pressable onPress={() => navigation.navigate("Login")} style={({ pressed }) => [
          {
            backgroundColor: pressed
              ? 'rgb(210, 230, 255)'
              : 'white',
              borderRadius: 10
          },
        ]}>
            <MyText title={"Sign in"} color={Color.PRIMARY_RED_COLOR} variant="h4" />
          </Pressable>
        </View>
      </View>
    </View>
  )
}

export default Register