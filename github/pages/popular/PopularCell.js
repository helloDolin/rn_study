
/**
 * Created by shaolin on 2019/8/1.
 * Description：
 */

import React, { PureComponent } from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image,
    TouchableOpacity
} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons'
import NavigationService from '../../tabbar/NavigationService'
import {ThemeContext} from '../../theme/ThemeContext'

export default class PopularCell extends PureComponent {
    static contextType = ThemeContext;

    goDetail = () => {
        const {data} = this.props;
        NavigationService.navigate('Web',{
           url:data.html_url,
           title:data.full_name
        });
    }

    handleFavorite = () => {
        const {data,onFavorite} = this.props;
        onFavorite(data,!data.isFavorite);
    }

    render(){
        const {data} = this.props;
        const {theme} = this.context;
        return (
            <View style={[styles.container,{borderColor:theme}]}>
                <Text style={styles.title}>{data.full_name}</Text>
                <TouchableOpacity onPress={this.goDetail}>
                    <Text style={styles.description}>{data.description}</Text>
                </TouchableOpacity>
                <View style={styles.row}>
                    <View style={styles.row}>
                        <Text>Author:</Text>
                        <Image
                            style={styles.avatar}
                            source={{uri:data.owner && data.owner.avatar_url}}
                        />
                    </View>
                    <View style={styles.row}>
                        <Text>Star:</Text>
                        <Text>{data.stargazers_count}</Text>
                    </View>
                    <TouchableOpacity onPress={this.handleFavorite}>
                        <Icon name='grade' size={25} color={data.isFavorite ? theme : '#E5E5E5'}/>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'#fff',
        padding:10,
        marginHorizontal:5,
        marginVertical:3,
        borderColor:'#ddd',
        borderWidth:0.5,
        borderRadius:2,
        shadowColor:'#dddddd',
        shadowOffset:{width:0.5,height:0.5},
        shadowOpacity:0.4,
        shadowRadius:1,
        elevation:2
    },
    title:{
        fontSize:16,
        marginBottom:2,
        color:'#212121',
    },
    row:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
    },
    avatar:{
        width:22,
        height:22,
        borderRadius:11,
    },
    description:{
        fontSize:14,
        marginBottom:2,
        color:'#757575'
    }
});