import { View, Image } from 'react-native'
import React from 'react'

import styles from './ProfileStyles'
import MyText from 'src/components/MyText/MyText'
import Color from 'src/constants/Color'

const Profile = () => {
  return (
    <View style={styles.container}>
      <View style={styles.avatarContainer}>
        <Image 
          source={{
            uri: "https://i.ibb.co/sy1zLNy/Khanh-Quynh.jpg"
          }}
          style={styles.image}
        />
      </View>
      <View style={styles.textWrapper}>
          <MyText title={"Name"} variant="h1" style={styles.textTitle} color={Color.PRIMARY_YELLOW_COLOR} />
          <MyText title={"Ton Nu Khanh Quynh"} variant="h3" style={styles.text} color={Color.NEUTRAL_02} />
      </View>
      <View style={styles.textWrapper}>
          <MyText title={"DOB"} variant="h1" style={styles.textTitle} color={Color.PRIMARY_YELLOW_COLOR} />
          <MyText title={"18 August 2001"} variant="h3" style={styles.text} color={Color.NEUTRAL_02} />
      </View>
      <View style={styles.textWrapper}>
          <MyText title={"Gender"} variant="h1" style={styles.textTitle} color={Color.PRIMARY_YELLOW_COLOR} />
          <MyText title={"Female"} variant="h3" style={styles.text} color={Color.NEUTRAL_02} />
      </View>
      <View style={styles.textWrapper}>
          <MyText title={"PhoneNo."} variant="h1" style={styles.textTitle} color={Color.PRIMARY_YELLOW_COLOR} />
          <MyText title={"0905674xxx"} variant="h3" style={styles.text} color={Color.NEUTRAL_02} />
      </View>
      <View style={{alignItems :"flex-start"}}>
          <MyText title={"Address"} variant="h1" style={[styles.textTitle, {marginBottom: 10}]} color={Color.PRIMARY_YELLOW_COLOR} />
          <MyText numberOfLines={3} title={"KTX khu B, ĐHQG-HCM, khu pho 6, phuong Linh Trung, quan Thu Duc, TP.HCM."} variant="h3" style={styles.text} color={Color.NEUTRAL_02} />
      </View>
    </View>
  )
}

export default Profile