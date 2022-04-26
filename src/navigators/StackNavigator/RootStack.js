import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from 'src/screens/login/Login';

const Stack = createNativeStackNavigator();

const RootStackNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen 
                name="Login" 
                component={Login}
                options={{ headerShown: false }} 
            />
        </Stack.Navigator>
    )
}

export default RootStackNavigator