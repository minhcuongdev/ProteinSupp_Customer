import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Login from "src/screens/login/Login";
import Register from "src/screens/register/Register";
import ForgotPassword from "src/screens/forgotPw/ForgotPassword";
import PromotionProduct from "src/screens/PromotionProduct/PromotionProduct";
import Cart from "src/screens/cart/Cart";
import SingleProduct from "src/screens/singleProduct/SingleProduct";
import Feedback from "src/screens/feedback/Feedback";
import Payment from "src/screens/payment/Payment";
import Address from "src/screens/address/Address";
import NewAddress from "src/screens/NewAddress/NewAddress";
import Profile from "src/screens/profile/Profile";
import EditProfile from "src/screens/EditProfile/EditProfile";
import ChangePassword from "src/screens/ChangePassword/ChangePassword";
import BigDeal from "src/screens/BigDeal/BigDeal";
import Gift from "src/screens/gift/Gift";
import Order from "src/screens/order/Order";
import Chat from "src/screens/chat/Chat";
import OrderDetail from "src/screens/OrderDetail/OrderDetail";
import GiveFeedback from "src/screens/GiveFeedback/GiveFeedback";

import HeaderLeft from "src/components/HeaderStackBar/HeaderLeft";
import HeaderRight from "src/components/HeaderStackBar/HeaderRight";
import HeaderTitle from "src/components/HeaderStackBar/HeaderTitle";

import RootTab from "../TabNavigator/RootTab";

const Stack = createNativeStackNavigator();

import { useSelector } from "react-redux";


const RootStackNavigator = () => {
  const isSignIn = useSelector(state => state.account.isSignIn)
  

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
            name="SingleProduct"
            component={SingleProduct}
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
          <Stack.Screen
            name="Feedback"
            component={Feedback}
            options={{
              headerTitleAlign: "center",
              headerTitle: (props) => <HeaderTitle {...props} />,
              headerBackVisible: false,
            }}
          />
          <Stack.Screen
            name="Payment"
            component={Payment}
            options={{
              headerTitleAlign: "center",
              headerTitle: (props) => <HeaderTitle {...props} />,
              headerBackVisible: false,
            }}
          />
          <Stack.Screen
            name="Address"
            component={Address}
            options={{
              headerTitleAlign: "center",
              headerTitle: (props) => <HeaderTitle {...props} />,
              headerBackVisible: false,
            }}
          />
          <Stack.Screen
            name="New Address"
            component={NewAddress}
            options={{
              headerTitleAlign: "center",
              headerTitle: (props) => <HeaderTitle {...props} />,
              headerBackVisible: false,
            }}
          />
          <Stack.Screen
            name="Profile"
            component={Profile}
            options={{
              headerTitleAlign: "center",
              headerTitle: (props) => <HeaderTitle {...props} />,
              headerRight: (props) => <HeaderRight isEditProfile={true} {...props} />,
              headerBackVisible: false,
            }}
          />
          <Stack.Screen
            name="Edit Profile"
            component={EditProfile}
            options={{
              headerTitleAlign: "center",
              headerTitle: (props) => <HeaderTitle {...props} />,
              headerBackVisible: false,
            }}
          />
          <Stack.Screen
            name="Change Password"
            component={ChangePassword}
            options={{
              headerTitleAlign: "center",
              headerTitle: (props) => <HeaderTitle {...props} />,
              headerBackVisible: false,
            }}
          />
           <Stack.Screen
            name="Big Deal"
            component={BigDeal}
            options={{
              headerTitleAlign: "center",
              headerTitle: (props) => <HeaderTitle {...props} />,
              headerBackVisible: false,
            }}
          />
          <Stack.Screen
            name="Gift"
            component={Gift}
            options={{
              headerTitleAlign: "center",
              headerTitle: (props) => <HeaderTitle {...props} />,
              headerBackVisible: false,
            }}
          />
          <Stack.Screen
            name="Order Information"
            component={Order}
            options={{
              headerTitleAlign: "center",
              headerTitle: (props) => <HeaderTitle {...props} />,
              headerBackVisible: false,
            }}
          />
          <Stack.Screen
            name="Chat"
            component={Chat}
            options={{
              headerTitleAlign: "center",
              headerTitle: (props) => <HeaderTitle {...props} />,
              headerBackVisible: false,
            }}
          />
           <Stack.Screen
            name="Order Detail"
            component={OrderDetail}
            options={{
              headerTitleAlign: "center",
              headerTitle: (props) => <HeaderTitle {...props} />,
              headerBackVisible: false,
            }}
          />
          <Stack.Screen
            name="Give Feedback"
            component={GiveFeedback}
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
