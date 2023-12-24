import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Header from '../components/PurchaseScreen/Header';
import { useNavigation } from '@react-navigation/native';
import { products } from '../data/PurchaseScreen/purchaseData';

const ShoppingProductItem = ({ item }) => {
    const price = parseFloat(item.price);
    const navigation = useNavigation();

    const formatCurrency = (value) => {
        return value.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' });
    };

    return (
        <View style={styles.shoppingProductItem}>
            <TouchableOpacity  style={styles.shoppingProductItem} onPress={() => navigation.navigate('ProductDetail', { item })}>
            <Image source={{ uri: item.image }} style={styles.shoppingProductImage} />
            <TouchableOpacity style={styles.cartButton}>
                <Icon name="cart-plus" size={16} color="#90cbc0" />
            </TouchableOpacity>
            <View style={styles.shoppingProductInfo}>
                <Text style={styles.shoppingProductName} numberOfLines={1}>
                    {item.name}
                </Text>
                <Text style={styles.shoppingProductPrice}>{formatCurrency(price)}</Text>
            </View>
            </TouchableOpacity>
        </View>
    );
};

const PurchaseScreen = () => {
    const [sortedData, setSortedData] = useState([]);
    const [isSorted, setIsSorted] = useState(false);

    const sortData = () => {
        if (isSorted) {
            setSortedData(products);
            setIsSorted(false);
        } else {
            const sorted = [...products].sort((a, b) => a.price - b.price);
            setSortedData(sorted);
            setIsSorted(true);
        }
    };

    const renderItem = ({ item }) => (
        <ShoppingProductItem item={item} />
    );

    return (
        <View style={styles.container}>
            <Header />
            <View style={styles.contentContainer}>
                <FlatList
                    data={sortedData.length > 0 ? sortedData : products}
                    keyExtractor={(item) => item.id}
                    renderItem={renderItem}
                    numColumns={2}
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={{ paddingBottom: 32 }} // combine styles here
                    ListHeaderComponent={() =>
                        <View style={styles.prodTitleContainer}>
                            <Text style={styles.prodTitle}>Danh sách sản phẩm</Text>
                            <TouchableOpacity style={styles.sortButton} onPress={sortData}>
                                <Icon name="sort" size={14} color="#999" />
                                <Text style={styles.sortButtonText}>Giá</Text>
                            </TouchableOpacity>
                        </View>}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    prodTitleContainer:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 32,
        marginBottom: 16,

    },
    prodTitle: {
        fontSize: 22,
        fontWeight: 'bold',
    },
    sortButton:{
        flexDirection: 'row', 
        alignItems: 'center',
        padding: 8,
        right: -8,
    },
    sortButtonText: {
        color: '#999',
        marginLeft: 4,
        fontSize: 14,
    },
    contentContainer: {
        paddingHorizontal: 20,
        marginBottom: 48,
    },
    text: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        color: '#000',
    },
    shoppingProductItem: {
        marginBottom: 20,
        width: 175,
        height: 280,
        borderRadius: 16,
        marginRight: 15,
        backgroundColor: '#f2fbfd',
    },

    cartButton: {
        position: 'absolute',
        top: 8,
        right: 7,
        backgroundColor: '#f2fbfd',
        padding: 8,
        borderRadius: 50,
    },

    shoppingProductImage: {
        width: '100%',
        height: '73%',
        borderRadius: 16,
        resizeMode: 'contain',
    },
    shoppingProductInfo: {
        position: 'absolute',
        bottom: 0,
        flexDirection: 'column',
        width: '100%',
        marginTop: 16,
        padding: 12,
        borderRadius: 16,
    },
    shoppingProductName: {
        fontSize: 14,
        width: '100%',
        color: '#000',
        // fontWeight: 'bold',
        marginBottom: 5,
    },
    shoppingProductPrice: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#90cbc0',
    },
});

export default PurchaseScreen;
