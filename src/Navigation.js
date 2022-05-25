/* eslint-disable prettier/prettier */
import { NavigationActions } from "react-navigation";

let _navigator

function setTopLevelNavigator(r) {
    console.log('r',r)
    _navigator = r
}

function navigate(routeName, params){
    _navigator.dispatch(
        NavigationActions.navigate({
            routeName,
            params
        })
    )
}

function back() {
    _navigator.dispatch(NavigationActions.back())
}

export default {
    navigate,
    setTopLevelNavigator,
    back
}