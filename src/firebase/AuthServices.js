import auth from '@react-native-firebase/auth'
import firestore from '@react-native-firebase/firestore'
import { getDeviceId } from '../utils/helper'
import { Alert } from 'react-native';

export const SignInWithEmail = async (name, email, password) => {
    // const id = await getDeviceId();
    await auth().createUserWithEmailAndPassword(email, password).then(async () => {
        await firestore().collection('users').doc(auth().currentUser.uid).set({
            name: name,
            id: auth().currentUser.uid,
        });
    }).catch(err => Alert.alert("Error", err.message))
}

export const LogOut = () => {
    auth().signOut().then(() => (
        console.log('Logged out')
    )).catch(err => console.log(err))
}

export const LogInWithEmail = (email, password) => {
    auth().signInWithEmailAndPassword(email, password).then(() => (
        console.log('Logged in')
    )).catch(err => console.log(err))
}