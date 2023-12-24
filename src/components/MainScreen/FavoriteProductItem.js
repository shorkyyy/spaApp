import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { useNavigation } from '@react-navigation/native';
import Icon2 from 'react-native-vector-icons/FontAwesome'; // Import the second icon component

const FavoriteProductItem = ({ item, onPressBuyNow }) => {
  const navigation = useNavigation();
  const [isFavorite, setIsFavorite] = useState(false); // State to track the favorite status

  const price = parseFloat(item.price);

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
  };
  const formatCurrency = (value) => {
    return value.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' });
  };

  return (
    <View style={styles.favoriteProductItem}>
      <Image source={{ uri: item.image }} style={styles.favoriteProductImage} />
      <Text style={styles.favoriteProductName} numberOfLines={2}>
        {item.name}
      </Text>
      <View style={styles.favoriteProductInfo}>
        <Text style={styles.favoriteProductPrice}>{formatCurrency(price)}</Text>
      </View>
      <TouchableOpacity
        style={styles.favoriteProductFavoriteButton}
        onPress={toggleFavorite}
      >
        {isFavorite ? (
          <Icon2 name="heart" size={16} color="#FF6B6B" /> // Use Icon2 when isFavorite is true
        ) : (
          <Icon name="heart" size={16} color="#FF6B6B" /> // Use Icon when isFavorite is false
        )}
      </TouchableOpacity>
      <TouchableOpacity style={styles.buyNowButton} onPress={() => navigation.navigate('ProductDetail', { item })}>
        <Text style={styles.buyNowButtonText}>Mua ngay</Text>
      </TouchableOpacity>
    </View>
  );
};



const styles = StyleSheet.create({
  favoriteProductItem: {
    marginBottom: 3,
    marginRight: 16,
    width: 150,
    height: 231,
    borderRadius: 16,
    backgroundColor: '#fff',
    padding: 0,
    borderColor: '#ddd',
    borderWidth: 1,
    alignItems: 'center',
    position: 'relative',
  },
  
  favoriteProductImage: {
    width: '100%',
    height: 100,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    resizeMode: 'cover',
  },
  
  favoriteProductName: {
    marginTop: 16,
    fontSize: 16,
    textAlign: 'center',
    color: '#333',
    fontWeight: 'bold',
    paddingHorizontal: 20,
  },
  
  favoriteProductInfo: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 8,
  },
  
  favoriteProductPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#999',
    marginBottom: 8,
  },
  
  favoriteProductFavoriteButton: {
    position: 'absolute',
    top: 5,
    right: 5,
    padding: 8,
    backgroundColor: '#FFEBEB',
    borderRadius: 50,
  },

  buyNowButton: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#90cbc0',
    paddingVertical: 5,
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16,
    alignItems: 'center',
  },

  buyNowButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default FavoriteProductItem;
