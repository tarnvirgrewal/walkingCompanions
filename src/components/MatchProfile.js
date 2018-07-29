import React from 'react';
import {Text, View, Button, Image, StyleSheet} from 'react-native';
import placeholder from '../staged/dummy';

import * as Animatable from 'react-native-animatable';
import FitImage from 'react-native-fit-image';

class MatchProfile extends React.Component {
    static navigationOptions = {
        title: 'Pal Profile',
    };
    handleOnPress = (page) => {
        const {navigate} = this.props.navigation;
        navigate(page);
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
        let picture = require('../../res/Picture1.png');
        if ( match ) {
            interests = match.interests;
            name = match.name;
            picture = match.src;
        }
        this.setState({ id, interests, name, picture });
    }

    render() {
        return (
            <View style={styles.container} >
                <Image resizeMode='cover' style={{position: 'absolute', }} source={require('../../res/background_gradient.png')} />
                <Animatable.Image animation="zoomIn" style={[styles.section, styles.image]} source={this.state.picture} />
                <Text style={[styles.section, styles.h1]} >{this.state.name}</Text>
                <Text style={[styles.section, styles.bold, styles.h2]} >Interests</Text>
                { 
                    this.state.interests.map((interest) => <Text key={interest}>{interest}</Text>) 
                }
                <View  style={styles.section}>
                    <Button
                        onPress={()=> this.handleOnPress('ConfirmationPage')}
                        title="Match"
                    />
                </View>
            </View> 

        ); 
    }
}
const styles= StyleSheet.create({
    container:{
        top: 0,
        padding: 20,
        alignItems: 'center',
        justifyContent: 'center'
    },
    h1:{
        fontSize: 32,
    },
    h2: {
        fontSize: 24
    },
    bold: {
        fontWeight: 'bold',
    },
    section: {
        margin: 20,
    },
    image: {
        borderRadius: 100,
        height: 200,
        width: 200,
    }
});

export default MatchProfile;