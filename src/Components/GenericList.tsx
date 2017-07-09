import * as React from 'react';
import {ListView, ListViewDataSource} from 'react-native';

import {NavigationScreenProps} from "react-navigation";
import {allPersona, StringMap, PersonaData} from "../Data";

interface Props<T> {
    sortBy: keyof T;
    groupBy?: keyof T;
    renderItem: (item: T) => React.ReactElement<any>;
    renderHeader: (items: T[], groupName: string) => (React.ReactElement<any> | undefined);
    allItems: StringMap<T>;
}

interface State {
    dataSource: ListViewDataSource;
}

export class GenericList<T> extends React.Component<Props<T> & NavigationScreenProps<{}>, State> {
    constructor(props: Props<T> & NavigationScreenProps<{}>) {
        super(props);
        const ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2,
            sectionHeaderHasChanged: (r1, r2) => r1 !== r2
        });

        const {groupBy, sortBy, allItems} : Props<T> = this.props;
        const sortFunc = (a: PersonaData, b: PersonaData) => (a[sortBy] || '') > (b[sortBy] || '') ? 1 : -1;

        if (groupBy) {
            let data: StringMap<T[]> = {};
            for (let item of Object.values(allItems)) {
                console.log(item, groupBy);
                (data[String(item[groupBy])] || (data[String(item[groupBy])] = [])).push(item);
            }
            for (let items of Object.values(data)) {
                items.sort(sortFunc);
            }
            this.state = {dataSource: ds.cloneWithRowsAndSections(data)};
        } else {
            let data = Object.values(allItems);
            data.sort(sortFunc);
            this.state = {dataSource: ds.cloneWithRows(data)};
        }
    }


    render() {
        const {renderItem, renderHeader} = this.props;

        return (
            <ListView
                dataSource={this.state.dataSource}
                renderSectionHeader={renderHeader.bind(this)}
                renderRow={renderItem.bind(this)}
            />
        );
    }
}