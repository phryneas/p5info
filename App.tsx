import * as React from 'react';
import {PersonaDetails} from './Components/PersonaDetails';
import {PersonaList} from './Components/PersonaList';
import {Negotiation} from './Components/Negotiation';
import {TabNavigator, StackNavigator} from 'react-navigation';
import {personaMap} from './persona5_calculator';

let idx = Math.floor(Math.random() * Object.keys(personaMap).length);
let name = Object.keys(personaMap)[idx];
let persona = PersonaDetails.getPersona(name);

export default TabNavigator({
    Persona: {
        screen: StackNavigator({
        PersonaList: {screen: PersonaList},
        PersonaDetails: {screen: PersonaDetails},
    }, {
        initialRouteName: 'PersonaList',
//    initialRouteParams: {persona}
    })
    },
    Negotiation: { screen: Negotiation}
}, {
    initialRouteName: 'Persona',
});
