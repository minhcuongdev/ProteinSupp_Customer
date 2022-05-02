import { View, Pressable } from 'react-native'
import React from 'react'

import styles from './DiscountButtonStyles'
import { Fontisto } from '@expo/vector-icons';
import MyText from '../MyText/MyText';
import Color from 'src/constants/Color';

const DiscountButton = ({title, onPressButton}) => {
  return (
    <Pressable onPress={() => onPressButton()} style={({ pressed }) => [
      {
        backgroundColor: pressed
          ? "rgba(226, 193, 141, 0.3)"
          : Color.PRIMARY_YELLOW_COLOR_5,
        borderRadius: 15,
      },
    ]}>
      <View style={styles.container}>
        <Fontisto name="shopping-sale" size={30} color={Color.PRIMARY_YELLOW_COLOR} />
        <MyText variant='h1' title={title} color={Color.PRIMARY_YELLOW_COLOR} style={styles.text} />
      </View>
    </Pressable>
  )
}

export default DiscountButton