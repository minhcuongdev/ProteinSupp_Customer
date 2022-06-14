import { View, Text, TouchableHighlight } from 'react-native'
import React from 'react'

import Color from 'src/constants/Color'
import styles from './PrimaryButtonStyles'
import MyText from '../MyText/MyText'

const PrimaryButton = ({title,handleOnPress,style, height = 55, disable = false}) => {
  return (
    <TouchableHighlight onPress={() => disable ? {} : handleOnPress()} disabled={disable} activeOpacity={0.8} underlayColor={Color.OVERPLAY_COLOR} style={[styles.container,style, {height: height, opacity: disable ? 0.5 : 1 }]}>
      <View style={[styles.container, {height: height}]}>
        <MyText title={title} variant="h2" color={Color.WHITE} />
      </View>
    </TouchableHighlight>
  )
}

export const PrimaryButton1 = ({title,handleOnPress,style, height = 55, disable = false}) => {
  return (
    <TouchableHighlight onPress={() => disable ? {} : handleOnPress()} disabled={disable} activeOpacity={0.8} underlayColor={Color.OVERPLAY_COLOR} style={[styles.container,style, {height: height, opacity: disable ? 0.5 : 1 }]}>
      <View style={[styles.container, {height: height}, {backgroundColor: Color.WHITE, borderColor: Color.PRIMARY_RED_COLOR, borderWidth: 1}]}>
        <MyText title={title} variant="h2" color={Color.PRIMARY_RED_COLOR} />
      </View>
    </TouchableHighlight>
  )
}

export default PrimaryButton