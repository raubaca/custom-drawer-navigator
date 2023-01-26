import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

const Title = ({ children }) => <Text style={styles.title}>{children}</Text>;

export default Title;

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
    textTransform: 'uppercase',
    letterSpacing: 2,
  },
});
