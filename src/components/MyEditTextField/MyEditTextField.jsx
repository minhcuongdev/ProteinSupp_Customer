import { View, TextInput } from 'react-native'
import React from 'react'
import MyText from '../MyText/MyText'
import styles from './MyEditTextFieldStyles'
import Color from 'src/constants/Color'

const MyEditTextField = ({ title, value, setValue, multiline = false }) => {
  return (
    <View style={styles.container}>
      <MyText title={title} color={Color.NEUTRAL_02} style={styles.title} />
      <TextInput multiline={multiline} value={value} style={styles.textInput} selectionColor={Color.BLACK} onChangeText={setValue} />
    </View>
  )
}

export default MyEditTextField