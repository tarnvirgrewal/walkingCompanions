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
                    onPress={()=> this.handleOnPress('Map')}
                    title="Go to Map"
                    color="#841584"
                    accessibilityLabel="Learn more about this purple button"
                />
                <Button
                    onPress={()=> this.handleOnPress('MatchProfile')}
                    title="look at user profile"

                />
                <Button

                onPress={() => this.handleOnPress('RouteDecision')}
                title="Decide Route"
                color="#834738"
              />
                <Button
                    onPress={()=> this.handleOnPress('RequestDenied')}
                    title="Request Denied"
                />
                <Button
                    onPress={()=> this.handleOnPress('UserMessages')}
                    title="Messaging"
                />

            </View>

        );
      }
}
export default Home;