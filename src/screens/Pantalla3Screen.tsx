import React from 'react'
import { Button, Text, View } from 'react-native'
import { styles } from '../theme/appTheme';
import { StackScreenProps } from '@react-navigation/stack'
import { RootStackParams } from '../navigator/StackNavigator';
import { useRoute } from '@react-navigation/native';
//NAVEGACION POR PROPIEDADES DE STACKNAVIGATOR (propiedades de navegacion)
type Props = StackScreenProps<RootStackParams, 'Pantalla3'>;

//INTERFACE PARA LOS OBJETOS DE NAVEGACION
interface RouteParams{
    id:number,
    nombre: string,
    apellido: string
}

export const Pantalla3Screen = ({ navigation }: Props) => {

    //HOOK useRoute para obtener los parametros de navegacion
    const route = useRoute();
    const params= route.params as RouteParams
    //console.log(params)
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Pantalla3 Screen</Text>
            <Text>{params.id}, {params.nombre}, {params.apellido}</Text>
            <Button title='Regresar'
                onPress={() => navigation.goBack()} />
            {/* Regresar a la pantalla de inicio - popToTop */}
            <Button title='Ir a home'
            onPress={()=> navigation.popToTop()}/>
        </View>
    )
}