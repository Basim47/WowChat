import { View, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import React, { useState, useEffect } from 'react';
import ChatList from '../components/ChatList';
import VectorIcon from '../utils/VectorIcon';
import { Colors } from '../theme/Colors';
import { useNavigation } from '@react-navigation/native';
import { getDeviceId } from '../utils/helper';
import auth from '@react-native-firebase/auth'


const ChatListScreen = () => {
    const navigation = useNavigation();

    const [userId, setUserId] = useState(auth().currentUser.uid);

    const onNavigate = () => {
        navigation.navigate('ContactScreen', {
            userId: userId,
        });
    };

    return (
        <View style={styles.container}>
            <ScrollView>
                <ChatList userId={userId} />
            </ScrollView>
            <TouchableOpacity style={styles.contactIcon} onPress={onNavigate}>
                <VectorIcon
                    name="message-reply-text"
                    type="MaterialCommunityIcons"
                    size={22}
                    color={Colors.white}
                />
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        position: 'relative',
        backgroundColor: Colors.darkBlue,
        flex: 1,
    },
    contactIcon: {
        backgroundColor: Colors.blue,
        height: 50,
        width: 50,
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        bottom: 20,
        right: 20,
    },
});

export default ChatListScreen;
