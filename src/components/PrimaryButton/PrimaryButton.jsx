import { View, Text, TouchableHighlight } from 'react-native'
import React from 'react'

import Color from 'src/constants/Color'
import styles from './PrimaryButtonStyles'

const PrimaryButton = ({title,handleOnPress}) => {
  return (
    <TouchableHighlight onPress={() => handleOnPress()} activeOpacity={0.8} underlayColor={Color.OVERPLAY_COLOR} style={styles.container}>
      <View style={styles.container}>
        <Text style={styles.text}>{title}</Text>
      </View>
    </TouchableHighlight>
  )
}

export default PrimaryButton