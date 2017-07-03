import * as React from 'react';
import {Button, Text} from 'react-native';

import {NavigationScreenProps} from "react-navigation";
import {PersonaDetails} from "./PersonaDetails";
import {allPersona, PersonaData} from "../Data";
import {GenericList} from "./GenericList";


const renderItem = function (this: GenericList<PersonaData>, persona: PersonaData) {
    return <Button
        title={persona.name || 'empty'}
        onPress={() => this.props.navigation.navigate('PersonaDetails', {persona})}
    />;
};
const renderHeader = (sectionData: any, name: string) => <Text>{name}</Text>;


class PersonaList extends GenericList<PersonaData> {
}

export const PersonaByLevel = (props: NavigationScreenProps<{}>) => <PersonaList
    {...{
        ...props,
        renderItem,
        renderHeader: () => void 0,
        allItems: allPersona,
        sortBy: "level"
    }}
/>;

export const PersonaByName = (props: NavigationScreenProps<{}>) => <PersonaList
    {...{
        ...props,
        renderItem,
        renderHeader: () => void 0,
        allItems: allPersona,
        sortBy: "name"
    }}
/>;

export const PersonaByArcana = (props: NavigationScreenProps<{}>) => <PersonaList
    {...{
        ...props,
        renderItem,
        renderHeader,
        allItems: allPersona,
        sortBy: "level",
        groupBy: "arcana"
    }}
/>;