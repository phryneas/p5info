import * as React from 'react';
import {Button, Text, ListView, ListViewDataSource} from 'react-native';

import {NavigationScreenProps} from "react-navigation";
import {PersonaDetails} from "./PersonaDetails";
import {allPersona, StringMap, PersonaData} from "../Data";

interface Props {
    sortBy: keyof PersonaData;
    groupBy?: keyof PersonaData;
}

interface State {
    dataSource: ListViewDataSource;
}

export class PersonaList extends React.Component<Props & NavigationScreenProps<{}>, State> {
    static navigationOptions = {
        title: 'Persona List',
    };

    static defaultProps: Props = { sortBy: 'level' };

    constructor(props: Props & NavigationScreenProps<{}>) {
        super(props);
        const ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2,
            sectionHeaderHasChanged: (r1, r2) => r1 !== r2
        });

        const {groupBy, sortBy} : Props = this.props;
        const sortFunc = (a: PersonaData, b: PersonaData) => (a[sortBy] || '') > (b[sortBy] || '') ? 1 : -1;

        if (groupBy) {
            let data: StringMap<PersonaData[]> = {};
            for (let persona of Object.values(allPersona)) {
                (data[persona[groupBy]] || (data[persona[groupBy]] = [])).push(persona);
            }
            for (let personas of Object.values(data)) {
                personas.sort(sortFunc);
            }
            this.state = {dataSource: ds.cloneWithRowsAndSections(data)};
        } else {
            let data = Object.values(allPersona);
            data.sort(sortFunc);
            this.state = {dataSource: ds.cloneWithRows(data)};
        }
    }


    render() {
        const {groupBy, navigation} = this.props;

        return (
            <ListView
                dataSource={this.state.dataSource}
                renderSectionHeader={groupBy ? (sectionData, name: string) => <Text>{name}</Text> : void 0}
                renderRow={(persona: PersonaData) =>
                    <Button
                        title={persona.name || 'empty'}
                        onPress={() => navigation.navigate('PersonaDetails', {persona})}
                    />
                }
            />
        );

        /*
         return (
         <ScrollView>
         <View style={{flex: 1, flexDirection: 'column', width: '100%'}}>
         {Object.keys(personaMap).map((personaName: string) => <View key={personaName}>
         <Button title={personaName}
         onPress={() => navigation.navigate('PersonaDetails', {persona: PersonaDetails.getPersona(personaName)})}/>
         </View>)}
         </View >
         </ScrollView>
         );
         */
    }
}