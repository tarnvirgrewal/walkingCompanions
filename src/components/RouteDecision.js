import React from 'react';
import { Text, View, Image, StyleSheet, Button} from 'react-native';
import MapView,{ Marker } from 'react-native-maps';
import Fire from './Fire';
import {GiftedChat} from "react-native-gifted-chat";
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
    backgroundColor: '#ace0f9',
    margin: 20
  },
  containerProfile: {
    backgroundColor: '#ace0f9',
    alignSelf: 'stretch',
    alignItems: 'center',
    height: 250
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
      margin: 15,
      backgroundColor: 'white',
      width: 100
  }
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

    handleOnPress= (component, invitationAnswer) => {
        const { navigate } = this.props.navigation;

        Fire.shared.updateUser(invitationAnswer, true);
        navigate(component);
      /*  var config = {
            apiKey: "AIzaSyCUqP5AB7PQ71f0qzpyGatyuJJ3OdV_BA0",
            authDomain: "walkpals.firebaseapp.com",
            databaseURL: "https://walkpals.firebaseio.com",
            projectId: "walkpals",
            storageBucket: "walkpals.appspot.com",
            messagingSenderId: "604206196946"
        };
        firebase.initializeApp(config);
        // To select data from firebase every time data has changed !
        firebase.database().ref('user').on('value', (data) => {
            console.log(data.toJSON());
        });

        // To Update a user
        firebase.database().ref('user').update({
            requestAccepted: invitationAnswer
        });*/


      }

    componentWillUnmount() {
        Fire.shared.off();
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
                    coordinate={this.state.region}
                    pinColor='#fff1eb'
                    ///image={require('../../res/Picture1.png')}
                />
                </MapView>
                <View style={styles.containerProfile}>
                    <Image 
                        style={styles.profile}
                        source={require('../../res/Picture1.png')} 
                    />
                    <Text style={styles.text}>Has requested to travel with you!</Text>
                </View>
                <View style={{position: 'absolute', margin: 15, padding: 4, bottom: 100}}>
                    <Button
                        onPress={() => this.handleOnPress('MeetUp',true)}
                        title="Accept"
                    />
                </View>
                <View style={{position: 'absolute', margin: 15, padding: 4, bottom: 50}}>
                    <Button
                        onPress={() => this.handleOnPress('Map',false)}
                        title="Decline"
                    />
                </View>
            </View>  
    );
  }
}

export default Decision;
