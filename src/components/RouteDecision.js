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
  marker: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "rgba(130,4,150, 0.9)",
  },
});

class Decision extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            markers: [ {
                coordinate: {
                latitude: -37.809944,
                longitude: 144.969788,
                },
                title: "Best Place",
                description: "This is the best place in Portland",
            },
            ],
            region: {
                latitude: -37.809944,
                longitude: 144.969788,
                latitudeDelta: 0.015,
                longitudeDelta: 0.0121,
            },
          };
    }
  static navigationOptions = {
    title: 'RouteDecision',
  };
  render() {
    return (
        <View style={styles.container}>
            <Text >My Profile</Text>
            <MapView
                region={this.state.region}
                zoomEnabled={false}
                style={styles.container}
            />
        </View>
    );
  }
}

export default Decision;
