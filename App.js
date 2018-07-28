import React, {Component} from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import {
  createStackNavigator,
} from 'react-navigation';
import Home from './src/components/Home';
import Map from './src/components/Map';
import MatchProfile from "./src/components/MatchProfile";
import Candidate from "./src/components/Candidates";

const App = createStackNavigator({
    // Home: { screen: Home },
    Map: { screen: Map },
    MatchProfile:{ screen: MatchProfile },
    Candidate: { screen: Candidate },
});

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
