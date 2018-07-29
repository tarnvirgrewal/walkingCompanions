import React from 'react';
import {Text, View, Button, Image, StyleSheet} from 'react-native';

import * as Animatable from 'react-native-animatable';

const placeholder = [
    { id: 1, name: 'Jeff', interests: ['basketball', 'soccer', 'games']}
]

class Review extends React.Component {
    static navigationOptions = {
        title: 'MatchProfile',
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
        const id = 1;
        const match = placeholder.find((item) => item.id == id);
        let interests = ['basketball', 'soccer', 'games'];
        let name = 'Jeff';
        if ( match ) {
            interests = match.interests;
            name = match.name;
        }
        this.setState({ id, interests, name });
    }

    render() {
        return (
            <View style={styles.container} >
                <Image style={styles.section} source={require('../../res/Picture1.png')} />
                <Text style={[styles.section, styles.bold, styles.h1]} >{this.state.name}</Text>
                <Text style={[styles.section, styles.h2]} >Leave a compliment for your</Text>
                <Text style={[styles.section, styles.h2]} >Walking Pal</Text>

                <View  style={styles.section}>
                    <Button
                        onPress={()=> this.handleOnPress('Thankyou')}
                        title="Great Converstaion"
                    />
                    <Button
                        onPress={()=> this.handleOnPress('Thankyou')}
                        title="Easygoing"
                    />
                    <Button
                        onPress={()=> this.handleOnPress('Thankyou')}
                        title="Good Companion"
                    />
                </View>
            </View> 

        );
    }
}
const styles= StyleSheet.create({
    container:{
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
});

export default Review;