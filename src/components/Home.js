import React from 'react';
import { Text, View, Button } from 'react-native';

class Home extends React.Component {
  static navigationOptions = {
    title: 'Welcome Home',
  };

  handleOnPress= (component) => {
    const { navigate } = this.props.navigation;
    navigate(component);
  }

  render() {
    return (
      <View>
        <Text >This is my home</Text>
        <Button
          onPress={() => this.handleOnPress('Map')}
          title="Map"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        />
        <Button
          onPress={() => this.handleOnPress('RouteDecision')}
          title="Decide Route"
          color="#834738"
        />
      </View>
    );
  }
}
export default Home;