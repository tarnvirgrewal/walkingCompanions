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

  constructor(props) {
    super(props);  
    this.state = { 
      findBtnPressed:false,
      region: {
        latitude: -37.796265,
        longitude: 144.960954,
        latitudeDelta: 0.025,
        longitudeDelta: 0.0221,
      }
    };
  }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        this.setState({
          region: {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
            latitudeDelta: 0.025,
            longitudeDelta: 0.0221,
          }
        });
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
          region={this.state.region}
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
