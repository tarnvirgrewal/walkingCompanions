import React from 'react';
import {Text, View, Button,Image, StyleSheet} from 'react-native';

class MatchProfile extends React.Component {
    static navigationOptions = {
        title: 'MatchProfile',
    };
    handleOnPress = (page) => {
        const {navigate} = this.props.navigation;
        navigate(page);
    };

    render() {
        return (
            <View style={styles.container} >
                <Image  source={require('../../res/Picture1.png')} />
                <Text style={styles.userName}>Danish Bassi</Text>
                <Text>Interests</Text>
                <Text>Likes to talk long walks at the beach.</Text>
                <Text>Cheese is great</Text>
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

export default MatchProfile;