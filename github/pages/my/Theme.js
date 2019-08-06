/**
 * Created by shaolin on 2019/8/5.
 * Description：
 */

import React, {PureComponent} from 'react';
import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    TouchableHighlight,
    DeviceEventEmitter
} from 'react-native';
import {PropTypes} from 'prop-types';
import {ThemeColors} from '../../theme/Theme'
import ThemeService from '../../theme/ThemeService'
import NavigationService from '../../tabbar/NavigationService'

const themeService = new ThemeService();

export default class Theme extends PureComponent {
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

    }

    itemClick(key){
        const callback = () => {
            DeviceEventEmitter.emit('THEME_CHANGED');
        }
        let color = ThemeColors[key];
        themeService.saveTheme(color,callback);
        const {navigation} = this.props;
        navigation.goBack();
    }

    getThemeItem(themeKey) {
        return <TouchableHighlight style={{flex:1}} underlayColor='white' onPress={()=>{this.itemClick(themeKey)}}>
            <View style={[{backgroundColor:ThemeColors[themeKey]},styles.themeItem]}>
                <Text style={{color:'white'}}>{themeKey}</Text>
            </View>
        </TouchableHighlight>
    }

    renderThemeItems(){
        var views = [];
        for (let i = 0,keys = Object.keys(ThemeColors),l = keys.length;i < l;i+=3) {
            var key1 = keys[i];
            var key2 = keys[i + 1];
            var key3 = keys[i + 2];
            views.push(<View key={i} style={{flexDirection:'row'}}>
                {this.getThemeItem(key1)}
                {this.getThemeItem(key2)}
                {this.getThemeItem(key3)}
            </View>)
        }
        return views;
    }

    render() {
        return (
            <View style={styles.container}>
                <ScrollView>
                    {this.renderThemeItems()}
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    themeItem:{
        flex:1,
        height:120,
        justifyContent:'center',
        alignItems:'center',
        margin:3
    }
});
