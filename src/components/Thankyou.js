import React from 'react';
import {Text, View, Button,Image, StyleSheet} from 'react-native';

class Thankyou extends React.Component {
    static navigationOptions = {
        title: 'Thank you',
    };
    handleOnPress = (page) => {
        const {navigate} = this.props.navigation;
        navigate(page);
    };

    render() {
        return (
            <View style={styles.container} >
                <Text style={styles.section}>Thank you for walking with WalkingPal</Text>
                <View style={styles.section} >
                    <Button
                        onPress={()=> this.handleOnPress('Map')}
                        title="Home"
                    />
                </View>
            </View>

        );
    }
}
const styles= StyleSheet.create({
    container: {
        flex:1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    section: {
        margin: 20
    },
});

export default Thankyou;