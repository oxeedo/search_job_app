




// const users = [
//   {
//     username: 'Abule',
//     name: 'Amenu'
//   },
//   {
//     username: 'Okoli',
//     name: 'Ogbole'
//   },
//   {
//     username: 'Abu',
//     name: 'Gabi'
//   }
// ]

import LoginScreen from "./LoginScreen";
import { ScrollView, ImageBackground } from 'react-native'
import { Stack } from "expo-router";
import { COLORS, icons, images, SIZES } from "../constants";
import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import backgb from '../assets/images/backgd.jpg'
import { SafeAreaView } from "react-native-safe-area-context";


export default index = () => {

  return (

    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar hidden={false} barStyle="light-content" />
      <Stack.Screen options={{

        headerShadowVisible: false,
        headerTitle: "", headerStyle: { backgroundColor: COLORS.gray },
        headerShown: false
      }} />

      <ImageBackground source={backgb} style={{ flex: 1, justifyContent: 'center', }}>


        <LoginScreen />
      </ImageBackground></SafeAreaView>
  );
}


