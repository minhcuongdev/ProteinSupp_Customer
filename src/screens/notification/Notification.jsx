import { View, Pressable } from 'react-native'
import React from 'react'

import styles from './NotificationStyles'
import { Fontisto, FontAwesome5, Ionicons,  MaterialIcons  } from '@expo/vector-icons';
import MyText from 'src/components/MyText/MyText';
import Color from 'src/constants/Color';
import { useNavigation } from '@react-navigation/native';

const ItemNotificationButton = ({ Icon, nameIcon, colorIcon, sizeIcon, title, description, onPressButton }) => {
  return (
    <View style={styles.itemNotificationButton}>
      <View style={styles.line} />
      <Pressable onPress={() => onPressButton()}  style={({ pressed }) => [
          {
            backgroundColor: pressed
              ? Color.WHITE_ACTIVE
              : Color.WHITE
          },
          styles.button
        ]}>
        <View style={styles.iconWrapper}>
          <Icon name={nameIcon} size={sizeIcon} color={colorIcon} />
        </View>
        <View style={styles.textWrapper}>
          <MyText title={title} variant="h1" color={Color.PRIMARY_YELLOW_COLOR} style={styles.titleText} />
          <MyText title={description} variant="h4" numberOfLines={1} color={Color.NEUTRAL_01} style={styles.descriptionText} />
        </View>
      </Pressable>
    </View>
  )
}

const Notification = () => {
  const navigation = useNavigation()

  return (
    <View style={styles.container}>
      <ItemNotificationButton  
        Icon={Fontisto}
        nameIcon={"shopping-sale"}
        sizeIcon={24}
        colorIcon = {Color.PRIMARY_RED_COLOR}
        title={"Big deal"}
        description={"One deal you must not miss in this month"}
        onPressButton={() => navigation.navigate("Big Deal")}
      />
      <ItemNotificationButton  
        Icon={FontAwesome5}
        nameIcon={"gift"}
        sizeIcon={24}
        colorIcon = {Color.PRIMARY_RED_COLOR}
        title={"Gift"}
        description={"You have received a coupon from our shope"}
        onPressButton={() => navigation.navigate("Gift")}
      />
      <ItemNotificationButton  
        Icon={Ionicons}
        nameIcon={"receipt-sharp"}
        sizeIcon={24}
        colorIcon = {Color.PRIMARY_RED_COLOR}
        title={"Order Information"}
        description={"Your order has been sent to shipper"}
        onPressButton={() => navigation.navigate("Order Information")}
      />
      <ItemNotificationButton  
        Icon={MaterialIcons}
        nameIcon={"swap-horizontal-circle"}
        sizeIcon={28}
        colorIcon = {Color.PRIMARY_RED_COLOR}
        title={"Transaction"}
        description={"Your payment process has been successful"}
        onPressButton={() => console.log("Transaction")}
      />
    </View>
  )
}

export default Notification