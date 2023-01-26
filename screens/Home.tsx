import { Button, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Page from '../components/Page';
import Title from '../components/Title';

const Home = ({ navigation }) => {
  return (
    <Page>
      <Title>Home</Title>
      <Text>React Native Challenge for Frontend Mobile Developer role</Text>
      <Button title="About" onPress={() => navigation.navigate('About')} />
    </Page>
  );
};

export default Home;

const styles = StyleSheet.create({});
