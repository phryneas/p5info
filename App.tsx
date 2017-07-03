import * as React from 'react';
import {PersonaDetails} from './Components/PersonaDetails';
import {PersonaByName, PersonaByLevel, PersonaByArcana} from './Components/PersonaList';
import {Negotiation} from './Components/Negotiation';
import {TabNavigator, StackNavigator, DrawerNavigator, NavigationScreenProps} from 'react-navigation';
import {allPersona} from './Data';

/*
 let idx = Math.floor(Math.random() * Object.keys(allPersona).length);
 let name = Object.keys(allPersona)[idx];
 let persona = allPersona[name];
 */

const personaTabs = TabNavigator({
    PersonaByAlphabet: {
        screen: PersonaByName,
        navigationOptions: ({title: "Name"}),
    },
    PersonaByLevel: {
        screen: PersonaByLevel,
        navigationOptions: ({title: "Level"}),
    },
    PersonaByArcana: {
        screen: PersonaByArcana,
        navigationOptions: ({title: "Arcana"}),
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





