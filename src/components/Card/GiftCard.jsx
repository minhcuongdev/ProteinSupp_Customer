import { View, Image } from 'react-native'
import React from 'react'

import styles from './CardStyles'
import MyText from '../MyText/MyText'
import Color from 'src/constants/Color'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import bigDeal from "src/assets/images/bigDeal.jpg"

const GiftCard = ({title, desc, date, uriImage}) => {
  return (
    <View style={styles.giftCardContainer}>
      <View style={styles.giftCardImageContainer}>
        <Image source={bigDeal} style={styles.giftCardImage} />
      </View>
      <View style={styles.contentGiftCardContainer}>
        <MyText title={title} />
        <MyText numberOfLines={2} color={Color.NEUTRAL_02} title={desc} style={{fontSize: 12, textAlign: "justify"}} />
        <View style={styles.timeGiftCardContainer}>
          <MaterialCommunityIcons name="clock-time-eight-outline" size={24} color={Color.NEUTRAL_02} />
          <MyText title={date} color={Color.NEUTRAL_02} style={{marginLeft: 10, fontSize: 12, lineHeight: 18}} />
        </View>
      </View>
    </View>
  )
}

export default GiftCard