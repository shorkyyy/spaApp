// PromotionItem.js
import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const PromotionItem = ({ item }) => (
  <View style={styles.promotionItem}>
    <Image source={{ uri: item.imageURL }} style={styles.promotionImage} />
    <Text style={styles.promotionTitle} numberOfLines={1}>{item.title}</Text>
    <Text style={styles.promotionDescription} numberOfLines={1}>{item.description}</Text>
  </View>
);

const styles = StyleSheet.create({
  promotionItem: {
    backgroundColor: '#fff',
    borderRadius: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
    marginTop: 16,
    marginBottom: 8,
    
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
