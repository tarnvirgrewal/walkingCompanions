import React from "react";
import { GiftedChat } from "react-native-gifted-chat";
import {View, TextInput, Image, KeyboardAvoidingView, StyleSheet} from 'react-native';
import Fire from './Fire';

export default class UserMessages extends React.Component {
    state = {
        messages: []
    };

    componentDidMount() {
        Fire.shared.on(message =>
            this.setState(previousState => ({
                messages: GiftedChat.append(previousState.messages, message),
            }))
        );
    }
    componentWillUnmount() {
        Fire.shared.off();
    }

    onSend(messages = []) {
        this.setState(previousState => ({
            messages: GiftedChat.append(previousState.messages, messages),
        }))
    }

    render() {

        return(
            <View  style={{flex:1}}>
                <GiftedChat

                    messages={this.state.messages}
                    onSend={Fire.shared.send}
                    user={{
                        _id: 1,
                    }}
                ></GiftedChat>

                <KeyboardAvoidingView behavior={'padding'} keyboardVerticalOffset={84}/>
            </View>
        )

    }

}

const styles =StyleSheet.create({
    container:{
        flex:1,
    },
    userName:{

    }
});