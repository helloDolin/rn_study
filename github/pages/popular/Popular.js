/**
 * Created by shaolin on 2019/7/31.
 * Description：
 */

import React, {PureComponent} from 'react';
import {
    View,
    Text,
    StyleSheet,
    FlatList,
    Image,
    DeviceEventEmitter
} from 'react-native';
import {PropTypes} from 'prop-types';
import RepositoryService, {TYPE} from '../../net/RepositoryService';
import PopularCell from './PopularCell'
import FavoriteService from '../../util/FavoriteService'
import {checkFavorite} from '../../util/Utils'

const popularService = new RepositoryService(TYPE.Popular);
const favoriteService = new FavoriteService(TYPE.Popular);

export default class Popular extends PureComponent {
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
            loading:false
        }
    }

    componentDidMount() {
        this.loadData();
    }


    reloadList = () => {
        const items = this.data;
        const favoriteKeys = this.favoriteKeys;
        const dataSource = items.map(item => {
            return {
                ...item,
                isFavorite:checkFavorite(item,favoriteKeys)
            }
        });
        this.setState({
            dataSource,
            loading:false
        });
    };


    getFavoriteKeys = () => {
        favoriteService.getFavoriteKeys()
            .then(keys => {
                if(keys){
                    this.favoriteKeys = keys;
                }
                this.reloadList();
            })
            .catch(error => {
                console.warn(error);
                this.reloadList();
            })
    }

    loadData = () => {
        this.setState({loading:true});
        popularService.fetchData('Objective-C')
            .then(result => {
                console.log(result);
                this.data = result.items;
                this.getFavoriteKeys();
            })
            .catch(err => {
                console.warn(err);
            })
    }

    _keyExtractor = (item,index) => item.id + '';

    hanldeFavorite = (item,isFavorite) => {
        const callback = () =>  {
            console.log('FAVORITE_CHANGED_POPULAR');
            DeviceEventEmitter.emit('FAVORITE_CHANGED_POPULAR');
            this.loadData();
        }
        if (isFavorite) {
           favoriteService.saveFavoriteItem(item.id.toString(),JSON.stringify(item),callback())
        } else {
            favoriteService.removeFavoriteItem(item.id.toString(),callback());
        }
    }

    renderRow = ({item}) => {
        return <PopularCell data={item} onFavorite={this.hanldeFavorite}/>
    }

    render() {
        const {dataSource,loading} = this.state;
        const headerView = <View style={{alignItems:'center'}}>
            <Image source={require('../../res/img/hah.png')} />
        </View>
        return (
            <View style={styles.container}>
                <FlatList
                    refreshing={loading}
                    onRefresh={this.loadData}
                    keyExtractor={this._keyExtractor}
                    data={dataSource}
                    renderItem={this.renderRow}
                    ListHeaderComponent={headerView}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    loading: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
