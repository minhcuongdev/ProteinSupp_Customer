import { View, Text, TextInput } from 'react-native'
import React from 'react'

import styles from './SearchStyles'
import { Ionicons, SimpleLineIcons } from '@expo/vector-icons'; 
import Color from 'src/constants/Color';

const Search = () => {
  return (
    <View style={styles.container}>
      <Ionicons name="ios-search-sharp" size={24} color={Color.GRAY_03} />
      <TextInput style={styles.textInput} placeholder='Search supplements here' placeholderTextColor={Color.GRAY_03} selectionColor={Color.BLACK} />
      <SimpleLineIcons name="menu" size={24} color="black" />
    </View>
  )
}

export default Search