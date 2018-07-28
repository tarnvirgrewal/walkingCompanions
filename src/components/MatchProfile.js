import React from 'react';
import {Text, View, Button,Image, StyleSheet} from 'react-native';

class MatchProfile extends React.Component {
    static navigationOptions = {
        title: 'MatchProfile',
    };

    render() {
        return (
            <View >
                <Image source={require('../../res/Picture1.png')} />
                <Text>Open up App.js to start working on your app!</Text>
                <Text>Changes you make will automatically reload.</Text>
                <Text>Shake your phone to open the developer menu.</Text>
            </View>

        );
    }
}

export default MatchProfile;