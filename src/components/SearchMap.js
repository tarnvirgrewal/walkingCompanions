import React from 'react';
import { Text, View, TextInput, Button, StyleSheet, Dimensions, Image } from 'react-native';

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
        padding: 10,
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
      headertext: {
        fontWeight: 'bold',
        fontSize: 20,
      },
      button: {
        width: 100,
        height: 100
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
                    <Text style={styles.headertext}> Starting Point </Text>
                    <TextInput
                        style={styles.locationInput}
                        onChangeText={(text) => this.props.updateStart(text)}
                        value={this.props.start}
                        defaultValue="Ormond College"
                        underlineColorAndroid="white" 
                    />
                    {/* <Image style={styles.arrow} resizeMode='cover' source={require('../../res/down_arrow.png')} /> */}
                    <Text style={styles.headertext}> Where to? </Text>
                    <TextInput
                        style={styles.locationInput}
                        onChangeText={(text) => this.props.updateDestination(text)}
                        value={this.props.destination}
                        defaultValue="Tesltra Labs"
                        underlineColorAndroid="white"
                    />
                </Animatable.View> 
                <Animatable.View animation="bounceInUp" style={{position: 'absolute', margin: 15, padding: 4, bottom: 20}}>
                    <Button
                        style={styles.button}
                        onPress={this.props.pressedBtn}
                        title="Find a Pal" 
                    />
                </Animatable.View>
            </View> 
        );
    }
}

export default Potential;
