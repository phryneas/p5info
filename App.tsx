import * as React from 'react';
import {StyleSheet, ScrollView, View} from 'react-native';
import {Persona} from './Components/Persona';

import {personaMap, PersonaData} from './persona5_calculator';

export default class App extends React.Component {

    static getPersona(name: string): PersonaData {
        let persona = personaMap[name];
        return {
            name,
            // Stats
            strength: persona.stats[0],
            magic: persona.stats[1],
            endurance: persona.stats[2],
            agility: persona.stats[3],
            luck: persona.stats[4],
            // Resistances
            physical: persona.elems[0],
            gun: persona.elems[1],
            fire: persona.elems[2],
            ice: persona.elems[3],
            electric: persona.elems[4],
            wind: persona.elems[5],
            psychic: persona.elems[6],
            nuclear: persona.elems[7],
            bless: persona.elems[8],
            curse: persona.elems[9],
            ...persona,
        };
    }

    render() {

        let idx = Math.floor(Math.random() * Object.keys(personaMap).length);
        let name = Object.keys(personaMap)[idx];
        let persona = App.getPersona(name);
        console.log(persona);

        return (
            <ScrollView>
                <View style={styles.container}>
                    <Persona persona={persona}/>
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
