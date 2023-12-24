// ProductInfo.js
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';


const capitalizeFirstLetter = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
  };

const ProductInfo = ({ name, weight, price, ingredient, description, usage }) => {
    return (
        <View>
            <View style={styles.productDetails}>
                <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 8 }}>
                    <Text style={styles.productName} numberOfLines={1}>
                    {capitalizeFirstLetter(name)}</Text>
                    <View style={styles.weightContainer}>
                        <Text style={styles.productWeight}>{weight}</Text>
                    </View>
                </View>
                <Text style={styles.productPrice}>{price}</Text>
            </View>
            <View style={styles.additionalDetails}>
                <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 8 }}>
                    <Icon name="info-circle" size={16} color="#90cbc0" />
                    <Text style={styles.detailLabel}>Thành Phần</Text>
                </View>
                <Text style={styles.detailValue}>{ingredient}</Text>
            </View>
            <View style={styles.descriptionContainer}>
                <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 8 }}>
                    <Text style={styles.descriptionLabel}>Công Dụng</Text>
                </View>
                <Text style={styles.productDescription}>{description}</Text>
                <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 8, marginTop: 24 }}>
                    <Text style={styles.descriptionLabel}>Cách sử dụng</Text>
                </View>
                <Text style={styles.productDescription}>{usage}</Text>
            </View>

        </View>
    );
};

const styles = StyleSheet.create({
    productDetails: {
        marginBottom: 16,
        marginTop: 32,
    },
    productName: {
        fontSize: 20,
        fontWeight: 'bold',
        maxWidth: 350,
    },
    weightContainer: {
        marginLeft: 8,
        paddingVertical: 4,
        paddingHorizontal: 10,
        backgroundColor: '#FF6B6B',
        borderRadius: 16,
        alignItems: 'center',
    },
    productWeight: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#FFF',
    },
    productPrice: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#90cbc0',
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
    },
    backButton: {
        backgroundColor: 'rgba(242, 251, 253, 0.5)',
        width: 40,
        height: 40,
        padding: 8,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 16,
    },
    shareButton: {
        backgroundColor: 'rgba(242, 251, 253, 0.5)',
        width: 40,
        height: 40,
        padding: 8,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 16,
        marginLeft: 8,
    },
    additionalDetails: {
        paddingVertical: 16,
        paddingHorizontal: 16,
        marginBottom: 16,
        borderRadius: 16,
        borderWidth: 1,
        backgroundColor: '#f2fbfd',
        color: '#90cbc0',
        borderColor: '#90cbc0',
    },
    detailLabel: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#90cbc0',
        marginLeft: 8,
    },
    detailValue: {
        fontSize: 16,
        lineHeight: 22,
        color: '#90cbc0',
    },
    descriptionContainer: {
        marginBottom: 16,
        borderColor: '#ddd',
        borderWidth: 1,
        borderRadius: 16,
        padding: 16,
        backgroundColor: '#fff',
    },
    descriptionLabel: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#555',
    },
    productDescription: {
        fontSize: 16,
        lineHeight: 24,
        color: '#777',
        marginLeft: 8,
    },
});

export default ProductInfo;
