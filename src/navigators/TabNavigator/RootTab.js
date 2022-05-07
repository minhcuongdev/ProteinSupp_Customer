import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  View,
  TouchableNativeFeedback,
} from "react-native";
import HomePage from "src/screens/homepage/HomePage";
import Cart from "src/screens/cart/Cart";
import Product from "src/screens/product/Product";
import Setting from "src/screens/setting/Setting";
import Notification from "src/screens/notification/Notification";
import {
  FontAwesome5,
  Ionicons,
  AntDesign,
  MaterialCommunityIcons,
} from "@expo/vector-icons";

import HeaderTitle from "src/components/HeaderStackBar/HeaderTitle";
import Color from "src/constants/Color";

const Tab = createBottomTabNavigator();

const CustomTabBarButton = (props) => {
  const { children, onPress } = props

  return (
  <TouchableNativeFeedback
    onPress={onPress}
    background={TouchableNativeFeedback.Ripple("#f1f1f1", true)}
  >
    <View {...props}>
      {children}
    </View>
  </TouchableNativeFeedback>
)};

const RootTab = () => (
  <Tab.Navigator
    screenOptions={{
      tabBarHideOnKeyboard: true,
      tabBarShowLabel: false,
      tabBarActiveTintColor: Color.PRIMARY_RED_COLOR,
      tabBarInactiveTintColor: Color.WHITE,
      tabBarStyle: {
        backgroundColor: Color.PRIMARY_YELLOW_COLOR,
        height: 70,
      },
      tabBarButton: props => <CustomTabBarButton {...props} />,
      headerTitle: props => <HeaderTitle {...props} />,
      headerTitleAlign: "center"
    }}
  >
    <Tab.Screen
      name="Homepage"
      component={HomePage}
      options={{
        tabBarIcon: ({ color, size }) => (
          <FontAwesome5 name="home" size={size} color={color} />
        ),
        headerShown: false
      }}
    />
    <Tab.Screen
      name="My Cart"
      component={Cart}
      options={{
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="cart" size={27} color={color} />
        ),
      }}
    />
    <Tab.Screen
      name="Product"
      component={Product}
      options={{
        tabBarIcon: ({ size }) => (
          <AntDesign 
            name="appstore1"
            size={size}
            style={{
              borderWidth: 1,
              borderColor: Color.PRIMARY_RED_COLOR,
              backgroundColor: Color.WHITE,
              borderRadius: 30,
              height: 60,
              width: 60,
              textAlign: "center",
              lineHeight: 60,
            }}
            color={Color.PRIMARY_RED_COLOR}
          />
        ),
        tabBarItemStyle: {
          top: -30,
          width: 100,
          height: 80,
          borderRadius: 50,
          backgroundColor: Color.WHITE,
        },
        headerShown: false
      }}
    />
    <Tab.Screen
      name="Notification"
      component={Notification}
      options={{
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="bell" size={size} color={color} />
        ),
      }}
    />
    <Tab.Screen
      name="Settings"
      component={Setting}
      options={{
        tabBarIcon: ({ color, size }) => (
          <Ionicons name="ios-settings-sharp" size={size} color={color} />
        ),
      }}
    />
  </Tab.Navigator>
);

export default RootTab;
