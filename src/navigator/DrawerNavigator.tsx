import { createDrawerNavigator } from '@react-navigation/drawer';
import { SettingsScreens } from '../screens/SettingsScreens';
import { StackNavigator } from './StackNavigator';

const Drawer = createDrawerNavigator();

export const DrawerNavigator =()=> {
    return (
        <Drawer.Navigator>
            <Drawer.Screen name="StackNavigator" options={{title:'Home'}} component={StackNavigator} />
            <Drawer.Screen name="Settings" options={{title:'Configuración'}} component={SettingsScreens} />
        </Drawer.Navigator>
    );
}