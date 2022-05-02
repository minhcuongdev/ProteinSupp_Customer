import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Login from "src/screens/login/Login";
import Register from "src/screens/register/Register";
import ForgotPassword from "src/screens/forgotPw/ForgotPassword";
import PromotionProduct from "src/screens/PromotionProduct/PromotionProduct";
import Cart from "src/screens/cart/Cart";

import HeaderLeft from "src/components/HeaderStackBar/HeaderLeft";
import HeaderRight from "src/components/HeaderStackBar/HeaderRight";
import HeaderTitle from "src/components/HeaderStackBar/HeaderTitle";

import RootTab from "../TabNavigator/RootTab";

const Stack = createNativeStackNavigator();

import { useSelector } from "react-redux";

const RootStackNavigator = () => {
  const isSignIn = useSelector(state => state.auth.isSignIn)

  return (
    <Stack.Navigator
      screenOptions={{
        headerLeft: (props) => <HeaderLeft {...props} />,
      }}
    >
      {isSignIn ? (
        <>
          <Stack.Screen
            name="RootTab"
            component={RootTab}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="PromotionProduct"
            component={PromotionProduct}
            options={{
              title: "",
              headerRight: (props) => <HeaderRight {...props} />,
            }}
          />
          <Stack.Screen
            name="My Cart"
            component={Cart}
            options={{
              headerTitleAlign: "center",
              headerTitle: (props) => <HeaderTitle {...props} />,
              headerBackVisible: false,
            }}
          />
        </>
      ) : (
        <>
          <Stack.Screen
            name="Login"
            component={Login}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Register"
            component={Register}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="ForgotPassword"
            component={ForgotPassword}
            options={{ headerShown: false }}
          />
        </>
      )}
    </Stack.Navigator>
  );
};

export default RootStackNavigator;
