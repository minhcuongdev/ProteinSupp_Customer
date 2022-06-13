import { View, TextInput, Pressable } from 'react-native'
import React from 'react'

import styles from './SearchStyles'
import { Ionicons } from '@expo/vector-icons';
import Color from 'src/constants/Color';

const Search = ({value,onChange, isFilter = false, drawer }) => {
  return (
    <View style={styles.container}>
      <Ionicons name="ios-search-sharp" size={24} color={Color.GRAY_03} />
      <TextInput value={value} onChangeText={onChange}  style={styles.textInput} placeholder='Search supplements here' placeholderTextColor={Color.GRAY_03} selectionColor={Color.BLACK} />
      {
        isFilter && <Pressable onPress={() => drawer.current.openDrawer()} style={({ pressed }) => [
          {
            backgroundColor: pressed
              ? Color.WHITE_ACTIVE
              : Color.WHITE
          },
          {
            width: 30,
            height: 30,
            borderRadius: 15,
            justifyContent:"center",
            alignItems: "center"
          }
        ]}>
          <Ionicons name="filter-sharp" size={24} color={Color.NEUTRAL_02} />
        </Pressable>
      }
    </View>
  )
}

export default Search