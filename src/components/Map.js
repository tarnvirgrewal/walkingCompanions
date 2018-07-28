import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import MapView from 'react-native-maps';

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    height: 1000,
    width: 400,
    justifyContent: 'flex-end',
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
        <Text >My Profile</Text>
        <MapView
          style={styles.map}
          region={{
            latitude: -37.796265,
            longitude: 144.960954,
            latitudeDelta: 0.015,
            longitudeDelta: 0.0121,
          }}
        />
      </View>
    );
  }
}
export default Profile;