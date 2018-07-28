import React from 'react';
import {Text, View, Button,Image, StyleSheet} from 'react-native';

class ConfirmationPage extends React.Component {
    static navigationOptions = {
        title: 'Confirmation Page',
    };
    handleOnPress = (page) => {
        const {navigate} = this.props.navigation;
        navigate(page);
    };

    render() {
        return (
            <View style={styles.container} >

                <Image  source={require('../../res/timer.png')} />
                <Text>Please wait while we confirm</Text>


                <Button
                    onPress={()=> this.handleOnPress('Home')}
                    title="Cancel"
                />
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
    userName:{

    }
});

export default ConfirmationPage;