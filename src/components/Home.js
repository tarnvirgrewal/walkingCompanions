import React from 'react';
import { Text, View, Button } from 'react-native';

class Home extends React.Component {
  static navigationOptions = {
    title: 'Welcome Home',
  };

  handleOnPress = (page) => {
      const {navigate} = this.props.navigation;
      navigate(page);
  };

  render() {
    return (
      <View>
        <Text >This is my home</Text>

        <Button
            onPress={()=> this.handleOnPress('MatchProfile')}
            title="look at user profile"

        />
      </View>
    );
  }
}
export default Home;