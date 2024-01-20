import React from 'react';
import { View, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const MyComponent = () => {
  return (
    <View>
      <Ionicons name="ios-checkmark-circle" size={32} color="green" />
      <Text style={{ fontFamily: 'customFont', fontSize: 20 }}>Custom Font Text</Text>
    </View>
  );
};

export default MyComponent;
