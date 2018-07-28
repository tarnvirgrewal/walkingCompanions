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
    startInput: {
        ...StyleSheet.absoluteFillObject,   
        height: 30,
        padding: 5,
        backgroundColor: 'white',
        borderRadius: 5,
        borderColor: 'black',
        borderWidth: 1,
        textDecorationLine: 'none'
      },
      destInput: {
        ...StyleSheet.absoluteFillObject,   
        height: 30,
        marginTop: 40,
        padding: 5,
        backgroundColor: 'white',
        borderRadius: 5,
        borderColor: 'black',
        borderWidth: 1,
        textDecorationLine: 'none'
      },
      ETAtext: {
        // ...StyleSheet.absoluteFillObject,
        backgroundColor: 'white',
        marginTop: 80,
        width: 100,
        padding: 5,
        borderRadius: 5,
        borderWidth: 1
      },
});
class Potential extends React.Component {

    constructor(props) {
        super(props);  
        this.state = { ETA: '[ ETA ]', text: '' };
    }
  
    render() {
        return(
            <View style={styles.container}>
                <Animatable.View animation="bounceInDown" style={{...StyleSheet.absoluteFillObject, position: 'absolute', margin: 15, padding: 4,}}>
                    <TextInput
                        style={styles.startInput}
                        onChangeText={(text) => this.setState({text})}
                        value={this.state.text}
                        placeholder="Starting point"
                        underlineColorAndroid="white"
                    />
                    <TextInput
                        style={styles.destInput}
                        onChangeText={(text) => this.setState({text})}
                        value={this.state.text}
                        placeholder="Destination"
                        underlineColorAndroid="white"
                    />
                    <Text style={styles.ETAtext}>
                        {this.state.ETA}
                    </Text>
                </Animatable.View> 
                <Animatable.View animation="bounceInUp" style={{position: 'absolute', margin: 15, padding: 4, bottom: 0}}>
                    <Button
                        onPress={this.props.pressedBtn}
                        title="Find a companion" 
                        color="#841584"
                        accessibilityLabel="Learn more about this purple button"
                    />
                </Animatable.View> 
            </View>
        );
    }
}

export default Potential;
