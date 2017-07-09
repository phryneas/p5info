import * as React from 'react';
import {PersonaDetails} from './Components/PersonaDetails';
import {PersonaByName, PersonaByLevel, PersonaByArcana} from './Components/PersonaList';
import {Negotiation} from './Components/Negotiation';
import {TabNavigator, StackNavigator, DrawerNavigator} from 'react-navigation';
import {SkillsByElement, SkillsByName} from "./Components/SkillList";

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

const skillTabs = TabNavigator({
    SkillsByName: {
        screen: SkillsByName,
        navigationOptions: ({title: "Skill Name"}),
    },
    SkillsByElement: {
        screen: SkillsByElement,
        navigationOptions: ({title: "Skill Element"}),
    },
}, {
    initialRouteName: 'SkillsByName',
});

const personaDrawer = StackNavigator({
    PersonaTabs: {screen: personaTabs},
    PersonaDetails: {screen: PersonaDetails},
}, {
    initialRouteName: 'PersonaTabs',
    initialRouteParams: {}
});

export default DrawerNavigator({
    Skills: {screen: skillTabs},
    Persona: {screen: personaDrawer},
    Negotiation: {screen: Negotiation},
});





