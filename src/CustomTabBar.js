import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';

const CustomTabBar = ({ state, descriptors, navigation }) => {
  return (
    <View style={{ flexDirection: 'row', height: 72, backgroundColor: '#f2fbfd' }}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        return (
          <TouchableOpacity
            key={index}
            activeOpacity={0.5}
            onPress={onPress}
            style={{ flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}
          >
            <View
              style={{
                backgroundColor: isFocused ? '#e0f7fa' : 'transparent',
                padding: 8,
                paddingHorizontal: 25,
                borderRadius: 50,
                marginRight: 8,
                flexDirection: 'row',
              }}
            >
              {options.tabBarIcon({ color: isFocused ? '#90cbc0' : '#ccc', size: 24 })}
            </View>
            
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default CustomTabBar;
