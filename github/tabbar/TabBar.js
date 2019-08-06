/**
 * Created by shaolin on 2019/8/5.
 * Description：
 */

import React,{Component} from 'react';
import {Text, View, Image,StyleSheet} from 'react-native';
import {createBottomTabNavigator,createStackNavigator,createAppContainer} from 'react-navigation';

import Favorite from '../pages/favorite/Favorite'
import Popular from '../pages/popular/Popular';
import My from '../pages/my/My'
import Trending from '../pages/trending/Trending'
import Web from '../pages/webview/DetailPage'
import Theme from '../pages/my/Theme'

/*页面设置*/
const pageConfig = (pageName,theme) => {
    return {
        title: pageName,
        headerStyle: {
            backgroundColor: theme,
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWeight: 'bold',
        },
    };
}

const PopularNav = createStackNavigator({
    Popular:{
        screen:Popular,
        navigationOptions:({ navigation, screenProps}) => {
           return pageConfig('Popular',screenProps.theme);
        }
    },
    Web:{
        screen:Web,
        navigationOptions:({ navigation, screenProps}) => {
            return pageConfig(navigation.getParam('title'),screenProps.theme);
        }
    }
});

PopularNav.navigationOptions = ({navigation}) => {
    let tabBarVisible = true;
    if (navigation.state.index > 0) {
        tabBarVisible = false;
    }
    return {
        tabBarVisible
    };
}

const TrendingNav = createStackNavigator({
    Trending:{
        screen:Trending,
        navigationOptions:({ navigation, screenProps}) => {
            return pageConfig('Trending',screenProps.theme);
        }
    },
});

const FavoriteNav = createStackNavigator({
    Favorite:{
        screen:Favorite,
        navigationOptions:({ navigation, screenProps}) => {
            return pageConfig('Favorite',screenProps.theme);
        }
    },
});

const MyNav = createStackNavigator({
    My:{
        screen:My,
        navigationOptions:({ navigation, screenProps}) => {
            return pageConfig('My',screenProps.theme);
        }
    },
    Theme:{
        screen:Theme,
        navigationOptions:({ navigation, screenProps}) => {
            return pageConfig('Theme',screenProps.theme);
        }
    },
    Web:{
        screen:Web,
        navigationOptions:({ navigation, screenProps}) => {
            return pageConfig(navigation.getParam('title'),screenProps.theme);
        }
    }
});

MyNav.navigationOptions = ({navigation}) => {
    let tabBarVisible = true;
    if (navigation.state.index > 0) {
        tabBarVisible = false;
    }
    return {
        tabBarVisible
    };
}

const tabbar = createBottomTabNavigator(
    {
        // tabbaritem 名字
        Popular:{
            screen:PopularNav,
            navigationOptions:({navigation,screenProps}) => ({
                tabBarIcon:({focused,tintColor}) => {
                    let themeColor = screenProps.theme;
                    let bgColor = focused?themeColor:null;
                    return(
                        <Image source={require('../res/img/ic_popular.png')} style={[styles.img,{tintColor:bgColor}]}></Image>
                    )
                },
                tabBarLabel: ({ focused, tintColor }) => {
                    return (
                        <Text style={{ color: focused ? screenProps.theme : tintColor, textAlign: 'center' ,fontSize:12 }}>
                            Popular
                        </Text>
                    )
                }
            })
        },
        Trending:{
            screen:TrendingNav,
            navigationOptions:({navigation,screenProps}) => ({
                tabBarIcon:({focused,tintColor}) => {
                    let themeColor = screenProps.theme;
                    let bgColor = focused?themeColor:null;
                    return(
                        <Image source={require('../res/img/ic_trending.png')} style={[styles.img,{tintColor:bgColor}]}></Image>
                    )
                },
                tabBarLabel: ({ focused, tintColor }) => {
                    return (
                        <Text style={{ color: focused ? screenProps.theme : tintColor, textAlign: 'center' ,fontSize:12 }}>
                            Popular
                        </Text>
                    )
                }
            })
        },
        Favorite:{
            screen:FavoriteNav,
            navigationOptions:({navigation,screenProps}) => ({
                tabBarIcon:({focused,tintColor}) => {
                    let themeColor = screenProps.theme;
                    let bgColor = focused?themeColor:null;
                    return(
                        <Image source={require('../res/img/ic_favorite.png')} style={[styles.img,{tintColor:bgColor}]}></Image>
                    )
                },
                tabBarLabel: ({ focused, tintColor }) => {
                    return (
                        <Text style={{ color: focused ? screenProps.theme : tintColor, textAlign: 'center' ,fontSize:12 }}>
                            Popular
                        </Text>
                    )
                }
            })
        },
        My: {
            screen: MyNav,
            navigationOptions: ({navigation, screenProps}) => ({
                tabBarIcon: ({focused, tintColor}) => {
                    let themeColor = screenProps.theme;
                    let bgColor = focused ? themeColor : null;
                    return (
                        <Image source={require('../res/img/ic_my.png')}
                               style={[styles.img, {tintColor: bgColor}]}></Image>
                    )
                },
                tabBarLabel: ({ focused, tintColor }) => {
                    return (
                        <Text style={{ color: focused ? screenProps.theme : tintColor, textAlign: 'center' ,fontSize:12 }}>
                            Popular
                        </Text>
                    )
                }
            })
        }
    },
    {
        tabBarOptions:{
            inactiveTintColor:'gray',
            showIcon:true,
            showLabel:true,
            style:{
                backgroundColor:'#fff',
                paddingBottom:1,
                borderTopWidth:1,
                paddingTop:1,
                borderTopColor:'gray'
            },
            indicatorStyle: {height: 0},
        },
        // tab bar的位置, 可选值： 'top' or 'bottom'
        tabBarPosition: 'bottom',
        // 是否允许滑动切换tab页
        swipeEnabled: true,
        // 是否在切换tab页时使用动画
        animationEnabled: false,
        // 是否懒加载
        lazy: true,
        // 返回按钮是否会导致tab切换到初始tab页？ 如果是，则设置为initialRoute，否则为none。 缺省为initialRoute。
        backBehavior: 'none',
    }
);

const styles = StyleSheet.create({
    img:{
        width:22,
        height:22,
    }
});

export default createAppContainer(tabbar);

