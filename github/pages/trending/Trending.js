/**
 * Created by shaolin on 2019/7/31.
 * Description：
 */

import React, {Component} from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';
import {PropTypes} from 'prop-types';

export default class Trending extends Component {
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
                <Text>Trending</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
