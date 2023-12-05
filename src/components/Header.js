// Header.js
import React, { useState, useRef } from 'react';
import {
    View,
    Text,
    Image,
    TextInput,
    StyleSheet,
    Platform,
    Animated,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

const Header = ({ scrollY }) => {
    const imageURL =
        'https://i.scdn.co/image/ab6761610000e5ebef34f4cfef524a703ccad877';
        
    const headerContainerHeight = scrollY.interpolate({
        inputRange: [0, 100],
        outputRange: [80, 0],
        extrapolate: 'clamp',
    });

    const searchHeight = scrollY.interpolate({
        inputRange: [0, 50],
        outputRange: [40, 35],
        extrapolate: 'clamp',
    });

    const avatarSize = scrollY.interpolate({
        inputRange: [0, 50],
        outputRange: [50, 40],
        extrapolate: 'extend',
    });

    return (
        <View style={styles.headerContainer}>
            <Animated.View style={[styles.header, { height: headerContainerHeight }]}>
                <Animated.Image
                    source={{ uri: imageURL }}
                    style={[
                        styles.userImage,
                        { width: avatarSize, height: avatarSize, opacity: avatarSize },
                    ]}
                />
                <View style={styles.userInfo}>
                    <Text style={styles.greetingText}>Xin Chào, Huy! 👋</Text>
                    <Text style={styles.welcomeText}>Rất vui được gặp lại bạn!</Text>
                </View>
            </Animated.View>
            <Animated.View style={[styles.searchContainer, { height: searchHeight }]}>
                <Icon name="search" size={20} color="#888" style={styles.searchIcon} />
                <TextInput
                    style={styles.searchInput}
                    placeholder="Tìm kiếm dịch vụ, sản phẩm,..."
                    placeholderTextColor="#888"
                />
            </Animated.View>
        </View>
    );
};

const styles = StyleSheet.create({
    headerContainer: {
        paddingTop: Platform.OS === 'android' ? 10 : 0,
        backgroundColor: '#90cbc0',
        paddingVertical: 30,
        paddingHorizontal: 20,
        borderBottomLeftRadius: 16,
        borderBottomRightRadius: 16,
    },
    header: {
        flexDirection: 'row',
        alignSelf: 'flex-start',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 30,
    },
    userInfo: {
        flexDirection: 'column',
    },
    userImage: {
        width: 50,
        height: 50,
        borderRadius: 16,
        marginRight: 12,
    },
    greetingText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#fff',
    },
    welcomeText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#dffbf7',
    },
    searchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 20,
        backgroundColor: '#FFF',
        borderRadius: 50,
        paddingHorizontal: 16,
    },
    searchIcon: {
        marginRight: 8,
    },
    searchInput: {
        flex: 1,
        padding: 8,
    },
});

export default Header;
