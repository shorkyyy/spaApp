import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

const FavoriteProductItem = ({ item, onPressBuyNow }) => {
  // Chuyển đổi giá tiền từ chuỗi sang số
  const price = parseFloat(item.price);

  return (
    <View style={styles.favoriteProductItem}>
      <Image source={{ uri: item.image }} style={styles.favoriteProductImage} />
      <Text style={styles.favoriteProductName} numberOfLines={2}>{item.name}</Text>
      <View style={styles.favoriteProductInfo}>
        <Text style={styles.favoriteProductPrice}>{formatCurrency(price)}</Text>
      </View>
      <TouchableOpacity style={styles.favoriteProductFavoriteButton}>
        <Icon name="heart" size={20} color="#FF6B6B" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.buyNowButton} onPress={onPressBuyNow}>
        <Text style={styles.buyNowButtonText}>Mua ngay</Text>
      </TouchableOpacity>
    </View>
  );
};

const formatCurrency = (value) => {
  return value.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' });
};

const styles = StyleSheet.create({
  favoriteProductItem: {
    marginTop: 16,
    marginBottom: 16,
    marginRight: 16,
    width: 160,
    height: 243,
    borderRadius: 16,
    backgroundColor: '#fff',
    padding: 0,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
    alignItems: 'center',
    position: 'relative', // Thêm thuộc tính này để có thể định vị nút "Mua ngay"
  },
  
  favoriteProductImage: {
    width: '100%',
    height: 120,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    resizeMode: 'contain',
  },
  
  favoriteProductName: {
    marginTop: 8,
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
    top: -8,
    right: -8,
    padding: 16,
  },

  buyNowButton: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#90cbc0',
    paddingVertical: 8,
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
