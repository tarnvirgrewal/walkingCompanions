import React from 'react';
import { TouchableHighlight, View, Text, StyleSheet, Alert } from 'react-native';

const styles = StyleSheet.create({
  container: {
    padding: 20
  }
})

class Candidates extends React.Component {
  handleOnClick = () => {
    Alert.alert("save me");
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