import { View, Pressable } from 'react-native'
import React from 'react'

import styles from './SettingStyles'
import MyText from 'src/components/MyText/MyText'
import Color from 'src/constants/Color'
import { FontAwesome5, Fontisto, FontAwesome, AntDesign } from '@expo/vector-icons';

import { useDispatch } from 'react-redux'
import { logout } from 'src/redux/slices/authSlice'

const ItemSettingButton = ({ Icon, nameIcon, colorIcon, sizeIcon, title, colorTitle, onPressButton }) => {
  return (
    <Pressable onPress={() => onPressButton()} style={({ pressed }) => [{
      backgroundColor: pressed
        ? Color.WHITE_ACTIVE
        : Color.WHITE
    },
    styles.itemButtonContainer
    ]}>
      <Icon name={nameIcon} size={sizeIcon} color={colorIcon} style={styles.icon} />
      <MyText title={title} variant="h4" color={colorTitle} style={styles.text} />
    </Pressable>
  )
}

const Setting = () => {
  const dispatch = useDispatch();

  return (
    <View style={styles.container}>
      <ItemSettingButton
        title={"Change Password"}
        Icon={FontAwesome5}
        nameIcon={"user-lock"}
        colorIcon={Color.PRIMARY_YELLOW_COLOR}
        sizeIcon={24}
        colorTitle={Color.NEUTRAL_01}
        onPressButton={() => console.log("Change Password")}
      />
      <ItemSettingButton
        title={"Payment Methods"}
        Icon={Fontisto}
        nameIcon={"visa"}
        colorIcon={Color.PRIMARY_YELLOW_COLOR}
        sizeIcon={24}
        colorTitle={Color.NEUTRAL_01}
        onPressButton={() => console.log("Payment Methods")}
      />
      <ItemSettingButton
        title={"Help"}
        Icon={FontAwesome}
        nameIcon={"question-circle"}
        colorIcon={Color.PRIMARY_YELLOW_COLOR}
        sizeIcon={32}
        colorTitle={Color.NEUTRAL_01}
        onPressButton={() => console.log("Help")}
      />
      <ItemSettingButton
        title={"Log Out"}
        Icon={AntDesign}
        nameIcon={"logout"}
        colorIcon={Color.PRIMARY_YELLOW_COLOR}
        sizeIcon={24}
        colorTitle={Color.NEUTRAL_01}
        onPressButton={() => dispatch(logout())}
      />
    </View>
  )
}

export default Setting