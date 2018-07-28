import React from 'react';
import {Text, View, Button,Image, StyleSheet} from 'react-native';
import Fire from './Fire';

class ConfirmationPage extends React.Component {
    static navigationOptions = {
        title: 'Confirmation Page',
    };
    handleOnPress = (page) => {
        const {navigate} = this.props.navigation;
        navigate(page);
    };
    componentDidMount () {
        Fire.shared.getData().on('value', user => {
            var response = user.val().requestAccepted;
            console.log(response);
            if(response===true){
                const {navigate} = this.props.navigation;
                navigate('MeetUp');
            }
            else if(response===false){
                const {navigate} = this.props.navigation;
                navigate('RequestDenied');
            }
        });

    }
    render() {
        return (
            <View style={styles.container} >

                <Image style={styles.section} source={require('../../res/timer.png')} />
                <Text style={styles.section}>Please wait while we confirm</Text>
                <View style={styles.section} >
                    <Button
                        onPress={()=> this.handleOnPress('Map')}
                        title="Cancel"
                    />
                </View>
            </View>

        );
    }
}
const styles= StyleSheet.create({
    container:{
        flex:1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    section:{
        margin: 20
    }
});

export default ConfirmationPage;