import React from 'react';
import { TouchableOpacity, Text, View, StyleSheet, Image } from 'react-native';

const capitalizeFirstLetter = (str) => {
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
};

const formatCurrency = (value) => {
  return new Intl.NumberFormat('vi-VN', {
    style: 'currency',
    currency: 'VND',
    minimumFractionDigits: 0,
  }).format(value);
};

const SubServiceItem = ({ item, selectedService, handleServiceSelected }) => (
  <TouchableOpacity
    style={[
      styles.service,
      selectedService === item.subServiceId && { backgroundColor: '#f2fbfd' },
    ]}
    onPress={() => handleServiceSelected(item.subServiceId)}
  >
    <Image source={{ uri: item.image }} style={styles.serviceImage} />
    <View style={styles.serviceContent}>
      <Text style={[styles.serviceText, selectedService === item.subServiceId && { color: '#90cbc0' }]} numberOfLines={2}>
        {capitalizeFirstLetter(item.subServiceName)}
      </Text>
      <Text style={[styles.priceText, selectedService === item.subServiceId && { color: '#90cbc0' }]}>
        {formatCurrency(item.price)}</Text>
    </View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  service: {
    backgroundColor: '#fff',
    borderRadius: 16,
    marginBottom: 16,
    borderColor: '#ddd',
    borderWidth: 1,
    flexDirection: 'row',
  },
  serviceImage: {
    width: 100,
    height: 80,
    borderRadius: 16,
    alignSelf: 'center',
},
  serviceContent: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  serviceText: {
    fontSize: 16,
    fontWeight: 'bold',
    width: 140,
    lineHeight: 22
  },
  priceText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#999',
  },
});

export default SubServiceItem;
