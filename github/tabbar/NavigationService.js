import { NavigationActions } from 'react-navigation';
let _navigator;

function setTopLevelNavigator(navigatorRef) {
    _navigator = navigatorRef;
}

function navigate(routeName, params) {
    console.log(routeName,params);
    _navigator.dispatch(
        NavigationActions.navigate({
            routeName,
            params,
        })
    );
}

export default {
    navigate,
    setTopLevelNavigator,
};