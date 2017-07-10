import * as React from 'react';
import {PersonaDetails} from './Components/PersonaDetails';
import {SkillDetails} from './Components/SkillDetails';
import {PersonaByName, PersonaByLevel, PersonaByArcana} from './Components/PersonaList';
import {Negotiation} from './Components/Negotiation';
import {TabNavigator, StackNavigator, DrawerNavigator} from 'react-navigation';
import {SkillsByElement, SkillsByName} from "./Components/SkillList";

const personaTabs = TabNavigator({
    PersonaByAlphabet: {
        screen: PersonaByName,
        navigationOptions: {
            title: "by Name",
            headerTitle: 'Persona by Name',
        },
    },
    PersonaByLevel: {
        screen: PersonaByLevel,
        navigationOptions: {
            title: "by Level",
            headerTitle: 'Persona by Level',
        },
    },
    PersonaByArcana: {
        screen: PersonaByArcana,
        navigationOptions: {
            title: "by Arcana",
            headerTitle: 'Persona by Arcana'
        },
    },
}, {
    initialRouteName: 'PersonaByAlphabet',
});

const personaDrawer = StackNavigator({
    PersonaTabs: {
        screen: personaTabs,
    },
    PersonaDetails: {
        screen: PersonaDetails,
    },
}, {
    initialRouteName: 'PersonaTabs',
    initialRouteParams: {},
});

const skillTabs = TabNavigator({
    SkillsByName: {
        screen: SkillsByName,
        navigationOptions: {
            title: "by Name",
            headerTitle: 'Skills by Name',
        },
    },
    SkillsByElement: {
        screen: SkillsByElement,
        navigationOptions: {
            title: "by Element",
            headerTitle: 'Skills by Element',
        },
    },
}, {
    initialRouteName: 'SkillsByName',
});

const skillDrawer = StackNavigator({
    SkillTabs: {
        screen: skillTabs,
    },
    SkillDetails: {screen: SkillDetails},
}, {
    initialRouteName: 'SkillTabs',
    initialRouteParams: {},
});

const negotiationDrawer = StackNavigator({
    Negotiation: {
        screen: Negotiation,
        navigationOptions: {
            title: "Negotiation",
            headerTitle: "Negotiation"
        },
    },
});

export default DrawerNavigator({
    Skills: {
        screen: skillDrawer,
        navigationOptions: {title: "Skills"},
    },
    Persona: {
        screen: personaDrawer,
        navigationOptions: {title: "Persona"},
    },
    Negotiation: {
        screen: negotiationDrawer,
        navigationOptions: {title: "Negotiation"},
    },
});