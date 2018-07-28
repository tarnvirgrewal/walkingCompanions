import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    padding: 20
  }
})

class Candidates extends React.Component {
  render() {
    return(
      <View style={styles.container} >
        <Text>🤓</Text>
        <Text>{this.props.eta} min</Text>
      </View>
    );
  }
}

export default Candidates;