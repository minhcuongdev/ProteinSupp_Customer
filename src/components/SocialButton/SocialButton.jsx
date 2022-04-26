import { View, Text, TouchableHighlight } from 'react-native'
import React from 'react'
import styles from './SocialButtonStyles'

import Color from 'src/constants/Color';

const SocialButton = ({ Icon, title, iconName, handleOnPress }) => {
  return (
    <TouchableHighlight
      onPress={() => handleOnPress()}
      activeOpacity={0.6}
      underlayColor={Color.OVERPLAY_COLOR} style={{borderRadius: 100}}>
      <View style={styles.container}>
        <Icon name={iconName} size={24} color={Color.PRIMARY_RED_COLOR} />
        <Text style={styles.text}>{title}</Text>
      </View>
    </TouchableHighlight>
  )
}

export default SocialButton