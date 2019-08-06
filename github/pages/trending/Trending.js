/**
 * Created by shaolin on 2019/7/31.
 * Description：
 */

import React, {Component} from 'react';
import {
    View,
    Text,
    StyleSheet,
    FlatList
} from 'react-native';

import RepositoryService,{TYPE} from '../../net/RepositoryService'
import Cell from './TrendingCell'

const trendingService = new RepositoryService(TYPE.Trending);

export default class Trending extends Component {
    constructor(props){
        super(props);
        this.state = {
            dataSource:[],
            loading:false
        }
    }

    componentDidMount() {
        this.loadData();
    }

    reloadList = () => {
        // const items = this.data;
        // const dataSource = items;
        this.setState({
            dataSource: this.data,
            loading:false
        });
    }

    loadData = () => {
        this.setState({loading:true});
        trendingService.fetchData('Objective-C','weekly')
            .then(result => {
                console.log(result);
                this.data = result;
                this.reloadList();
            })
            .catch(err => {
                console.warn(err);
            })
    }

    _keyExtractor = (item,index) => index + '';

    renderRow = ({item}) => {
        return <Cell data = {item}/>
    }

    render(){
        const {dataSource,loading} = this.state;
        return (
            <View style={styles.container}>
                <FlatList
                    refreshing={loading}
                    onRefresh={this.loadData}
                    keyExtractor={this._keyExtractor}
                    data={dataSource}
                    renderItem={this.renderRow}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
