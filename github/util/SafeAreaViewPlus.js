/**
 * Created by shaolin on 2019/7/30.
 * Description：
 */

'use strict';

import React, {Component} from 'react';
import {
    View,
    Text,
    StyleSheet,
    ViewPropTypes,
    SafeAreaView,
    DeviceInfo
} from 'react-native';

import {PropTypes} from 'prop-types';

export default class SafeAreaViewPlus extends Component {
    // 属性类型
    static propTypes = {
        ...ViewPropTypes,
        topColor:PropTypes.string,
        bottomColor:PropTypes.string,
        enablePlus:PropTypes.boolean,
        topInset:PropTypes.boolean,
        bottomInset:PropTypes.boolean,
    };

    // 默认属性值
    static defaultProps = {
        topColor:'#transparent',
        bottomColor:'#f8f8f8',
        enablePlus:true,
        topInset:false,
        bottomInset:true,
    };

    constructor(props) {
        super(props);

    }

    genSafeAreaView(){
        return <SafeAreaView style={[styles.container,this.props.style]} {...this.props}>
            {this.props.children}
        </SafeAreaView>
    }

    getTopArea(topColor,topInset){
        return !DeviceInfo.isIPhoneX_deprecated||topInset?null:
            <View style={[styles.topArea,{backgroundColor:topColor}]}>

        </View>
    }

    getBottomArea(bottomColor,bottomInset){
        return !DeviceInfo.isIPhoneX_deprecated||bottomInset?null:
            <View style={[styles.bottomArea,{backgroundColor:bottomColor}]}>

            </View>
    }

    genSafeAreaViewPlus() {
        const {children,topColor,bottomColor,topInset,bottomInset} = this.props;
        return  <View style={[styles.container,this.props.style]}>
            {this.getTopArea(topColor,topInset)}
            {children}
            {this.getBottomArea(bottomColor,bottomInset)}
        </View>
    }

    render() {
        const {enablePlus} = this.props;
        return enablePlus?this.genSafeAreaViewPlus():this.genSafeAreaView();
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    topArea:{
        height:44,
    },
    bottomArea:{
        height:34,
    }
});
