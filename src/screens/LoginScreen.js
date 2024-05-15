import { StyleSheet, Text, TextInput, ToastAndroid, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Colors } from '../theme/Colors'
import { LogInWithEmail } from '../firebase/AuthServices';

const LoginScreen = () => {
    const [email, setEmail] = React.useState('');
    const [pass, setPass] = React.useState('')
    const [name, setName] = React.useState('');
    return (
        <View style={styles.container} >
            <Text style={styles.text}>Login Account !</Text>
            <View style={styles.leftContainer}>
                <TextInput
                    placeholder="Enter Email..."
                    placeholderTextColor={Colors.textGrey}
                    onChangeText={value => setEmail(value)}
                    style={styles.inputStyle}
                    value={email}
                />
            </View>
            <View style={styles.leftContainer}>
                <TextInput
                    placeholder="Enter Password..."
                    placeholderTextColor={Colors.textGrey}
                    onChangeText={value => setPass(value)}
                    style={styles.inputStyle}
                    value={pass}
                />
            </View>
            <TouchableOpacity activeOpacity={0.7} style={styles.button} onPress={() => (!email ? ToastAndroid.show('Email Empty', ToastAndroid.SHORT) : !pass ? ToastAndroid.show("Password Empty", ToastAndroid.SHORT) : LogInWithEmail(email, pass))}>
                <Text style={styles.text}>Done!</Text>
            </TouchableOpacity>
        </View>
    )
}

export default LoginScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.background,
    },
    text: {
        color: Colors.white,
        fontSize: 18
    },
    leftContainer: {
        width: '85%',
        backgroundColor: Colors.primaryColor,
        borderRadius: 30,
        paddingHorizontal: 15,
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: 15
    },
    inputStyle: {
        fontSize: 17,
        color: Colors.white,
        marginLeft: 5,
        width: '90%'
    },
    button: {
        width: '70%',
        height: 50,
        backgroundColor: Colors.blue,
        borderRadius: 100,
        alignItems: "center",
        justifyContent: "center",
        marginVertical: 20
    },
})