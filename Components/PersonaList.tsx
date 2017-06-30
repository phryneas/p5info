import * as React from 'react';
import {Button, View, ScrollView} from 'react-native';

import {personaMap} from '../persona5_calculator';
import {NavigationScreenProps} from "react-navigation";
import {PersonaDetails} from "./PersonaDetails";

interface Props {}

export class PersonaList extends React.Component<NavigationScreenProps<Props>> {
    static navigationOptions = {
        title: 'Persona List',
    };


    render() {
        const {navigation} = this.props;

        return (
            <ScrollView>
                <View style={{flex: 1, flexDirection: 'column', width: '100%'}}>
                    {Object.keys(personaMap).map((personaName: string) => <View key={personaName}>
                        <Button title={personaName} onPress={() => navigation.navigate('PersonaDetails', { persona: PersonaDetails.getPersona(personaName) })}/>
                    </View>)}
                </View >
            </ScrollView>
        );
    }
}