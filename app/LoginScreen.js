import { StyleSheet, Text, View } from "react-native";


import { ScrollView, ImageBackground } from 'react-native'
import { KeyboardAvoidingView } from 'react-native'
import { TextInput, TouchableOpacity, } from 'react-native'
import React, { useEffect, useState } from 'react'
import { auth } from '../app/firebase'
import { useRouter, Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { COLORS, icons, images, SIZES } from "../constants";
const LoginScreen = () => {
    const backimg = require('../assets/images/backgd.jpg')
    const router = useRouter();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    useEffect(() => {
        const unsubcribe = auth.onAuthStateChanged(user => {
            if (user) {
                router.push('/modal')
            }
        })
        return unsubcribe //when leave the screen it will unsubcribe the user
    }, [])        //add a listenner to see if the user is logged in


    const handleSignUp = () => {
        auth.createUserWithEmailAndPassword(email.trim(), password)
            .then(userCredentials => {
                const user = userCredentials.user;
                console.log('Registered with:', user.email)
            }).then(() => {
                router.push('/signout')
            }).
            catch(error => alert(error.message))
    }

    const handleLogin = () => {
        auth.signInWithEmailAndPassword(email.trim(), password)
            .then(userCredentials => {
                const user = userCredentials.user;
                console.log("LoggedIn with:", user.email)
            }).catch(error => alert(error.message))
    }
    return (

        <ImageBackground source={backimg} style={{ flex: 1, justifyContent: 'center', }}>
            <StatusBar hidden={false} barStyle="light-content" />
            <Stack.Screen options={{

                headerShadowVisible: false,
                headerTitle: "",
            }} />
            <ScrollView style={styles.scrollcontainer}>


                <KeyboardAvoidingView style={styles.container}
                    behavior="padding">
                    <View style={styles.inputContainer}>
                        <TextInput
                            style={styles.input}
                            placeholder='Email'
                            value={email}
                            onChangeText={text => setEmail(text)}
                        />

                        <TextInput style={styles.input}
                            placeholder='Password'
                            value={password}
                            onChangeText={text => setPassword(text)}
                            secureTextEntry
                        />
                    </View>
                    <View style={styles.buttonContainer}>
                        <TouchableOpacity onPress={handleLogin} style={styles.button}>

                            <Text style={styles.buttonText}>
                                Login
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={handleSignUp} style={[styles.button, styles.buttonOutline]}>

                            <Text style={styles.buttonOutlineText}>
                                Register
                            </Text>
                        </TouchableOpacity>
                    </View>
                </KeyboardAvoidingView>
            </ScrollView></ImageBackground>
    )
}

export default LoginScreen
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    inputContainer: {
        width: '80%'
    },
    input: {
        backgroundColor: 'white',
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius: 10,
        marginTop: 5,

    },
    buttonContainer: {
        width: '60%',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 40

    },
    button: {
        backgroundColor: '#0782F9',
        width: '100%',
        padding: 15,
        borderRadius: 10,
        alignItems: 'center'
    },
    buttonText: {
        color: 'white',
        fontWeight: '700',
        fontSize: 16
    },
    buttonOutline: {
        backgroundColor: 'white',
        marginTop: 5,
        borderColor: '#0782F9',
        borderWidth: 1
    },
    buttonOutlineText: {
        color: '#0782F9',
        fontWeight: '700',
        fontSize: 16
    },
    scrollcontainer: {
        flex: 1,
        marginTop: 200
    }

})
