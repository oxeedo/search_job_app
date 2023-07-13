import { View, Text, SafeAreaView, Button } from 'react-native'
import React from 'react'
import { StyleSheet } from "react-native";
import { TouchableOpacity } from 'react-native';
import { useRouter, Stack } from 'expo-router';


const signout = () => {
    const router = useRouter();
    return (

        <View style={styles.buttonContainer}>
            <Stack.Screen options={{ headerShadowVisible: false, headerTitle: "" }} />
            <TouchableOpacity style={styles.button} onPress={() => router.push('/LoginScreen')}>

                <Text style={styles.buttonText}>
                    click here to go login page
                </Text>
            </TouchableOpacity>
        </View>
    )
}

export default signout
const styles = StyleSheet.create({
    buttonContainer: {
        flex: 1,
        width: '80%',
        justifyContent: 'center',
        alignItems: 'center',

        marginLeft: 30


    },
    button: {
        backgroundColor: '#0782F9',

        padding: 15,
        borderRadius: 10,
        alignItems: 'center'
    },
    buttonText: {
        color: 'white',
        fontWeight: '700',
        fontSize: 16
    },

},)