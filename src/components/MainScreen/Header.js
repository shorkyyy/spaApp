import React, { useMemo } from 'react';
import { View, Text, Image, TextInput, StyleSheet, Platform, Animated, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

const Header = ({ scrollY }) => {
    const imageURL = 'https://i.scdn.co/image/ab6761610000e5ebef34f4cfef524a703ccad877';

    const interpolateScroll = (scrollY, inputRange, outputRange, extrapolate) => {
        return scrollY.interpolate({
            inputRange,
            outputRange,
            extrapolate,
        });
    };

    // Memoize animated values to prevent unnecessary re-renders
    const animatedValues = useMemo(() => {
        return {
            headerContainerHeight: interpolateScroll(scrollY, [0, 200], [85, 65], 'clamp'),
            searchExpanded: interpolateScroll(scrollY, [0, 200], [0, 35], 'clamp'),
            searchCollapsed: interpolateScroll(scrollY, [0, 200], [40, 0], 'clamp'),
            marginBot: interpolateScroll(scrollY, [0, 200], [20, 0], 'clamp'),
            textWidth: interpolateScroll(scrollY, [0, 200], [200, 0], 'clamp'),
            avatarSize: interpolateScroll(scrollY, [0, 200], [50, 40], 'clamp'),
            opacityMax: interpolateScroll(scrollY, [0, 50], [1, 0], 'clamp'),
            opacityMin: interpolateScroll(scrollY, [0, 200], [0, 1], 'clamp'),
        };
    }, [scrollY]);

    return (
        <View style={styles.headerContainer}>
            <Animated.View style={[styles.header, { height: animatedValues.headerContainerHeight }]}>
                <Animated.Image
                    source={{ uri: imageURL }}
                    style={[
                        styles.userImage,
                        { width: animatedValues.avatarSize, height: animatedValues.avatarSize },
                    ]}
                />
                <Animated.View
                    style={[
                        styles.userInfo,
                        { height: animatedValues.searchCollapsed, width: animatedValues.textWidth, opacity: animatedValues.opacityMax },
                    ]}
                >
                    <Text style={styles.greetingText}>Xin Chào, Huy! 👋</Text>
                    <Text style={styles.welcomeText}>Rất vui được gặp lại bạn!</Text>
                </Animated.View>
                <Animated.View
                    style={[styles.searchExpanded, { height: animatedValues.searchExpanded, opacity: animatedValues.opacityMin}]}
                >
                    <Icon name="search" size={16} color="#888" style={styles.searchIcon} />
                    <TextInput
                        style={styles.searchInput}
                        placeholder="Tìm kiếm dịch vụ, sản phẩm,..."
                        placeholderTextColor="#888"
                    />
                </Animated.View>
                <TouchableOpacity
                    style={styles.settingButton}
                    onPress={() => console.log('Setting')}
                >
                    <Icon name="cog" size={20} color="#FFF" />
                </TouchableOpacity>
            </Animated.View>
            <Animated.View
                style={[
                    styles.searchContainer,
                    { height: animatedValues.searchCollapsed, marginBottom: animatedValues.marginBot, opacity: animatedValues.opacityMax },
                ]}
            >
                <Icon name="search" size={16} color="#888" style={styles.searchIcon} />
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
        // paddingVertical: 20,
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
        justifyContent: 'center'
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
    searchExpanded: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderRadius: 50,
        paddingHorizontal: 8,
        flex: 1,
    },
    settingButton: {
        padding: 8,
        width: 40,
        height: 40,
        right: 0,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 16,
        backgroundColor: 'rgba(255, 255, 255, 0.5)',
        marginLeft: 12
    },
    searchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10,
        backgroundColor: '#FFF',
        borderRadius: 50,
        paddingHorizontal: 16,
        marginBottom: 20
    },
    searchIcon: {
        marginHorizontal: 5
    },
    searchInput: {
        flex: 1,
        padding: 10,
    },
});

export default Header;
