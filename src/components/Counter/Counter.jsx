import { View, Text, Pressable } from 'react-native'
import React, {useState} from 'react'

import styles from './CounterStyles'
import { AntDesign } from '@expo/vector-icons';
import Color from 'src/constants/Color';

const Counter = () => {
  const [counter, setCounter] = useState(1)

  const handleIncrementCounter = () => {
    if(counter === 99) return
    setCounter(counter + 1)
  }

  const handleDecrementCounter = () => {
    if(counter === 1) return
    setCounter(counter - 1)
  }

  return (
    <View style={styles.container}>
      <Pressable onPress={() => handleDecrementCounter()} style={({ pressed }) => [
        {
          backgroundColor: pressed
            ? Color.GRAY_03
            : Color.GRAY_01
        },
        styles.symbol
      ]}>
        <AntDesign name="minus" size={16} color="black" />
      </Pressable>
      <Text style={styles.number}>{counter}</Text>
      <Pressable onPress={() => handleIncrementCounter()} style={({ pressed }) => [
        {
          backgroundColor: pressed
            ? Color.GRAY_03
            : Color.GRAY_01
        },
        styles.symbol
      ]}>
        <AntDesign name="plus" size={16} color="black" />
      </Pressable>
    </View>
  )
}

export default Counter