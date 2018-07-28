import React from 'react';
import {Text, View, Button,Image, StyleSheet} from 'react-native';

class MatchProfile extends React.Component {
    static navigationOptions = {
        title: 'MatchProfile',
    };

    render() {
        return (
            <View style={styles.container} >
                <Image  source={require('../../res/Picture1.png')} />
                <Text style={styles.userName}>Danish</Text>
                <Text>Changes you make will automatically reload.</Text>
                <Text>Shake your phone to open the developer menu.</Text>
            </View>

        );
    }
}
const styles= StyleSheet.create({
    container:{

        alignItems: 'center',
        justifyContent: 'center'
    },
    userName:{

    }
});

export default MatchProfile;