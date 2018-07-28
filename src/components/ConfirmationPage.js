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