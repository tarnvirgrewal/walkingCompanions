import React from 'react';
import { Text, View, Image, StyleSheet, Button } from 'react-native';
import MapView, { Marker, Polyline } from 'react-native-maps';

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  profile: {
    width: 150,
    height: 150,
    backgroundColor: 'grey'
  },
  containerProfile: {
    backgroundColor: 'grey',
    alignSelf: 'stretch',
    alignItems: 'center',
    height: 200
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
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
  topRectangle: {
    width: 500,
    height: 250,
    backgroundColor: 'grey'
  },
  buttonPosition: {
      position: 'absolute',
      paddingTop: 10
  }
});

class Route extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            markers: [ {
                coordinate: {
                    latitude: -37.796265,
                    longitude: 144.960954,
                },
            },],
            region: {
                latitude: -37.800365,
                longitude: 144.965954,
                latitudeDelta: 0.025,
                longitudeDelta: 0.0221,
            },
          };
    }

    handleOnPress= (component) => {
        const { navigate } = this.props.navigation;
        navigate(component);
      }

    static navigationOptions = {
        title: 'Route to Destination',
     };
    render() {
        return (
            <View style={styles.container}>
                <MapView
                    region={this.state.region}
                    zoomEnabled={false}
                    style={styles.container}
                    annotations={this.state.markers[0]}
                > 
                <Marker
                    coordinate={ {latitude: -37.796265,longitude: 144.960954 }}
                    pinColor = '#ace0f9'
                />
                <Marker
                    coordinate={ {latitude: -37.809944, longitude: 144.969788 }}
                    pinColor = '#fff1eb'
                />
                <Polyline
                    coordinates={[
                        { latitude: -37.796265,longitude: 144.960954 },
                        { latitude: -37.796566, longitude: 144.963322 },
                        { latitude: -37.797786, longitude: 144.963236 },
                        { latitude: -37.797888, longitude: 144.964331 },

                        { latitude: -37.800363, longitude: 144.963923 },
                        { latitude: -37.801109, longitude: 144.969996 },
                        { latitude: -37.808117, longitude: 144.968779 },
                        { latitude: -37.809944, longitude: 144.969788 },
                    ]}
                    strokeColor="#000" // fallback for when `strokeColors` is not supported by the map-provider
                    strokeColors={[
                        '#7F0000',
                        '#B24112',
                        '#7F0000',
                        '#7F0000',

                        '#7F0000',
                        '#7F0000',
                        '#7F0000',
                        '#7F0000',
                    ]}
                    strokeWidth={6}
                />
            </MapView>
                <View style={{position: 'absolute', margin: 15, padding: 4, bottom: 50}}>
                    <Button
                        onPress={() => this.handleOnPress('Review')}
                        title=" Finish "
                    />
                </View>
            </View>

    );
  }
}

export default Route;
