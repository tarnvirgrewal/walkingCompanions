import React from 'react';
import { Text, View, Button, TextInput, Dimensions, StyleSheet } from 'react-native';
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
    this.state = { findBtnPressed: false };
  }

  static navigationOptions = {
    title: 'Map',
  };

  showNearby = () => { 
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
            latitude: -37.796265,
            longitude: 144.960954,
            latitudeDelta: 0.015,
            longitudeDelta: 0.0121, 
          }}
        />
        {!this.state.findBtnPressed && <SearchMap pressedBtn={this.showNearby}/>}
        {this.state.findBtnPressed && <Potential navigation={this.props.navigation}/>}
      </View>  
    );
  }
}
export default Map;
