import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Colors } from '../theme/Colors'
import { SignInWithEmail } from '../firebase/AuthServices'
import { useNavigation } from '@react-navigation/native'

const OnBoardScreen = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <TouchableOpacity activeOpacity={0.7} style={styles.button} onPress={() => navigation.navigate("SignUp")}>
                <Text style={styles.text}>Sign Up!</Text>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.7} style={styles.button} onPress={() => navigation.navigate("Login")}>
                <Text style={styles.text}>Login!</Text>
            </TouchableOpacity>
        </View>
    )
}

export default OnBoardScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.background,
    },
    button: {
        width: '70%',
        height: 60,
        backgroundColor: Colors.blue,
        borderRadius: 100,
        alignItems: "center",
        justifyContent: "center",
        marginVertical: 10
    },
    text: {
        color: Colors.white,
        fontSize: 18
    }
})