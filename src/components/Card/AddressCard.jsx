import { View, Pressable } from 'react-native'
import React from 'react'
import MyText from '../MyText/MyText'

import styles from './CardStyles'
import Color from 'src/constants/Color'
import { Ionicons, Octicons  } from '@expo/vector-icons'; 

const AddressCard = ({nameUser, numberPhone, address }) => {
  return (
    <View style={styles.addressCardContainer}>
      <View style={styles.infoUserWrapper}>
        <MyText title={nameUser} variant="h1" style={styles.nameUserText} />
        <MyText title={numberPhone} variant="h3" color={Color.NEUTRAL_02} style={{fontSize: 12}} />
        <MyText numberOfLines={2} color={Color.NEUTRAL_02} title={address} variant="h3" style={{fontSize: 12, textAlign: "justify"}} />
      </View>
      <View style={styles.iconAddressWrapper}> 
      <Pressable  style={({ pressed }) => [
          {
            backgroundColor: pressed
              ? Color.WHITE_ACTIVE
              : Color.WHITE
          },
        ]}>
        <Ionicons name="ios-close" size={35} color={Color.PRIMARY_YELLOW_COLOR} />
      </Pressable>
      <Octicons name="location" size={35} color={Color.PRIMARY_YELLOW_COLOR} />
      </View>
    </View>
  )
}

export default AddressCard