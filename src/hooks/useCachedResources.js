import * as SplashScreen from "expo-splash-screen";
import * as Font from "expo-font";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { login } from "src/redux/slices/accountSlice";
import { setSnackBar } from "src/redux/slices/snackBarSlice";

const useCachedResources = () => {
  const [isLoadingComplete, setIsLoadingComplete] = useState(false);
  const dispatch = useDispatch();

  const checkHasBeenLogin = async () => {
    try {
      const account = await getAccountFromDevice();
      if (account !== null) dispatch(login(account));
    } catch (error) {
      dispatch(setSnackBar({
        open: true,
        title: error.response.data
      }))
    }
  };

  const getAccountFromDevice = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem("account");

      if (jsonValue !== null) {
        return JSON.parse(jsonValue);
      } else return null;
    } catch (error) {
      dispatch(setSnackBar({
        open: true,
        title: error.response.data
      }))
    }
  };

  useEffect(() => {
    async function LoadResourcesAndDataAsync() {
      try {
        SplashScreen.preventAutoHideAsync();

        await Font.loadAsync({
          "Montserrat-Bold": require("src/assets/fonts/Montserrat-Bold.ttf"),
          "Poppins-Bold": require("src/assets/fonts/Poppins-Bold.ttf"),
          "Poppins-Medium": require("src/assets/fonts/Poppins-Medium.ttf"),
          "Poppins-Regular": require("src/assets/fonts/Poppins-Regular.ttf"),
          "Poppins-SemiBold": require("src/assets/fonts/Poppins-SemiBold.ttf"),
        });

        await checkHasBeenLogin();
      } catch (error) {
        dispatch(setSnackBar({
          open: true,
          title: error.response.data
        }))
      } finally {
        setIsLoadingComplete(true);
        SplashScreen.hideAsync();
      }
    }

    LoadResourcesAndDataAsync();
  }, []);

  return isLoadingComplete;
};

export default useCachedResources;
