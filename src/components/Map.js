import React from 'react';
import { Text, View, StyleSheet, Dimensions } from 'react-native';
import MapView from 'react-native-maps';
import Potential from './Potential';

let ScreenHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    height: ScreenHeight,
    alignSelf: 'stretch',
    // justifyContent: 'flex-end',
    alignItems: 'center',
},
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});

class Profile extends React.Component {
  static navigationOptions = {
    title: 'Map',
  };
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
        <Potential navigation={this.props.navigation}/>
      </View>
    );
  }
}
export default Profile;
