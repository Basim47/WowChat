import { View, Text, StyleSheet, ScrollView } from 'react-native';
import React, { useRef, useEffect, useState } from 'react';
import { Colors } from '../theme/Colors';
import VectorIcon from '../utils/VectorIcon';
import firestore from '@react-native-firebase/firestore';

const ChatBody = ({ chatId, userId }) => {
    const scrollViewRef = useRef();

    const [messages, setMessages] = useState([]);

    useEffect(() => {
        firestore()
            .collection('chats')
            .doc(chatId)
            .collection('messages')
            .orderBy('timestamp')
            .onSnapshot(snapShot => {
                const allMessages = snapShot.docs.map(snap => {
                    return snap.data();
                });
                setMessages(allMessages);
            });
    }, []);

    const UserMessageView = ({ message, time }) => {
        return (
            <View style={styles.userContainer}>
                <View style={styles.userInnerContainer}>
                    <Text style={styles.message}>{message}</Text>
                    <Text style={styles.time}>{time}</Text>
                    {/* <VectorIcon
                        name="check-double"
                        type="FontAwesome5"
                        color={Colors.blue}
                        size={12}
                        style={styles.doubleCheck}
                    /> */}
                </View>
            </View>
        );
    };

    const OtherUserMessageView = ({ message, time }) => {
        return (
            <View style={styles.otherUserContainer}>
                <View style={styles.otherUserInnerContainer}>
                    <Text style={styles.Othersmessage}>{message}</Text>
                    <Text style={styles.Othertime}>{time}</Text>
                </View>
            </View>
        );
    };

    const scrollToBottom = () => {
        scrollViewRef.current.scrollToEnd({ animated: true });
    };

    return (
        <>
            <ScrollView
                ref={scrollViewRef}
                onContentSizeChange={scrollToBottom}
                showsVerticalScrollIndicator={false}>
                {messages.map(item => (
                    <>
                        {item.sender === userId ? (
                            <UserMessageView
                                message={item.body}
                                time={item.timestamp?.toDate().toDateString()}
                            />
                        ) : (
                            <OtherUserMessageView
                                message={item.body}
                                time={item.timestamp?.toDate().toDateString()}
                            />
                        )}
                    </>
                ))}
            </ScrollView>
            {/* <View style={styles.scrollIcon}> */}
            <View style={styles.scrollDownArrow}>
                <VectorIcon
                    name="angle-dobule-down"
                    type="Fontisto"
                    size={12}
                    color={Colors.white}
                    onPress={scrollToBottom}
                />
            </View>
            {/* </View> */}
        </>
    );
};

const styles = StyleSheet.create({
    userContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        marginVertical: 5,
    },
    otherUserContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 5,
    },
    userInnerContainer: {
        backgroundColor: Colors.blue,
        paddingVertical: 8,
        paddingHorizontal: 15,
        borderTopLeftRadius: 30,
        borderBottomRightRadius: 30,
        borderBottomLeftRadius: 30,
        // width: '50%',
        // flexDirection: 'row',
        // alignItems: 'flex-end',
    },
    Othersmessage: {
        fontSize: 14,
        color: Colors.white,
        alignSelf: 'flex-start',
        flexWrap: 'wrap',
        paddingBottom: 3,
        paddingHorizontal: 10
    },
    message: {
        fontSize: 14,
        color: Colors.white,
        flexWrap: 'wrap',
        alignSelf: 'flex-end',
        paddingBottom: 3,
        paddingHorizontal: 10
    },
    time: {
        fontSize: 8,
        color: Colors.white,
        marginLeft: 3,
        paddingHorizontal: 10,
        alignSelf: 'flex-end'
    },
    Othertime: {
        fontSize: 8,
        color: Colors.white,
        marginLeft: 3,
        paddingHorizontal: 8
    },
    doubleCheck: {
        marginLeft: 5,
    },
    otherUserInnerContainer: {
        backgroundColor: Colors.darkBlue,
        paddingVertical: 8,
        paddingHorizontal: 15,
        borderTopRightRadius: 30,
        borderBottomRightRadius: 30,
        borderBottomLeftRadius: 30,
        // flexDirection: 'row',
        // alignItems: 'flex-end',
    },
    scrollDownArrow: {
        backgroundColor: Colors.primaryColor,
        borderRadius: 50,
        height: 30,
        width: 30,
        position: "absolute",
        bottom: 10,
        right: 14,
        alignItems: 'center',
        justifyContent: 'center',
    },
    scrollIcon: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
    },
});

export default ChatBody;
