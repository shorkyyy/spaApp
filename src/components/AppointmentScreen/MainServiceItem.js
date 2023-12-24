// MainServiceItem.js
import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet, Image } from 'react-native';

const capitalizeWords = (str) => {
  return str
    .split(' ')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(' ');
};

const MainServiceItem = ({ item, selectedMainService, handleMainServiceSelected, isDateSelected, isTimeSelected}) => (
  <TouchableOpacity
    style={[
      styles.service,
      selectedMainService === item.id && { backgroundColor: '#f2fbfd' },
      (!isDateSelected || !isTimeSelected) && { opacity: 0.3 },
    ]}
    onPress={() => handleMainServiceSelected(item.id)}
    disabled={(!isDateSelected || !isTimeSelected)}
  >
    <Image source={{ uri: item.image }} style={styles.serviceImage} />
    <View style={styles.textContainer}>
      <Text style={[styles.serviceText, selectedMainService === item.id && { color: '#90cbc0' }]} numberOfLines={1}>
        {capitalizeWords(item.name)}
      </Text>
      <Text style={[styles.desText, selectedMainService === item.id && { color: '#90cbc0' }]} numberOfLines={1}>
        {capitalizeWords(item.description)}
      </Text>
    </View>
  </TouchableOpacity>
);



const styles = StyleSheet.create({
  service: {
    backgroundColor: '#fff',
    borderRadius: 16,
    marginBottom: 3,
    marginRight: 16,
    borderColor: '#ddd',
    borderWidth: 1,
    justifyContent: 'center',
    height: 165,
    width: 230,
  },
  textContainer:{
    flex: 1,
    justifyContent: 'center',
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  serviceText: {
    fontSize: 16,
    fontWeight: 'bold'
  },
  statusIcon: {
    marginRight: 2
},
  desText: {
    fontSize: 14,
    color: '#666'
  },
  serviceImage: {
    width: '100%',
    height: '64%', 
    alignSelf: 'center',
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
},
});

export default MainServiceItem;
