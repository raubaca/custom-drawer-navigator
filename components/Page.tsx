import { Button, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { StatusBar } from 'expo-status-bar';

const Page = ({ children }) => {
  return (
    <View style={styles.page}>
      {children}
      <StatusBar style="auto" />
    </View>
  );
};

export default Page;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    padding: 16,
    backgroundColor: 'white',
  },
});
