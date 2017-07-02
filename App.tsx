import * as React from 'react';
import {PersonaDetails} from './Components/PersonaDetails';
import {PersonaList} from './Components/PersonaList';
import {Negotiation} from './Components/Negotiation';
import {TabNavigator, StackNavigator, DrawerNavigator} from 'react-navigation';
import {personaMap} from './persona5_calculator';

let idx = Math.floor(Math.random() * Object.keys(personaMap).length);
let name = Object.keys(personaMap)[idx];
let persona = PersonaDetails.getPersona(name);

const personaTabs = TabNavigator({
    PersonaByAlphabet: {
        screen: PersonaList,
        navigationOptions: ({title: "alphabetical"}),
    },
    PersonaByLevel: {
        screen: PersonaList,
        navigationOptions: ({title: "level"}),
    },
}, {
    initialRouteName: 'PersonaByAlphabet',
});

const personaDrawer = StackNavigator({
    PersonaTabs: {screen: personaTabs},
    PersonaDetails: {screen: PersonaDetails},
}, {
    initialRouteName: 'PersonaTabs',
    initialRouteParams: {}
});

export default DrawerNavigator({
    Persona: {screen: personaDrawer},
    Negotiation: {screen: Negotiation},
});





