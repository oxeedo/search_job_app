

import { Text, } from "react-native";
import { useState } from "react";
import { SafeAreaView, ScrollView, View } from "react-native";
import { Stack, useRouter } from "expo-router";
import { COLORS, icons, images, SIZES } from "../constants";
import ScreenHeaderBtn from '../components/common/header/ScreenHeaderBtn'
import Welcome from "../components/home/welcome/Welcome"
import Popularjobs from '../components/home/popular/Popularjobs';
import Nearbyjobs from '../components/home/nearby/Nearbyjobs';
import { auth } from "./firebase";


const modal = () => {

    const router = useRouter();
    const [searchTerm, setSearchTerm] = useState("")

    const handleSignOut = () => {
        auth.signOut()
            .then(() => {
                router.push('/signout')
            }).catch(error => alert(error.message))
    }
    return (
        <>

            <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
                <Stack.Screen options={{
                    headerStyle: { backgroundColor: COLORS.gray2 },
                    headerShadowVisible: false,
                    headerLeft: () => (
                        <ScreenHeaderBtn iconUrl={icons.signout} dimension='60%' handleSignOut={handleSignOut} />
                    ),
                    headerRight: () => (
                        <ScreenHeaderBtn iconUrl={images.profile} dimension='100%' />
                    ),
                    headerTitle: ""
                }} />
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View
                        style={{
                            flex: 1,
                            padding: SIZES.medium,
                        }}
                    >
                    </View>
                    <Welcome
                        searchTerm={searchTerm}
                        setSearchTerm={setSearchTerm}
                        handleClick={() => {
                            if (searchTerm) {
                                router.push(`/search/${searchTerm}`)
                            }
                        }}
                    />

                    <Popularjobs />
                    <Nearbyjobs />
                </ScrollView>

            </SafeAreaView>
        </>
    )
}

export default modal

