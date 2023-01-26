import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

import Title from '../components/Title';
import DrawerView from '../components/DrawerView';
import DrawerToggle from '../components/DrawerToggle';

const Cart = ({ navigation }) => {
  const openDrawer = () => navigation.openDrawer();

  return (
    <DrawerView style={styles.container}>
      <View style={styles.row}>
        <DrawerToggle onPress={openDrawer} />
        <Title>Your Cart</Title>
      </View>
      <Text>No items</Text>
    </DrawerView>
  );
};

export default Cart;

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  row: {
    flexDirection: 'row',
  },
});
