import React from 'react';
import { Text, View, TextInput, Button, StyleSheet, Dimensions } from 'react-native';

import * as Animatable from 'react-native-animatable';


const styles = StyleSheet.create({
    container: {
        ...StyleSheet.absoluteFillObject,
        // height: ScreenHeight, 
        alignSelf: 'stretch',
        // justifyContent: 'flex-end',
        alignItems: 'center',
        position: 'absolute',
        top: 0,
      },
    locationInput: {
        // ...StyleSheet.absoluteFillObject,   
        height: 40,
        padding: 5,
        margin: 5,
        backgroundColor: 'white',
        borderRadius: 5,
        borderColor: '#eee',
        borderWidth: 1,
        textDecorationLine: 'none'
      },
      ETAtext: {
        // ...StyleSheet.absoluteFillObject,
        backgroundColor: 'white',
        borderColor: '#eee',
        width: 100,
        margin: 5,
        padding: 5,
        borderRadius: 5,
        borderWidth: 1
      },
});
class Potential extends React.Component {

    constructor(props) {
        super(props);  
    }
  
    render() {
        return(
            <View style={styles.container}>
                <Animatable.View animation="bounceInDown" style={{...StyleSheet.absoluteFillObject, position: 'absolute', margin: 15, padding: 4,}}>
                    <TextInput
                        style={styles.locationInput}
                        onChangeText={(text) => this.props.updateStart(text)}
                        value={this.props.start}
                        placeholder="Starting point"
                        underlineColorAndroid="white" 
                    />
                    <TextInput
                        style={styles.locationInput}
                        onChangeText={(text) => this.props.updateDestination(text)}
                        value={this.props.destination}
                        placeholder="Destination"
                        underlineColorAndroid="white"
                    />
                </Animatable.View> 
                <Animatable.View animation="bounceInUp" style={{position: 'absolute', margin: 15, padding: 4, bottom: 0}}>
                    <Button
                        onPress={this.props.pressedBtn}
                        title="Find a companion" 
                        color="#841584"
                    />
                </Animatable.View>
            </View> 
        );
    }
}

export default Potential;
