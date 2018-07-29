import React, {Component} from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import {
  createStackNavigator,
} from 'react-navigation';
import Home from './src/components/Home';
import Map from './src/components/Map';
import MatchProfile from "./src/components/MatchProfile";
import Candidate from "./src/components/Candidates";
import RouteDecision from "./src/components/RouteDecision";

import MeetUp from "./src/components/MeetUp";
import RouteNavi from "./src/components/RouteNavi";


import ConfirmationPage from "./src/components/ConfirmationPage";
import RequestDenied from "./src/components/RequestDenied";
import UserMessages from "./src/components/UserMessages";

import Review from "./src/components/Review";
import Thankyou from "./src/components/Thankyou";


const App = createStackNavigator({
    Home: { screen: Home },
    Map: { screen: Map },
    MatchProfile:{ screen: MatchProfile },
    Candidate: { screen: Candidate },
    RouteDecision: { screen: RouteDecision },
    MeetUp: { screen: MeetUp },
    ConfirmationPage:{screen:ConfirmationPage},
    RequestDenied:{screen:RequestDenied},
    RouteNavi: { screen:RouteNavi },
    UserMessages:{screen:UserMessages},
    Review: { screen: Review },
    Thankyou: { screen: Thankyou },
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
