import * as React from 'react';
import {Text, View, ScrollView, TouchableHighlight} from 'react-native';

import {SkillData, allPersona} from '../Data';
import {NavigationScreenProps} from "react-navigation";

export interface Props {
    skill: SkillData;
}

export class SkillDetails extends React.Component<NavigationScreenProps<Props>> {
    static navigationOptions = ({navigation: {state: {params: {skill}}}}: NavigationScreenProps<Props>) => ({
        title: skill ? 'Skill Details: ' + skill.name : 'Persona Details',
    });

    render() {
        const {navigate, state: {params: {skill}}} = this.props.navigation;
        return (
            <ScrollView>
                <View style={{flex: 1, flexDirection: 'column', width: '100%'}}>
                    <View style={{flexDirection: 'row'}}>
                        <View style={{flex: 3}}>
                            <Text>Name:</Text>
                        </View>
                        <View style={{flex: 9}}>
                            <Text>{skill.name}</Text>
                        </View>
                    </View>

                    <View style={{flexDirection: 'row'}}>
                        <View style={{flex: 3}}>
                            <Text>Element:</Text>
                        </View>
                        <View style={{flex: 9}}>
                            <Text>{skill.element}</Text>
                        </View>
                    </View>

                    <View style={{flexDirection: 'row'}}>
                        <View style={{flex: 3}}>
                            <Text>Cost:</Text>
                        </View>
                        <View style={{flex: 9}}>
                            <Text>{skill.cost}</Text>
                        </View>
                    </View>
                    <View style={{flexDirection: 'row'}}>
                        <View style={{flex: 3}}>
                            <Text>Effect:</Text>
                        </View>
                        <View style={{flex: 9}}>
                            <Text>{skill.effect}</Text>
                        </View>
                    </View>

                    <View style={{flexDirection: 'row'}}>
                        <View style={{flex: 3}}>
                            <Text>Persona:</Text>
                        </View>
                        <View style={{flex: 9}}>
                            {Object.keys(skill.personas).map((personaName) => {
                                let persona = allPersona[personaName];
                                return (
                                    <View key={personaName} style={{flexDirection: 'column'}}>
                                        <TouchableHighlight onPress={() => navigate('PersonaDetails', {persona})}>
                                            <Text
                                                style={{
                                                    textDecorationLine: "underline",
                                                    color: "blue"
                                                }}
                                            >{persona.name}</Text>
                                        </TouchableHighlight>
                                    </View>);
                            })}
                        </View>
                    </View>
                </View >
            </ScrollView>
        );
    }
}