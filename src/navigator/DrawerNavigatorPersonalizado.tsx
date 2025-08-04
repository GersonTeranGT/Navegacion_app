import { createDrawerNavigator, DrawerContentComponentProps, DrawerContentScrollView } from '@react-navigation/drawer';
import { SettingsScreens } from '../screens/SettingsScreens';
import { StackNavigator } from './StackNavigator';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { styles } from '../theme/appTheme';

const Drawer = createDrawerNavigator();

export const DrawerNavigatorPersonalizado = () => {
    return (
        <Drawer.Navigator
            drawerContent={(props) => <MenuLateral {...props} />}>
            <Drawer.Screen name="StackNavigator" options={{ title: 'Home' }} component={StackNavigator} />
            <Drawer.Screen name="Settings" options={{ title: 'Configuración' }} component={SettingsScreens} />
        </Drawer.Navigator>
    );
}

const MenuLateral = ({navigation}: DrawerContentComponentProps) => {
    return (
        <DrawerContentScrollView>
            <View style={styles.containerImage}>
                <Image
                    style={styles.avatar}
                    source={{
                        uri: 'https://cdn-icons-png.flaticon.com/512/456/456212.png'
                    }} />
                    <View style={styles.containerMenu}>
                        <TouchableOpacity style={styles.menuButton}>
                            <Text style={styles.menuText} onPress={()=> navigation.navigate('StackNavigator')}>Navegación</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.menuButton} onPress={()=> navigation.navigate('Settings')}>
                            <Text style={styles.menuText}>Ajustes</Text>
                        </TouchableOpacity>
                    </View>
            </View>
        </DrawerContentScrollView>
    )
}