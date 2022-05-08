import { View } from 'react-native'
import React from 'react'
import MyText from '../MyText/MyText'

import styles from './CardStyles'
import Color from 'src/constants/Color'
import { Ionicons, Octicons  } from '@expo/vector-icons'; 

const AddressCard = () => {
  return (
    <View style={styles.addressCardContainer}>
      <View style={styles.infoUserWrapper}>
        <MyText title={"Quynh Ton"} variant="h1" style={styles.nameUserText} />
        <MyText title={"(+84) 905674xxx"} variant="h3" color={Color.NEUTRAL_02} style={{fontSize: 12}} />
        <MyText numberOfLines={2} color={Color.NEUTRAL_02} title={"KTX khu B, ĐHQG-HCM, khu pho 6, Linh Trung, Thu Duc, Ho Chi Minh"} variant="h3" style={{fontSize: 12, textAlign: "justify"}} />
      </View>
      <View style={styles.iconAddressWrapper}> 
      <Ionicons name="ios-close" size={35} color={Color.PRIMARY_YELLOW_COLOR} />
      <Octicons name="location" size={35} color={Color.PRIMARY_YELLOW_COLOR} />
      </View>
    </View>
  )
}

export default AddressCard