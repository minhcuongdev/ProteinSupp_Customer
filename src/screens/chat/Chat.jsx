import { View, Text, Button } from 'react-native'
import React, { useState } from 'react'
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { TextInputMask } from 'react-native-masked-text'
import Color from 'src/constants/Color';

import { MyEditTextFieldBirthday } from 'src/components/MyEditTextField/MyEditTextField';

import { FormatBirthday } from 'src/utils/Calculator';
import styles from './ChatStyles'

const Chat = () => {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [birthday, setBirthday] = useState("")

  return (
    <View style={styles.container}>
      <View style={{width: "100%"}}>
        <MyEditTextFieldBirthday title={"Birthday"} value={birthday} setValue={setBirthday} />
      </View>
    </View>
  )
}

export default Chat