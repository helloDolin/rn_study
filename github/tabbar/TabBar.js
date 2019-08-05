/**
 * Created by shaolin on 2019/8/5.
 * Description：
 */

import React,{Component} from 'react';
import {Text, View, Image,StyleSheet} from 'react-native';
import {createBottomTabNavigator,createAppContainer,createStackNavigator} from 'react-navigation';

import Favorite from '../pages/favorite/Favorite'
import Popular from '../pages/popular/Popular';
import My from '../pages/my/My'
import Trending from '../pages/trending/Trending'
import Web from '../pages/webview/DetailPage'

const PopularNav = createStackNavigator({
    Popular:{
        screen:Popular,
        navigationOptions:{
            headerTitle:'Popular',
            headerBackTitle:null,
            headerTitleStyle:{
                flex:1,
                textAlign:'center',
                fontWeight:'bold',
                fontSize:15,
                color:'red'
            },
            headerStyle:{
                // backgroundColor:{}
            }
        }
    },
    Web:{
        screen:Web,
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
        navigationOptions:{
            headerTitle:'Trending',
            headerStyle:{

            },
        }
    },
});

const FavoriteNav = createStackNavigator({
    Favorite:{
        screen:Favorite,
        navigationOptions:{
            headerTitle:'Favorite'
        }
    },
});

const MyNav = createStackNavigator({
    My:{
        screen:My,
        navigationOptions:{
            headerTitle:'My'
        }
    },
});

const tabbar = createBottomTabNavigator(
    {
        // tabbaritem 名字
        Popular:{
            screen:PopularNav,
            navigationOptions:{
                tabBarIcon:({focused,tintColor}) => {
                    if (focused){
                        return(
                            <Image source={require('../res/img/ic_popular.png')} style={[styles.img,backgroundColor={tintColor}]}></Image>
                        )
                    }
                    else {
                        return(
                            <Image source={require('../res/img/ic_popular.png')} style={styles.img}></Image>
                        )
                    }
                }
            }
        },
        Trending:{
            screen:TrendingNav,
            navigationOptions:{
                tabBarIcon:({focused,tintColor}) => {
                    if (focused) {
                        return(
                            <Image source={require('../res/img/ic_trending.png')} style={[styles.img,backgroundColor={tintColor}]}/>
                        )
                    }
                    else {
                        return(
                            <Image source={require('../res/img/ic_trending.png')} style={[styles.img]}/>
                        )
                    }
                }
            }
        },
        Favorite:{
            screen:FavoriteNav,
            navigationOptions:{
                tabBarIcon:({focused,tintColor}) => {
                    if (focused) {
                        return(
                            <Image source={require('../res/img/ic_favorite.png')} style={[styles.img,backgroundColor={tintColor}]}/>
                        )
                    }
                    else {
                        return(
                            <Image source={require('../res/img/ic_favorite.png')} style={[styles.img]}/>
                        )
                    }
                }
            }
        },
        My:{
            screen:MyNav,
            navigationOptions:{
                tabBarIcon:({focused,tintColor}) => {
                    if (focused) {
                        return(
                            <Image source={require('../res/img/ic_my.png')} style={[styles.img,backgroundColor={tintColor}]}/>
                        )
                    }
                    else {
                        return(
                            <Image source={require('../res/img/ic_my.png')} style={[styles.img]}/>
                        )
                    }
                }
            }
        }
    },
    {
        tabBarOptions:{
            activeTintColor:'red',
            inactiveTintColor:'#000',
            showIcon:true,
            showLabel:true,
            style:{
                backgroundColor:'#fff',
                paddingBottom:1,
                borderTopWidth:1,
                paddingTop:1,
                borderTopColor:'red'
            },
            labelStyle: {
                fontSize: 11,
                margin: 1
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
        height:22
    }
});

export default createAppContainer(tabbar);

