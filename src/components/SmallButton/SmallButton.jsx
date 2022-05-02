import { View, Text, Pressable } from 'react-native'
import React from 'react'

import styles from './SmallButtonStyles'
import MyText from '../MyText/MyText'
import Color from 'src/constants/Color'

const SmallButton = ({label, onTap}) => {
  return (
    <Pressable onPress={() => onTap()} >
      <View style={styles.container}>
        <MyText title={label} variant="h2" style={styles.text} color={Color.WHITE} />
      </View>
    </Pressable>
  )
}

export default SmallButton