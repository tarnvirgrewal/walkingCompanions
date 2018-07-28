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
                latitude: -37.799265,
                longitude: 144.963954,
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
                <Polyline
                    coordinates={[
                        { latitude: -37.809944,longitude: 144.969788 },
                        { latitude: -37.796265,longitude: 144.960954 },
                    ]}
                    strokeColor="#000" // fallback for when `strokeColors` is not supported by the map-provider
                    strokeColors={[
                        '#7F0000',
                        '#B24112',
                    ]}
                    strokeWidth={6}
                />
            </MapView>
                <View style={{position: 'absolute', margin: 15, padding: 4, bottom: 50}}>
                    <Button
                        onPress={() => this.handleOnPress('Map')}
                        title=" Finish "
                        color="#841584"
                    />
                </View>
            </View>

    );
  }
}

export default Route;
