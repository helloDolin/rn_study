/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {PureComponent} from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    DeviceEventEmitter,
} from 'react-native';

import TabBar from './tabbar/TabBar'
import NavigationService from './tabbar/NavigationService'
import {ThemeContext} from './theme/ThemeContext'
import ThemeService from './theme/ThemeService'

const themeService = new ThemeService();

class App extends PureComponent {
    constructor(props){
        super(props);
        this.state = {
            theme:null
        }
    }

    componentDidMount() {
        this.getTheme();
        this.listener = DeviceEventEmitter.addListener('THEME_CHANGED',this.getTheme);
    }

    componentWillUnmount(): void {
        this.listener && this.listener.remove();
    }

    getTheme = () => {
        themeService.getTheme()
            .then(data => {
                this.setState({
                    theme:data
                });
            })
    }

    render(){
        const {theme} = this.state;
        console.log(theme);
        return (
            <View style={styles.container}>
                <ThemeContext.Provider value={{theme}}>
                    <TabBar screenProps = {{theme}} ref = {navigtionRef => NavigationService.setTopLevelNavigator(navigtionRef)}/>
                </ThemeContext.Provider>
            </View>
        );
    }
};

const styles = StyleSheet.create({
    container:{
        flex:1,
    },
});

export default App;
