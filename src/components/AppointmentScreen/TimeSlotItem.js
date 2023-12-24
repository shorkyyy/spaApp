// TimeSlotItem.js
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const TimeSlotItem = ({ item, selectedTime, handleTimeSelected, selectedDate }) => (
  <View
    style={[
      styles.timeSlot,
      selectedTime === item.time && { backgroundColor: '#f2fbfd' },
      !selectedDate && { opacity: 0.3 },
    ]}
  >
    <TouchableOpacity onPress={() => handleTimeSelected(item.time)} disabled={!selectedDate}>
      <Text style={[styles.timeSlotText, selectedTime === item.time && { color: '#90cbc0' }]}>
        {item.time}
      </Text>
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  timeSlot: {
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 16,
    backgroundColor: '#fff',
    borderColor: '#ddd',
    borderWidth: 1,
    marginHorizontal: 5,
    marginBottom: 8,
  },
  timeSlotText: {
    fontSize: 16,
  },
});

export default TimeSlotItem;
