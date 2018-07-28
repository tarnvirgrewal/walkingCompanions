import React from 'react';
import {Text, View, Button,Image, StyleSheet} from 'react-native';

class RequestDenied extends React.Component {
    static navigationOptions = {
        title: 'Sorry :(',
    };
    handleOnPress = (page) => {
        const {navigate} = this.props.navigation;
        navigate(page);
    };

    render() {
        return (
            <View style={styles.container} >


                <Text>Sorry, your request was denied :(</Text>
                <Text>Find another match?</Text>


                <Button
                    onPress={()=> this.handleOnPress('Home')}
                    title="Go Back"
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

export default RequestDenied;