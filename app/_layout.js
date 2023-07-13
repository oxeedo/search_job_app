
//             <Stack.Screen name="modal" options={{
//                 presentation: 'modal', headerStyle: {
//                     backgroundColor: 'white'
//                 },
//                 headerTintColor: '#1E2632'
//             }} />
//         </Stack>

//     )
// }

import { Stack, } from "expo-router";
import { useCallback } from "react";
import { useFonts } from "expo-font";
import * as SplashScreen from 'expo-splash-screen';



const Layout = () => {
    <Stack.Screen name="index" options={{ title: "home" }}>

    </Stack.Screen>
    const [fontsLoaded] = useFonts({
        DMBold: require('../assets/fonts/DMSans-Bold.ttf'),
        DMMedium: require('../assets/fonts/DMSans-Medium.ttf'),
        DMRegular: require('../assets/fonts/DMSans-Regular.ttf')
    })

    const onLayoutRootView = useCallback(async () => {
        //load font under the screen
        //A callback is a function passed as an argument to another function. Using a callback, you could call the calculator function ( myCalculator ) with a callback 
        if (fontsLoaded) {
            SplashScreen.loadAsync();
        }
    }, [fontsLoaded])
    if (!fontsLoaded) return null
    return <Stack onLayout={onLayoutRootView} >



        <Stack.Screen name="index" options={{ title: 'Home' }}></Stack.Screen>


    </Stack>;

}

export default Layout;