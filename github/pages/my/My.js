/**
 * Created by shaolin on 2019/7/31.
 * Description：
 */

import React, {PureComponent} from 'react';
import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    TouchableHighlight,
    DeviceEventEmitter,
    Image
} from 'react-native';
import {PropTypes} from 'prop-types';
import Icon from 'react-native-vector-icons/FontAwesome5'
import NavigationService from '../../tabbar/NavigationService'

const margin_left_right_num = 15;

class MyCell extends PureComponent {
    static defaultProps = {
        // pageName:PropTypes.string,
    };

    constructor(props){
        super(props);
    }

    onClick = () => {
        const pageName = this.props.pageName;
        if (pageName === 'Theme') {
            NavigationService.navigate('Theme',{
                title:{pageName}
            });
        }
        if (pageName === '我的GitHub') {
            NavigationService.navigate('Web',{
                url:'https://github.com/liaoshaolim/rn_study',
                title:pageName
            });
        }
    }

    render(){
        let iconColor = Math.random() > 0.5 ? 'red' : 'green';
        let cellStyle = {height:66,flex:1, flexDirection:'row',alignItems:'center',borderBottomWidth:0.5,borderColor:'#e8e8e8',justifyContent:'space-between'}
        return <TouchableHighlight underlayColor='red' onPress={this.onClick}>
            <View style={cellStyle} onPress={this.onclick}>
                <View style={{flexDirection:'row',alignItems:'center'}}>
                    <Icon name= {this.props.iconName} style={{marginLeft:margin_left_right_num,color:iconColor}} size={18}/>
                    <Text style={{marginLeft:8}}>{this.props.pageName}</Text>
                </View>
                <Icon name='angle-right' style={{marginRight:margin_left_right_num}}/>
            </View>
        </TouchableHighlight>
    }
}

export default class My extends PureComponent {
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

    render() {
        let headerView = <View style={{flex:1,flexDirection:'row'}}>
            <Image style={{width:80,height:80,borderRadius:10,marginLeft:margin_left_right_num,marginTop:10,marginBottom:10}} source={require('../../res/img/zhizunbao.jpeg')}></Image>
            <View style={{margin:10,justifyContent:'space-between'}}>
                <Text style={{fontWeight:'bold',fontSize:24}}>Dolin</Text>
                <Text>hahaha...</Text>
            </View>

        </View>
        return (
            <View style={styles.container}>
                <ScrollView>
                    {headerView}

                    <MyCell pageName='我的GitHub' iconName='github'/>
                    <MyCell pageName='QQ' iconName='qq'/>
                    <MyCell pageName='支付宝' iconName='alipay'/>
                    <MyCell pageName='微信' iconName='weixin'/>
                    <MyCell pageName='twitter' iconName='twitter'/>
                    <MyCell pageName='BTC' iconName='btc'/>
                    <MyCell pageName='ETH' iconName='ethereum'/>
                    <MyCell pageName='Theme' iconName='meh'/>

                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
