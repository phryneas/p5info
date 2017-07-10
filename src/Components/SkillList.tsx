import * as React from 'react';
import {Button, Text} from 'react-native';

import {NavigationScreenProps} from "react-navigation";
import {allSkills, SkillData} from "../Data";
import {GenericList} from "./GenericList";


const renderItem = function (this: GenericList<SkillData>, skill: SkillData) {
    return <Button
        title={skill.name || 'empty'}
        onPress={() => this.props.navigation.navigate('SkillDetails', {skill})}
    />;
};
const renderHeader = (sectionData: any, name: string) => <Text>{name}</Text>;


class SkillList extends GenericList<SkillData> {
}


export const SkillsByName = (props: NavigationScreenProps<{}>) => <SkillList
    {...{
        ...props,
        renderItem,
        renderHeader: () => void 0,
        allItems: allSkills,
        sortBy: "name"
    }}
/>;

export const SkillsByElement = (props: NavigationScreenProps<{}>) => <SkillList
    {...{
        ...props,
        renderItem,
        renderHeader,
        allItems: allSkills,
        sortBy: "name",
        groupBy: "element"
    }}
/>;