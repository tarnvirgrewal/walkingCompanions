import React from 'react';
import { TouchableHighlight, View, Text, StyleSheet, Alert, Image } from 'react-native';

const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: 'center',
  },
  image: {
    height: 100,
    width: 100,
    borderRadius: 100000
  },
  eta: {
    padding: 10
  }
})

class Candidates extends React.Component {
  handleOnClick = () => {
    const { navigate } = this.props.navigation;

    // Alert.alert('navigate');
    navigate('MatchProfile', { id: this.props.id });
  }

  render() {
    return(
      <TouchableHighlight onPress={this.handleOnClick} >
        <View style={styles.container} >
          <Image style={styles.image}  source={require('../../res/Picture1.png')} />
          <Text style={styles.eta} >{this.props.eta} min</Text>
        </View>
      </TouchableHighlight>
    );
  }
}

export default Candidates;