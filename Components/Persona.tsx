import * as React from 'react';
import {Text, View} from 'react-native';

import {PersonaData, skillMap} from '../persona5_calculator';

interface Props {
    persona: PersonaData;
}

export class Persona extends React.Component<Props> {
    render() {
        const {persona} = this.props;
        return (
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
                            let skill = skillMap[skillName];
                            return (
                                <View key={skillName} style={{flexDirection: 'column'}}>
                                    <View>
                                        <Text>{skillName} ({skill.cost>0?(<Text>{skill.cost>100?skill.cost/100:skill.cost}{skill.cost>1000?'MP':('%HP')}</Text>):(<Text>passive</Text>)})</Text>
                                    </View>
                                    <View>
                                        <Text>{skill.effect}</Text>
                                    </View>
                                </View>);
                        })}
                    </View>
                </View>
            </View >
        );
    }
}