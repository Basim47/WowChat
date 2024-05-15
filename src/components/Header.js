import { View, StyleSheet, Image, Text } from 'react-native';
import React from 'react';
import WhatsappLogo from '../assets/whatsapp-logo.png';
import { Colors } from '../theme/Colors';
import VectorIcon from '../utils/VectorIcon';
import { LogOut } from '../firebase/AuthServices';

const Header = () => {
    return (
        <View style={styles.container}>
            {/* <Image source={WhatsappLogo} style={styles.logoStyle} /> */}
            <Text style={styles.heading}>WoWChat</Text>
            <View style={styles.headerIcons}>
                {/* <VectorIcon
                    type="Feather"
                    name="camera"
                    color={Colors.secondaryColor}
                    size={22}
                />
                <VectorIcon
                    type="Ionicons"
                    name="search"
                    color={Colors.secondaryColor}
                    size={20}
                    style={styles.iconStyle}
                /> */}
                <VectorIcon
                    type="AntDesign"
                    name="logout"
                    color={Colors.white}
                    size={20}
                    onPress={() => LogOut()}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.background,
        padding: 16,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    logoStyle: {
        height: 25,
        width: 110,
    },
    headerIcons: {
        flexDirection: 'row',
    },
    iconStyle: {
        marginHorizontal: 25,
    },
    heading: {
        fontSize: 20,
        fontWeight: "bold",
        color: Colors.white,
        letterSpacing: 0.8
    }
});

export default Header;
