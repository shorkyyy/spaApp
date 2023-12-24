import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const capitalizeFirstLetter = (str) => {
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
};

const capitalizeWords = (str) => {
  return str
    .split(' ')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(' ');
};

const PromotionItem = ({ item }) => (
  <View style={styles.promotionItem}>
    <Image source={{ uri: item.imageURL }} style={styles.promotionImage} />
    <Text style={styles.promotionTitle} numberOfLines={1}>
      {capitalizeWords(item.title)}
    </Text>
    <Text style={styles.promotionDescription} numberOfLines={1}>
      {capitalizeFirstLetter(item.description)}
    </Text>
  </View>
);

const styles = StyleSheet.create({
  promotionItem: {
    backgroundColor: '#fff',
    borderRadius: 16,
    borderColor: '#ddd',
    borderWidth: 1,
    marginBottom: 3,
  },
  promotionImage: {
    width: '100%',
    height: 150,
    borderTopRightRadius: 16,
    borderTopLeftRadius: 16,
    marginBottom: 8,
  },
  promotionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    maxWidth: 300,
    marginTop: 8,
    marginBottom: 5,
    marginHorizontal: 16,
  },
  promotionDescription: {
    fontSize: 14,
    color: '#999',
    fontWeight: 'bold',
    marginHorizontal: 16,
    marginBottom: 16,
    fontStyle: 'italic',
  },
});

export default PromotionItem;
