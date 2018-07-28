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
    width: 100,
    height: 100,
    backgroundColor: '#ace0f9'
  },
  containerProfile: {
    backgroundColor: '#ace0f9',
    alignSelf: 'stretch',
    alignItems: 'center',
    height: 200
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
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
  topRectangle: {
    width: 500,
    height: 250,
    backgroundColor: '#ace0f9'
  },

  buttonPosition: {
      position: 'absolute',
      paddingTop: 10
  }
});

class Meet extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            markers: [ {
                coordinate: {
                    latitude: -37.796265,
                    longitude: 144.960954,
                },
                title: "Best Place",
                description: "This is the best place in Portland",
            },
            ],
            region: {
                latitude: -37.794565,
                longitude: 144.961054,
                latitudeDelta: 0.015,
                longitudeDelta: 0.0121,
            },
          };
    }

    handleOnPress= (component) => {
        const { navigate } = this.props.navigation;
        navigate(component);
      }

    static navigationOptions = {
        title: 'RouteDecision',
     };
    render() {
        return (
            <View style={styles.container}>
                <MapView
                    region={this.state.region}
                    zoomEnabled={false}
                    style={styles.container}
                    >
                    <Marker
                        coordinate={this.state.markers[0].coordinate}
                        pinColor = '#fff1eb'
                    />
                    <Marker
                        coordinate={{ latitude: -37.792977, longitude: 144.959310 }}
                        pinColor = '#ace0f9'
                    />
                    <Polyline
                    coordinates={[
                        { latitude: -37.792977, longitude: 144.959310 },
                        { latitude: -37.793912, longitude: 144.958440 },
                        { latitude: -37.795993, longitude: 144.958195 },
                        { latitude: -37.796257, longitude: 144.960969 },
                    ]}
                    strokeColor="#000" // fallback for when `strokeColors` is not supported by the map-provider
                    strokeColors={[
                        '#7F0000',
                        '#B24112',
                        '#7F0000',
                        '#7F0000',
                    ]}
                    strokeWidth={6}
                />
                </MapView>

                <View style={styles.containerProfile}>
                    <Text style={styles.text}></Text>
                    <Text style={styles.text}></Text>
                    <Text style={styles.text}></Text>
                    <Text style={styles.text}></Text>
                    <Text style={styles.text}></Text>
                    <Text style={styles.text}></Text>
                    <Text style={styles.text}></Text>
                    <Text style={styles.text}>Match Found</Text>
                    <Text style={styles.text}></Text>
                    <Text style={styles.text}></Text>
                    <Text style={styles.text}>Meet At Tin Alley, Parkville</Text>
                    <Image 
                        style={styles.profile}
                        source={require('../../res/Picture1.png')} 
                    />
                </View>

                <View style={{position: 'absolute', margin: 15, padding: 4, bottom: 100}}>
                    <Button
                        onPress={() => this.handleOnPress('UserMessages')}
                        title=" Message Pal "
                    />
                </View>

                <View style={{position: 'absolute', margin: 15, padding: 4, bottom: 50}}>
                    <Button
                        onPress={() => this.handleOnPress('RouteNavi')}
                        title="Start Journey"
                    />
                </View>
            </View>  
    );
  }
}

export default Meet;
