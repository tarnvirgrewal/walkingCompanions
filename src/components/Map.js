import React from 'react';
import { Text, View, Button, TextInput, Dimensions, StyleSheet, Alert } from 'react-native';
import MapView from 'react-native-maps';
import SearchMap from './SearchMap';
import Potential from './Potential';

let ScreenHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    alignSelf: 'stretch',
    alignItems: 'center',
    position: 'absolute',
    top: 0,
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  }, 
}); 

class Map extends React.Component {

  state = {
    latitude: -37.796265,
    longitude: 144.960954,
  }

  constructor(props) {
    super(props);  
    this.state = { findBtnPressed: false };
  }

  componentDidMount() {
    // Alert.alert(this.state.latitude);
    navigator.geolocation.getCurrentPosition(
      (position) => {
        // Alert.alert(position.coords.latitude.toFixed(4), position.coords.longitude.toFixed(4));
        this.setState({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          error: null,
        });
        // Alert.alert(this.state.latitude.toFixed(4));
      },
      (error) => this.setState({ error: error.message }),
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 },
    );
  }

  updateStart = (start) => {
    this.setState({start});
  }

  updateDestination = (destination) => {
    this.setState({destination});
  }

  static navigationOptions = {
    title: 'Map',
  };

  showNearby = () => { 
    // This will post data to the server
    const { start, destination } = this.state;
    const url = `https://maps.googleapis.com/maps/api/directions/json?origin=${start}&destination=${destination}&key=AIzaSyAGLOsx_O9YlJSp4Iby5wsX5A82LAK0RfA`
    fetch(url)
    .then((resp) => {
      return resp.json()
    })
    .then((json) => {
      Alert.alert(url);
      console.log(json);
    })
    this.setState({
      findBtnPressed : true
    }); 
  }

  hideNearby = () => { 
    this.setState({
      findBtnPressed : false
    }); 
  }

  render() {
    return (
      <View style={styles.container}>
        <MapView
          onPress={this.hideNearby}
          style={styles.map}
          region={{
            latitude: -37.796265,//this.state.latitude,
            longitude: 144.960954, //this.state.longitude,
            latitudeDelta: 0.015,
            longitudeDelta: 0.0121, 
          }}
        />
        {!this.state.findBtnPressed && 
        <SearchMap 
          pressedBtn={this.showNearby} 
          updateDestination={this.updateDestination} 
          updateStart={this.updateStart}
          start={this.state.start}
          destination={this.state.destination}
        />}
        {this.state.findBtnPressed && <Potential navigation={this.props.navigation} />}
      </View>  
    );
  }
}
export default Map;
