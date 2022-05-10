import { View, Pressable } from 'react-native'
import React from 'react'

import styles from './SettingStyles'
import MyText from 'src/components/MyText/MyText'
import Color from 'src/constants/Color'
import { FontAwesome5, Fontisto, FontAwesome, AntDesign, Ionicons  } from '@expo/vector-icons';

import { useDispatch } from 'react-redux'
import { logout } from 'src/redux/slices/authSlice'
import { useNavigation } from '@react-navigation/native'

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
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <ItemSettingButton
        title={"Update Profile"}
        Icon={Ionicons}
        nameIcon={"person-circle-sharp"}
        colorIcon={Color.PRIMARY_YELLOW_COLOR}
        sizeIcon={33}
        colorTitle={Color.NEUTRAL_01}
        onPressButton={() => navigation.navigate("Profile")}
      />
      <ItemSettingButton
        title={"Change Password"}
        Icon={FontAwesome5}
        nameIcon={"user-lock"}
        colorIcon={Color.PRIMARY_YELLOW_COLOR}
        sizeIcon={24}
        colorTitle={Color.NEUTRAL_01}
        onPressButton={() => navigation.navigate("Change Password")}
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
        title={"Follow order"}
        Icon={AntDesign}
        nameIcon={"exception1"}
        colorIcon={Color.PRIMARY_YELLOW_COLOR}
        sizeIcon={30}
        colorTitle={Color.NEUTRAL_01}
        onPressButton={() => console.log("Follow order")}
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