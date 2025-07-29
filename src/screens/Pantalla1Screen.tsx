import { StackScreenProps } from '@react-navigation/stack'
import React from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'
import { styles } from '../theme/appTheme';

//NAVEGACION POR PROPIEDADES DE STACKNAVIGATOR

//INTERFACE PARA LAS PROPIEDADES DE NAVEGACION
interface Props extends StackScreenProps<any, any> { };

export const Pantalla1Screen = ({ navigation }: Props) => {
    //desestructuracion de navigation
    //Tipo any por el momento, Propiedades como valores
    //console.log(props.navigation)

    return (
        <View style={styles.container}>
            <Text>Pantalla1 Screen</Text>
            <Button 
                title='Ir pantalla 2'
                onPress={() => navigation.navigate('Pantalla2')}/>
        </View>
    )
}


