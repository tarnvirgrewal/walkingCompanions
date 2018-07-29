import React from 'react';
import { Text, View, ScrollView, Image, StyleSheet, Dimensions } from 'react-native';
import Candidates from './Candidates';
// import LinearGradient from 'react-native-linear-gradient';
import dummy from '../staged/dummy';

import * as Animatable from 'react-native-animatable';
import FitImage from 'react-native-fit-image';


let ScreenWidth = Dimensions.get("window").width;


const styles = StyleSheet.create({
    container: {
      height: 300,
      backgroundColor: '#fff', //'linear-gradient(#fff1eb, #ace0f9)',
      borderTopLeftRadius: 20,
      borderTopRightRadius: 20,
      width: ScreenWidth,
      position: 'absolute',
      padding: 20,
      bottom: 0,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.8,
      shadowRadius: 2,
      elevation: 1,
    },
    text: {
      color: 'black',
      fontSize: 32,
      // fontWeight: 'bold',
      padding: 10
    },
    textContainer: {
      alignItems: 'center',
    },
    candidateContainer: {
      flexDirection:"row",
      overflow: "visible"
    }
});
class Potential extends React.Component {
  state = {
    nearby: dummy
  }
  render() {
    return(
      <Animatable.View animation="bounceInUp" style={styles.container} >
        <Image resizeMode='cover' style={{position: 'absolute', height: 300, width: ScreenWidth, borderRadius: 20}} source={require('../../res/background_gradient.png')} />
        <View style={styles.textContainer}>
          <Text style={styles.text}>Nearby</Text>
        </View>
        <ScrollView horizontal={true} style={styles.candidateContainer} > 
        {
          this.state.nearby.map((candidate, index) => {
            const { id, name, eta, src } = candidate;
            return (
              <Candidates id={id} name={name} eta={eta} key={`candidate-${index}`} src={src} navigation={this.props.navigation} hideNearby={this.props.hideNearby} />
            );
          })
        }
        </ScrollView>
      </Animatable.View>
    );
  }
}

export default Potential;
