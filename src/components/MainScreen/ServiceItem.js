import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { useNavigation } from '@react-navigation/native';

const capitalizeFirstLetter = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
  };
  
  const capitalizeWords = (str) => {
    return str
      .split(' ')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(' ');
  };

const ServiceItem = ({ item }) => {
    const navigation = useNavigation();
    return (
        <View style={styles.serviceItem}>
            <Image source={{ uri: item.image }} style={styles.serviceImage} />
            <View style={{ flexDirection: 'row', alignItems: 'center', padding: 16}}>
                <View style={styles.textContainer}>
                    <Text style={styles.serviceName}>
                        {capitalizeWords(item.name)}</Text>
                    <Text style={styles.serviceDescription}>
                        {capitalizeFirstLetter(item.description)}</Text>
                    <View style={styles.buttonContainer}>
                    </View>
                </View>
                <TouchableOpacity style={styles.bookNowButton} onPress={() => navigation.navigate('Appointments')}>
                    <Icon name="chevron-right" size={16} color="#FFF" />
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    serviceItem: {
        marginRight: 16,
        marginBottom: 3,
        borderRadius: 16,
        overflow: 'hidden',
        backgroundColor: '#fff',
        borderColor: '#ddd',
        borderWidth: 1,
        width: 300, // Đặt chiều rộng của item
    },
    serviceImage: {
        width: '100%',
        height: 150, // Đặt chiều cao của hình ảnh
        borderTopLeftRadius: 16,
        borderTopRightRadius: 16,
    },
    textContainer: {
        width: 225
    },
    serviceName: {
        fontSize: 18, // Tăng kích thước của tên dịch vụ
        fontWeight: 'bold',
        marginBottom: 4,
    },
    serviceDescription: {
        fontSize: 14, // Tăng kích thước của mô tả
        color: '#666',
        marginBottom: 8,
    },
    buttonContainer: {
        flexDirection: 'row-reverse', // Đảo ngược hướng của các phần tử con
    },
    bookNowButton: {
        backgroundColor: '#90cbc0',
        paddingVertical: 16,
        paddingHorizontal: 16,
        borderRadius: 16,
    },
    bookNowButtonText: {
        color: '#fff',
        fontWeight: 'bold',
        textAlign: 'center',
    },
});

export default ServiceItem;
