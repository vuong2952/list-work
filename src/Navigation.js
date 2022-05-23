/* eslint-disable prettier/prettier */
import { NavigationActions } from "react-navigation";

let _navigator

function setTopLevelNavigator(r) {
    _navigator = r
}

function navigate(routeName, params){
    _navigator.dispatch(
        NavigationActions.NAVIGATE({
            routeName,
            params
        })
    )
}

function back() {
    _navigator.dispatch(NavigationActions.BACK())
}

export default {
    navigate,
    setTopLevelNavigator,
    back
}