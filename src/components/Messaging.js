import React from 'react';
import {Text, View, Button,Image, StyleSheet} from 'react-native';
import * as firebase from 'firebase';


class Messaging extends React.Component {
    static navigationOptions = {
        title: 'MatchProfile',
    };
    handleOnPress = (page) => {
        const {navigate} = this.props.navigation;
        navigate(page);
    };
    componentWillMount() {

        // To Configure react native app with cloud of Google Firebase database !
        var config = {
            apiKey: "AIzaSyCUqP5AB7PQ71f0qzpyGatyuJJ3OdV_BA0",
            authDomain: "walkpals.firebaseapp.com",
            databaseURL: "https://walkpals.firebaseio.com",
            projectId: "walkpals",
            storageBucket: "walkpals.appspot.com",
            messagingSenderId: "604206196946"
        };
        firebase.initializeApp(config);

        // To select data from firebase every time data has changed !
        firebase.database().ref('users').on('value', (data) => {
            console.log(data.toJSON());
        });

        // To Await 5 seconds to insert a new user

        firebase.database().ref('users/004').set(
                {
                    name: 'Pheng Sengvuthy 004',
                    age: 24
                }
            ).then(() => {
                console.log('INSERTED !');
            }).catch((error) => {
                console.log(error);
            });


        // To Update a user
        firebase.database().ref('users/004').update({
            name: 'Pheng Sengvuthy'
        });

        // To Remove a user
        //firebase.database().ref('users/004').remove();

    }

    render() {
        return (
            <View style={styles.container} >

                <Button
                    onPress={()=> this.handleOnPress('ConfirmationPage')}
                    title="Match"
                />
            </View>

        );
    }
}
const styles= StyleSheet.create({
    container:{

        alignItems: 'center',
        justifyContent: 'center'
    },
    userName:{

    }
});

export default Messaging;
