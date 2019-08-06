/**
 * Created by shaolin on 2019/8/1.
 * Description：
 */

import React, {Component} from 'react';
import {
    View,
    Text,
    StyleSheet,
} from 'react-native';

import AsyncStorage from '@react-native-community/async-storage';
import {Palette} from './Theme'

const THEME_TAG = 'theme_key';

export default class ThemeService extends Component {
    getTheme = () => {
        return new Promise((resolve, reject) => {
            AsyncStorage.getItem(THEME_TAG, (error, result) => {
                if (error) {
                    reject(error)
                }
                if (!result) {
                    this.saveTheme(Palette.Blue["400"]);
                    result = Palette.Blue["400"];
                }
                resolve(result);
            })
        })
    };

    saveTheme = (theme, callback) => {
        AsyncStorage.setItem(THEME_TAG, theme, (err) => {
            console.log(THEME_TAG,theme);
            if (!err) {
                callback && callback();
            }else {
                console.log(err);
            }
        })
    }
}

