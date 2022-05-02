import { View, Image, Pressable } from 'react-native'
import React, {useState} from 'react'

import Color from 'src/constants/Color'
import styles from './ForgotPasswordStyles'
import TwoCircleHeader from 'src/components/TwoCircleHeader/TwoCircleHeader'

import ForgotPW from 'src/assets/images/forgotPw.png'
import MyText from 'src/components/MyText/MyText'
import MyTextField from 'src/components/MyTextField/MyTextField'
import PrimaryButton from 'src/components/PrimaryButton/PrimaryButton'

import { useNavigation } from '@react-navigation/native'

const ForgotPassword = () => {
  const navigation = useNavigation()

  const [email,setEmail] = useState('')

  return (
    <View style={styles.container}>
      <TwoCircleHeader />
      <View style={{alignItems: 'center'}}>
      <Image style={styles.image} resizeMode="cover" source={ForgotPW} />
      </View>
      <View style={styles.titleWrapper}>
        <MyText title={"Forgot password?"} variant="body1" color={Color.PRIMARY_YELLOW_COLOR} />
        <MyText title={"Enter you register email below to receive password reset instruction"} numberOfLines={2} style={{width: 350}} variant="h3" color={Color.SECONDARY_YELLOW_COLOR} />
      </View>
      <View style={styles.inputWrapper}>
          <MyTextField placeholder={"Enter your email"} value={email} onChangeText={setEmail} />
          <PrimaryButton title={"Send"} />
      </View>
      <View style={styles.footer}>
        <Pressable onPress={() =>navigation.navigate("Login")} style={({ pressed }) => [
          {
            backgroundColor: pressed
              ? Color.BLUE_ACTIVE
              : Color.WHITE,
              width: 150,
              height: 30,
              borderRadius: 10,
              justifyContent: "center"
          }
        ]}>
          <MyText title={"Back to Sign in"} variant="h4" color={Color.PRIMARY_RED_COLOR}/>
        </Pressable>
      </View>
    </View>
  )
}

export default ForgotPassword