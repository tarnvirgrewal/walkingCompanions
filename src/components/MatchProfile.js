import React from 'react';
import {Text, View, Button,Image, StyleSheet} from 'react-native';

const placeholder = [
    { id: 1, name: 'Jeff', interests: ['basketball', 'soccer', 'games']}
]

class MatchProfile extends React.Component {
    static navigationOptions = {
        title: 'MatchProfile',
    };

    state = {
        interests: [],
        name: undefined,
        id: undefined,
    }
    
    componentDidMount() {
        const id = this.props.navigation.getParam('id', 'NO-ID');
        const match = placeholder.find((item) => item.id == id);
        let interests = [];
        let name = 'Anon';
        if ( match ) {
            interests = match.interests;
            name = match.name;
        }
        this.setState({ id, interests, name });
    }

    render() {
        return (
            <View style={styles.container} >
                <Image  source={require('../../res/Picture1.png')} />
                <Text style={styles.userName}>{this.state.name}</Text>
                <Text>Interests</Text>
                { 
                    this.state.interests.map((interest) => <Text key={interest}>{interest}</Text>) 
                }
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