import React from 'react'
import { Button, Text, View } from 'react-native'
import { styles } from '../theme/appTheme'
import { CommonActions, useNavigation } from '@react-navigation/native'

interface Persona {
    id: number,
    nombre: string,
    apellido: string
}

export const Pantalla2Screen = () => {
    //navegacion por HOOKS de react navigation
    const navigation = useNavigation();
    //CREAR UN OBJETO PERSONA
    const persona: Persona = {
        id: 3,
        nombre: 'Sergio',
        apellido: 'Moles'
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Pantalla2 Screen</Text>
            <Button title='Ir pantalla 3'
            //Capturar objeto para la pantalla 3
                onPress={() => navigation.dispatch(CommonActions.navigate({ name: 'Pantalla3' , params:persona}))} />
            <Button title='Ir a Home'
                onPress={() => navigation.dispatch(CommonActions.navigate({ name: 'Pantalla1' }))} />
        </View>
    )
}