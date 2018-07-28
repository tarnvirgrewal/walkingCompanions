import React from 'react';
import { Text, View, Image, StyleSheet, Button } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

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
                latitude: -37.796265,
                longitude: 144.960954,
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
                    annotations={this.state.markers[0]}
                    >
                    <Marker
                        coordinate={this.state.region}
                        pinColor = 'black'
                    />
                </MapView>

                <View style={styles.containerProfile}>
                    <Text style={styles.text}>Match Found</Text>
                    <Text style={styles.text}>Meet At</Text>
                </View>

                <View style={{position: 'absolute', margin: 15, padding: 4, bottom: 50}}>
                    <Button
                        onPress={() => this.handleOnPress('Map')}
                        title=" Message Pal "
                        color="#841584"
                    />
                </View>

                <View style={{position: 'absolute', margin: 15, padding: 4, bottom: 0}}>
                    <Button
                        onPress={() => this.handleOnPress('Map')}
                        title="Start Journey"
                        color="#841584"
                    />
                </View>
            </View>  
    );
  }
}

export default Meet;
