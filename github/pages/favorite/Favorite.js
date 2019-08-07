/**
 * Created by shaolin on 2019/7/31.
 * Description：
 */

import React, {Component} from 'react';
import {
    View,
    Text,
    StyleSheet,
    FlatList,
    DeviceEventEmitter
} from 'react-native';

import FavoriteService from '../../util/FavoriteService'
import Cell from '../popular/PopularCell'
import {TYPE} from '../../net/RepositoryService'

const favoriteService = new FavoriteService(TYPE.Popular);

export default class Favorite extends Component {
    // 属性类型
    static propTypes = {
        // data:PropTypes.object.isRequired,
    };

    // 默认属性值
    static defaultProps = {
        // 
    };

    constructor(props) {
        super(props);
        this.state = {
            dataSource:[],
        }
    }

    componentDidMount() {
        this.loadData();
        this.listener = DeviceEventEmitter.addListener('FAVORITE_CHANGED_POPULAR',this.loadData);
    }

    componentWillUnmount() {
        this.listener && this.listener.remove();
    }

    loadData = () => {
        favoriteService.getAllItems()
            .then(result => {
                console.log(result);
                const dataSource = result.map(item => {
                    return {
                        ...item,
                        isFavorite:true
                    }
                });
                this.setState({
                    dataSource:dataSource
                })
            })
            .catch(error => {
                console.log(error);
            })
    }

    handleFavorite = (item,isFavorite) => {
        const callback = () =>  {
            this.loadData();
        }
        favoriteService.removeFavoriteItem(item.id.toString(),callback)
    }

    renderRow = ({item}) => {
        return <Cell data={item} onFavorite={this.handleFavorite}/>
    }

    _keyExtractor = (item,index) => item.id + '';

    render() {
        return (
            <View style={styles.container}>
                <FlatList
                    data = {this.state.dataSource}
                    renderItem={this.renderRow}
                    keyExtractor = {this._keyExtractor}
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
