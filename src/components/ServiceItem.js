// ServiceItem.js
import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const ServiceItem = ({ item }) => {
  return (
    <View style={styles.serviceItem}>
      <Image source={{ uri: item.image }} style={styles.serviceImage} />
      <Text style={styles.serviceName}>{item.name}</Text>
      <Text style={styles.serviceDescription}>{item.description}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  serviceItem: {
    marginRight: 16,
  },
  serviceImage: {
    width: 120,
    height: 120,
    borderRadius: 8,
  },
  serviceName: {
    marginTop: 8,
    fontSize: 16,
    fontWeight: 'bold',
  },
  serviceDescription: {
    marginTop: 4,
    fontSize: 12,
    color: '#666',
  },
});

export default ServiceItem;
