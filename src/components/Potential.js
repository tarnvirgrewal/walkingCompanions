import React from 'react';
import { Text, View, ScrollView, Button, StyleSheet, Dimensions } from 'react-native';
import Candidates from './Candidates';
// import react-native-linear-gradient from 'react-native-linear-gradient';

import * as Animatable from 'react-native-animatable';


let ScreenWidth = Dimensions.get("window").width;

const dummy = [
  { id: 1, name: "Jeff", eta: 5 },
  { id: 2, name: "William", eta: 15 },
  { id: 3, name: "Sandy", eta: 25 },
  { id: 1, name: "Jeff", eta: 5 },
  { id: 2, name: "William", eta: 15 },
  { id: 3, name: "Sandy", eta: 25 },
  { id: 1, name: "Jeff", eta: 5 },
  { id: 2, name: "William", eta: 15 },
  { id: 3, name: "Sandy", eta: 25 },
];

const styles = StyleSheet.create({
    container: {
      height: 350,
      backgroundColor: '#ace0f9', //'linear-gradient(#fff1eb, #ace0f9)',
      width: ScreenWidth,
      position: 'absolute',
      padding: 20,
      bottom: 0,
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
        <View style={styles.textContainer}>
          <Text style={styles.text}>Nearby</Text>
        </View>
        <ScrollView horizontal={true} style={styles.candidateContainer} >
        {
          this.state.nearby.map((candidate, index) => {
            const { id, name, eta } = candidate;
            return (
              <Candidates id={id} name={name} eta={eta} key={`candidate-${index}`} navigation={this.props.navigation} />
            );
          })
        }
        </ScrollView>
      </Animatable.View>
    );
  }
}

export default Potential;
