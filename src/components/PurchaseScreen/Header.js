import React from 'react';
import { View, Text, StyleSheet, Platform, Animated, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

const Header = () => {

    return (
        <View style={styles.headerContainer}>
            <View style={[styles.headerTitle]}>
                <TouchableOpacity style={styles.backButton} onPress={() => {/* handle back button press */ }}>
                    <Icon name="chevron-left" size={18} color="#fff" />
                </TouchableOpacity>

                <Text style={styles.headerText}>Sản phẩm</Text>
                
                <TouchableOpacity style={styles.carButton} onPress={() => {/* handle cart button press */ }}>
                <Icon name="shopping-cart" size={18} color="#fff" />
            </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    headerContainer: {
        paddingTop: Platform.OS === 'android' ? 10 : 0,
        backgroundColor: '#90cbc0',
        borderBottomLeftRadius: 16,
        borderBottomRightRadius: 16,
        width: '100%',
    },
    headerTitle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 40,
        marginBottom: 20,
        marginHorizontal: 30,
    },
    backButton:{
    },
    carButton:{
    },
    headerText: {
        fontSize: 18,
        color: '#fff',
        fontWeight: 'bold'
    },
    header: {
        flexDirection: 'row',
        alignSelf: 'flex-start',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,
    },
    userInfo: {
        flexDirection: 'column',
        justifyContent: 'center'
    },
});

export default Header;
