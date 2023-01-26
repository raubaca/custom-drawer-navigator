import { Button, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Page from '../components/Page';
import Title from '../components/Title';

const About = ({ navigation }) => {
  return (
    <Page>
      <Title>About</Title>
      <Text>Developed width React Native using Expo</Text>
      <Button title="Go back to Home" onPress={() => navigation.goBack()} />
    </Page>
  );
};

export default About;

const styles = StyleSheet.create({});
