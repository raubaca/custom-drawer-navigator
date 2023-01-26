import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';

const DrawerToggle = ({ onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Image source={require('../assets/menu.png')} style={styles.image} />
    </TouchableOpacity>
  );
};

export default DrawerToggle;

const styles = StyleSheet.create({
  image: {
    width: 24,
    height: 24,
    marginRight: 8,
  },
});
