/**
 * Created by shaolin on 2019/8/1.
 * Description：
 */

import React, {PureComponent} from 'react';
import {
    View,
    Text,
    StyleSheet,
    ActivityIndicator,
    StatusBar,
    Platform
} from 'react-native';
import {PropTypes} from 'prop-types';
import {WebView} from 'react-native-webview'

export default class DetailPage extends PureComponent {
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

    static navigationOptions = ({ navigation, screenProps}) => {
        return {
            title: navigation.getParam('title'),
        };
    };

    render() {
        const {navigation} = this.props;
        const url = navigation.getParam('url');
        return (
            <View style={styles.container}>
                <WebView
                    source = {{uri:url}}
                    style={{marginTop:0}}
                    startInLoadingState={true}
                    renderLoading={() => <ActivityIndicator/>}
                    onError={syntheticEvent => {
                        const { nativeEvent } = syntheticEvent;
                        console.warn('WebView error: ', nativeEvent);
                    }}
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
