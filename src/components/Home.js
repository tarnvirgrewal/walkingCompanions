import React from 'react';
import { Text, View, Button, StyleSheet } from 'react-native';

class Home extends React.Component {
  static navigationOptions = {
    title: 'Welcome Home',
  };

  handleOnPress = () => {
    const { navigate } = this.props.navigation;
    navigate('Map');
  }

  render() {
    return (
      <View >
        <Text >This is my home</Text>
        <Button
          onPress={this.handleOnPress}
          title="Go to Map"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        />
      </View>
    );
  }
}
export default Home;

