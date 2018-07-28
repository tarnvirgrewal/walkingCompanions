import React from 'react';
import { TouchableHighlight, View, Text, StyleSheet, Alert } from 'react-native';

const styles = StyleSheet.create({
  container: {
    padding: 20
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
          <Text>🤓</Text>
          <Text>{this.props.eta} min</Text>
        </View>
      </TouchableHighlight>
    );
  }
}

export default Candidates;