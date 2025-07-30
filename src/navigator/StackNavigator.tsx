import { createStackNavigator } from '@react-navigation/stack';
import { Pantalla1Screen } from '../screens/Pantalla1Screen';
import { Pantalla2Screen } from '../screens/Pantalla2Screen';
import { Pantalla3Screen } from '../screens/Pantalla3Screen';
import { PersonaScreen } from '../screens/PersonaScreen';
import { Persona2Screen } from '../screens/Persona2Screen';


//DEFINIR LOS SCREENS PARTE DE LA NAVEGACION Y PARAMETROS
//NAVEGACION POR PROPIEDADES DEL STACKNAVIGATOR
//lo utilizamos cuando ya conocemos la estructura y o este sefriendo cambios
//solo por propiedades de navegacion si es por hook de navegacion NO
export type RootStackParams={
    Pantalla1: undefined,
    Pantalla2: undefined,
    Pantalla3: undefined,
    Persona: {id: number, nombre: string, apellido:string},
    Persona2: {id: number, nombre: string, apellido:string}
}

const Stack = createStackNavigator<RootStackParams>();

export const StackNavigator = () => {
    return (
        <Stack.Navigator
        //initialRouteName='Pantalla2'
        screenOptions={{
            
            cardStyle:{
                backgroundColor:'white',
                
            },
            //headerShown:false
            headerStyle:{
                elevation:5,
                backgroundColor:'#008cffff'
            }
        }}>
            {/* option permite agregar estilos solo a un screen */}
            <Stack.Screen name="Pantalla1" options={{title:'Home'}} component={Pantalla1Screen} />
            <Stack.Screen name="Pantalla2" options={{animation:'slide_from_right'}} component={Pantalla2Screen} />
            <Stack.Screen name="Pantalla3" options={{headerShown: false,animation:'fade_from_bottom'}} component={Pantalla3Screen} />
            <Stack.Screen name="Persona" options={{animation:'slide_from_right'}} component={PersonaScreen} />
            <Stack.Screen name="Persona2" options={{animation:'slide_from_right'}} component={Persona2Screen} />
        </Stack.Navigator>
    );
}