/**
 * Created by shaolin on 2019/8/6.
 * Description：
 */

import React, {PureComponent} from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';

import {PropTypes} from 'prop-types';
import {ThemeContext} from '../../theme/ThemeContext'


export default class TrendingCell extends PureComponent {
    static contextType = ThemeContext;

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
        const {author,name,url,description,stars,builtBy} = this.props.data;
        const {theme} = this.context;
        return (
            <View style={[styles.container,{borderColor:theme}]}>
                <Text style={styles.title}>{author}/{name}</Text>
                <Text style={styles.description}>{description}</Text>
                <Text style={styles.stars}>{stars} stars</Text>
                <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
                    <Text>12312312</Text>
                    <Text>abcabc</Text>
                </View>
            </View>
        );
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
    description:{
        fontSize:14,
        marginBottom:2,
        color:'#757575'
    },
    builtBy:{

    },
    stars:{
        fontSize:12,
        marginBottom:2,
        color:'#757575'
    }
});
