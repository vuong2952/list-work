/* eslint-disable prettier/prettier */
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();
import ListWork from '../view/LoginView/ListWork';
import Profile from '../view/LoginView/Profile';
const Tabs = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name="ListWork" component={ListWork} />
            <Tab.Screen name="Profile" component={Profile} />
        </Tab.Navigator>
    );
}

export default Tabs;