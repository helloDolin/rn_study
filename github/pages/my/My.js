/**
 * Created by shaolin on 2019/7/31.
 * Description：
 */

import React, {Component} from 'react';
import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    TouchableHighlight,
    DeviceEventEmitter
} from 'react-native';
import {PropTypes} from 'prop-types';
import Icon from 'react-native-vector-icons/MaterialIcons'

class MyCell extends PureComponent {
    constructor(props){
        super(props);
    }

    onClick = (pageName) => {
        console.log(pageName)
    }

    render(){
        return <View style={{height:44,flex:1, flexDirection:'row'}} onPress={this.onclick}>
            <Text style={{paddingLeft:10}}>Theme</Text>
            <Icon name='right' style={{paddingRight:10}}/>
        </View>
    }
}

export default class My extends Component {
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
        return (
            <View style={styles.container}>
                <ScrollView>
                    <MyCell/>
                    <MyCell/>
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
