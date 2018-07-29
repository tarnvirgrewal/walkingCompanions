import React from 'react';
import { Text, View, Image, StyleSheet, Button, Dimensions } from 'react-native';
import MapView, { Marker, Polyline } from 'react-native-maps';

let ScreenWidth = Dimensions.get("window").width;


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
    padding: 20
    // backgroundColor: '#ace0f9'
  },
  containerProfile: {
    // backgroundColor: '#ace0f9',
    alignSelf: 'stretch',
    alignItems: 'center',
    height: 200,
    padding: 20
  },
  text: {
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
                latitude: -37.793565,
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
                    <Image resizeMode='cover' style={{position: 'absolute', height: 200, width: ScreenWidth, borderRadius: 20}} source={require('../../res/background_gradient.png')} />
                    <Text style={[styles.text, { fontSize: 20}]}>Match Found</Text>
                    <Text style={[styles.text, { fontSize: 12}]}>Meet At Tin Alley, Parkville</Text>
                    <View style={{ margin: 5 }}/>
                    <Image 
                        style={styles.profile}
                        source={require('../../res/Picture1.png')} 
                    />
                </View>

                <View style={{position: 'absolute', margin: 15, padding: 4, bottom: 0}}>
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
