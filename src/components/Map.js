import React from 'react';
import { Text, View, Button, TextInput, StyleSheet } from 'react-native';
import MapView from 'react-native-maps';

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    // height: 1000,
    // width: 500,
    justifyContent: 'flex-end',
    alignItems: 'center',
    position: 'absolute',
    top: 0,
  },
  map: {
    ...StyleSheet.absoluteFillObject,
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
  FindButton: {

  }
}); 

class Profile extends React.Component {

  constructor(props) {
    super(props);  
    this.state = { ETA: '[ ETA ]', text: '' };
  }
 
  static navigationOptions = {
    title: 'Map',
  };

  handleOnPress = () => { }

  render() {
    return (
      <View style={styles.container}>
        <MapView
          style={styles.map}
          region={{
            latitude: -37.796265,
            longitude: 144.960954,
            latitudeDelta: 0.015,
            longitudeDelta: 0.0121, 
          }}
        />
        <View style={{...StyleSheet.absoluteFillObject, position: 'absolute', margin: 15, padding: 4,}}>
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
        </View> 
        <View style={{position: 'absolute', margin: 15, padding: 4, bottom: 0}}>
          <Button
            onPress={this.handleOnPress}
            title="Find someone"
            color="#841584"
            accessibilityLabel="Learn more about this purple button"
          />
        </View>
      </View>  
    );
  }
}
export default Profile;