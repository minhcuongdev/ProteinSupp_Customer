import { View, Pressable } from 'react-native'
import React from 'react'

import styles from './HeaderStyles'
import Color from 'src/constants/Color'
import { Entypo, MaterialCommunityIcons } from '@expo/vector-icons';
import MyText from '../MyText/MyText';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';

const HeaderRight = (props) => {
  const navigation = useNavigation()

  const { isEditProfile } = props
  const numberProductInCart = useSelector(state => state.cart.numberProduct)
  return (
    <View style={styles.headerRight}>
      {isEditProfile ? <Pressable onPress={() => navigation.navigate("Edit Profile")} style={({ pressed }) => [
        {
          backgroundColor: pressed
            ? Color.SECONDARY_YELLOW_COLOR
            : Color.PRIMARY_YELLOW_COLOR,
          borderRadius: 23,
        },
      ]}>
        <View style={styles.icon}>
          <Entypo name="edit" size={24} color={Color.WHITE} />
        </View>
      </Pressable> : <Pressable onPress={() => navigation.navigate("My Cart")} style={({ pressed }) => [
        {
          backgroundColor: pressed
            ? Color.SECONDARY_YELLOW_COLOR
            : Color.PRIMARY_YELLOW_COLOR,
          borderRadius: 23,
        },
      ]}>
        <View style={[styles.icon, { position: "relative" }]}>
          <MaterialCommunityIcons name="cart" size={24} color={Color.WHITE} />
          {numberProductInCart > 0 &&
            <View style={styles.badge}>
              <MyText variant='h1' title={numberProductInCart > 0 ? numberProductInCart : ""} color={Color.WHITE} style={styles.textBadge} />
            </View>
          }
        </View>
      </Pressable>}
    </View>
  )
}

export default HeaderRight