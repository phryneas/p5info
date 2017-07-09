import * as React from 'react';
import {Text, View, ScrollView} from 'react-native';

import {PersonaData, allSkills} from '../Data';
import {NavigationScreenProps} from "react-navigation";

export interface Props {
    persona: PersonaData;
}

export class PersonaDetails extends React.Component<NavigationScreenProps<Props>> {
    static navigationOptions = {
        title: 'Persona Details',
    };

    render() {
        const {persona} = this.props.navigation.state.params as Props;
        return (
            <ScrollView>
                <View style={{flex: 1, flexDirection: 'column', width: '100%'}}>
                    <View style={{flexDirection: 'row'}}>
                        <View style={{flex: 3}}>
                            <Text>Name:</Text>
                        </View>
                        <View style={{flex: 9}}>
                            <Text>{persona.name}</Text>
                        </View>
                    </View>

                    <View style={{flexDirection: 'row'}}>
                        <View style={{flex: 3}}>
                            <Text>Arcana:</Text>
                        </View>
                        <View style={{flex: 9}}>
                            <Text>{persona.arcana}</Text>
                        </View>
                    </View>

                    <View style={{flexDirection: 'row'}}>
                        <View style={{flex: 3}}>
                            <Text>Level:</Text>
                        </View>
                        <View style={{flex: 9}}>
                            <Text>{persona.level}</Text>
                        </View>
                    </View>

                    <View style={{flexDirection: 'row'}}>
                        <View style={{flex: 3}}>
                            <Text>Personality:</Text>
                        </View>
                        <View style={{flex: 9, flexDirection: 'column'}}>
                            <View>
                                <Text>{persona.personality || 'unknown'}</Text>
                            </View>
                            {persona.personality == 'Upbeat' && <View>
                                <Text>Likes: Funny</Text>
                                <Text>Dislikes: Serious, Vague</Text>
                            </View>}
                            {persona.personality == 'Timid' && <View>
                                <Text>Likes: Kind</Text>
                                <Text>Dislikes: Vague, Funny</Text>
                            </View>}
                            {persona.personality == 'Irritable' && <View>
                                <Text>Likes: Serious</Text>
                                <Text>Dislikes: Vague, Kind</Text>
                            </View>}
                            {persona.personality == 'Gloomy' && <View>
                                <Text>Likes: Vague</Text>
                                <Text>Dislikes: Serious, Funny</Text>
                            </View>}
                        </View>
                    </View>

                    <View style={{flexDirection: 'row'}}>
                        <View style={{flex: 3}}>
                            <Text>Stats:</Text>
                        </View>
                        <View style={{flex: 9}}>
                            {["Strength", "Magic", "Endurance", "Agility", "Luck"].map((stat) =>
                                <Text key={stat}>{stat}: {persona[stat.toLowerCase()]}</Text>)}
                        </View>
                    </View>

                    <View style={{flexDirection: 'row'}}>
                        <View style={{flex: 3}}>
                            <Text>Resistances:</Text>
                        </View>
                        <View style={{flex: 9}}>
                            {["Physical", "Gun", "Fire", "Ice", "Electric", "Wind", "Psychic", "Nuclear", "Bless", "Curse"].map((resistance) =>
                                <Text key={resistance}>{resistance}: {persona[resistance.toLowerCase()]}</Text>)}
                        </View>
                    </View>

                    <View style={{flexDirection: 'row'}}>
                        <View style={{flex: 3}}>
                            <Text>Skills:</Text>
                        </View>
                        <View style={{flex: 9}}>
                            {Object.keys(persona.skills).map((skillName) => {
                                let skill = allSkills[skillName];
                                return (
                                    <View key={skillName} style={{flexDirection: 'column'}}>
                                        <View>
                                            <Text>{skillName} ({skill.cost > 0 ? (
                                                <Text>{skill.cost >= 100 ? skill.cost / 100 : skill.cost}{skill.cost >= 100 ? 'MP' : ('%HP')}</Text>) : (
                                                <Text>passive</Text>)})</Text>
                                        </View>
                                        <View>
                                            <Text>{skill.effect}</Text>
                                        </View>
                                    </View>);
                            })}
                        </View>
                    </View>
                </View >
            </ScrollView>
        );
    }
}