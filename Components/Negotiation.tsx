import * as React from 'react';
import {Text, View, ScrollView} from 'react-native';

import {NavigationScreenProps} from "react-navigation";

interface Props {
}

const NegotiationRow =
({personality, likes, dislikes}: { personality: string, likes: string, dislikes: string }) => (
    <View style={{flexDirection: 'row'}}>
        <Text style={{flex: 1}}>{personality}</Text>
        <Text style={{flex: 1}}>{likes}</Text>
        <Text style={{flex: 1}}>{dislikes}</Text>
    </View>

);

export class Negotiation extends React.Component<NavigationScreenProps<Props>> {
    static navigationOptions = {
        title: 'Persona List',
    };


    render() {
        const {navigation} = this.props;

        return (
            <ScrollView>
                <View style={{flex: 1, flexDirection: 'column', width: '100%'}}>
                    <NegotiationRow personality="Personality" likes="Likes" dislikes="Dislikes" />
                    <NegotiationRow personality="Upbeat" likes="Funny" dislikes="Serious, Vague" />
                    <NegotiationRow personality="Timid" likes="Kind" dislikes="Vague, Funny" />
                    <NegotiationRow personality="Irritable" likes="Serious" dislikes="Vague, Kind" />
                    <NegotiationRow personality="Gloomy" likes="Vague" dislikes="Serious, Funny" />
                </View >
            </ScrollView>
        );
    }
}