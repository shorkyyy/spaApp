import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Share } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { useNavigation } from '@react-navigation/native';
import { ScrollView } from 'react-native-gesture-handler';
import ProductInfo from '../components/ProductDetailScreen/ProductInfo';

const ProductDetailScreen = ({route}) => {
  const { item } = route.params;
  const navigation = useNavigation();
  const formatCurrency = (value) => {
    return value.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' });
  };

  const handleShare = async () => {
    try {
      const result = await Share.share({
        message: `${item.url}`,
      });
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView style={styles.productContainer} showsVerticalScrollIndicator={false}>
      <Image source={{ uri: item.image }} style={styles.productImage} />
      <ProductInfo
        name={item.name}
        weight={item.weight}
        price={formatCurrency(item.price)}
        ingredient={item.ingredient}
        description={item.description}
        usage={item.usage}
        onPressBack={() => navigation.goBack()}
        onPressShare={handleShare}
      />
      </ScrollView>
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <Icon name="chevron-left" size={18} color="#000" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.shareButton} onPress={handleShare}>
          <Icon name="share" size={18} color="#000" />
        </TouchableOpacity>
      </View>
      <View>
        <View style={styles.footer}>
        <TouchableOpacity style={styles.cartButton}>
            <Icon name="cart-plus" size={18} color= "#90cbc0" />
            {/* <Text style={styles.cartButtonText}>Thêm vào giỏ hàng</Text> */}
          </TouchableOpacity>
          <TouchableOpacity style={styles.buyButton}>
            <Text style={styles.buyButtonText}>Mua ngay</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  productImage: {
    width: '100%',
    height: 280,
    resizeMode: 'cover',
    // borderBottomLeftRadius: 16,
    // borderBottomRightRadius: 16,
    borderRadius: 16,
    marginTop: 40,
  },
  header: {
    position: 'absolute',
    top: 45,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 20,
  },
  backButton: {
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    width: 40,
    height: 40,
    padding: 8,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 16,
  },
  shareButton: {
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    width: 40,
    height: 40,
    padding: 8,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 16,
    marginLeft: 8,
  },
  productContainer: {
    backgroundColor: '#fff',
    flex: 1,
    paddingHorizontal: 20,
  },
  productDetails: {

    marginBottom: 16,
    marginTop: 32,
  },
  productName: {
    fontSize: 20,
    fontWeight: 'bold',
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
  footer: {
    flexDirection: 'row',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'space-between',
    bottom: 0,
    paddingHorizontal: 30,
    paddingVertical: 12,
    backgroundColor: '#f2fbfd',
    width: '100%'
  },
  cartButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#90cbc0',
    height: 45,
  },
  cartButtonText: {
    color: '#90cbc0',
    fontSize: 18,
    fontWeight: 'bold',
  },
  buyButton: {
    backgroundColor: '#90cbc0',
    paddingVertical: 10,
    paddingHorizontal: 98,
    borderRadius: 8,
  },
  buyButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default ProductDetailScreen;
