import { View, Image } from 'react-native'
import React from 'react'

import styles from './ProfileStyles'
import MyText from 'src/components/MyText/MyText'
import Color from 'src/constants/Color'
import { FormatStringToBirthday } from 'src/utils/Calculator'

import { useSelector } from 'react-redux'
import defaultUserImage from 'src/assets/images/default-user-image.png'

const Profile = () => {
  const user = useSelector(state => state.account.account)

  return (
    <View style={styles.container}>
      <View style={styles.avatarContainer}>
        {user.profilePicture ?<Image 
          source={{
            uri: user.profilePicture
          }}
          style={styles.image}
        />:   <Image 
        source={defaultUserImage}
        style={styles.image}
      />}
       
      </View>
      <View style={styles.textWrapper}>
          <MyText title={"Name"} variant="h1" style={styles.textTitle} color={Color.PRIMARY_YELLOW_COLOR} />
          <MyText title={user.username} variant="h3" style={styles.text} color={Color.NEUTRAL_02} />
      </View>
      <View style={styles.textWrapper}>
          <MyText title={"DOB"} variant="h1" style={styles.textTitle} color={Color.PRIMARY_YELLOW_COLOR} />
          <MyText title={FormatStringToBirthday(user.birthday)} variant="h3" style={styles.text} color={Color.NEUTRAL_02} />
      </View>
      <View style={styles.textWrapper}>
          <MyText title={"Gender"} variant="h1" style={styles.textTitle} color={Color.PRIMARY_YELLOW_COLOR} />
          <MyText title={user.gender} variant="h3" style={styles.text} color={Color.NEUTRAL_02} />
      </View>
      <View style={styles.textWrapper}>
          <MyText title={"PhoneNo."} variant="h1" style={styles.textTitle} color={Color.PRIMARY_YELLOW_COLOR} />
          <MyText title={user.phoneNo} variant="h3" style={styles.text} color={Color.NEUTRAL_02} />
      </View>
      <View style={{alignItems :"flex-start"}}>
          <MyText title={"Address"} variant="h1" style={[styles.textTitle, {marginBottom: 10}]} color={Color.PRIMARY_YELLOW_COLOR} />
          <MyText numberOfLines={3} title={user.address} variant="h3" style={styles.text} color={Color.NEUTRAL_02} />
      </View>
    </View>
  )
}

export default Profile