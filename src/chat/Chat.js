import React from 'react';
import {GiftedChat} from 'react-native-gifted-chat'; // 0.3.0
import {Platform, KeyboardAvoidingView} from 'react-native';
import firebaseSDK from '../config/firebaseSDK';
import {SafeAreaView} from 'react-native-safe-area-context';

export class Chat extends React.Component {
    static navigationOptions = ({navigation}) => ({
        title: (navigation.state.params || {}).name || 'Chat!',
    });

    state = {
        messages: [],
    };

    get user() {
        return {
            name: this.props.navigation.state.params.name,
            email: this.props.navigation.state.params.email,
            avatar: this.props.navigation.state.params.avatar,
            _id: firebaseSDK.uid,
        };
    }

    render() {

        return (
            <GiftedChat
                isAnimated
                messages={this.state.messages}
                onSend={firebaseSDK.send}
                user={this.user}
            />

        );
    }

    componentDidMount = () => {
        this.setState({
            messages: [
                {
                    _id: 1,
                    createdAt: new Date(),
                    user: {
                        _id: 2,
                        avatar: 'https://placeimg.com/140/140/any',
                    },
                },
            ],
        })
        firebaseSDK.get(message =>
            this.setState(previous => ({
                    messages: GiftedChat.append(previous.messages, message),
                }),
            ),
        );
    };


    componentWillUnmount() {
        firebaseSDK.off();
    }
}
