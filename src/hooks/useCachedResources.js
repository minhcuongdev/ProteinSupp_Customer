import * as SplashScreen from 'expo-splash-screen'
import * as Font from 'expo-font'
import { useState, useEffect } from 'react'


const useCachedResources = () => {
    const [isLoadingComplete, setIsLoadingComplete] = useState(false)

    useEffect(() => {
        async function LoadResourcesAndDataAsync () {
            try {
                SplashScreen.preventAutoHideAsync()

                await Font.loadAsync({
                    'Montserrat-Bold': require('src/assets/fonts/Montserrat-Bold.ttf'),
                    'Poppins-Bold': require('src/assets/fonts/Poppins-Bold.ttf'),
                    'Poppins-Medium': require('src/assets/fonts/Poppins-Medium.ttf'),
                    'Poppins-Regular': require('src/assets/fonts/Poppins-Regular.ttf'),
                    'Poppins-SemiBold': require('src/assets/fonts/Poppins-SemiBold.ttf'),
                })
                
            } catch (err) {
                console.log(err)
            } finally {
                setIsLoadingComplete(true)
                SplashScreen.hideAsync()
            }
        }

        LoadResourcesAndDataAsync();

    }, []);

    return isLoadingComplete
}

export default useCachedResources