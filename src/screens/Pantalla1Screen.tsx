import { StackScreenProps } from '@react-navigation/stack'
import React from 'react'
import { Button, ImageBackground, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { styles } from '../theme/appTheme';
import { RootStackParams } from '../navigator/StackNavigator';

//NAVEGACION POR PROPIEDADES DE STACKNAVIGATOR (propiedades de navegacion)

//INTERFACE PARA LAS PROPIEDADES DE NAVEGACION
type Props = StackScreenProps<RootStackParams, 'Pantalla1'>;

//INTERFACE DE TIPO PERSONA
interface Persona {
    id: number;
    nombre: string;
    apellido: string
}




export const Pantalla1Screen = ({ navigation }: Props) => {
    //desestructuracion de navigation
    //Tipo any por el momento, Propiedades como valores
    //console.log(props.navigation)
    
    //CREAR OBJETO DE INFORMACION
    const persona: Persona = {
        id: 1,
        nombre: 'Gerson',
        apellido: 'Teran'
    }
    const persona2: Persona = {
        id: 2,
        nombre: 'Kenneth',
        apellido: 'Gerardo'
    }
    return (
        <View style={styles.container}>
            
            <Text style={styles.title}>Pantalla1 Screen</Text>
            <Button
                title='Ir pantalla 2'
                onPress={() => navigation.navigate('Pantalla2')} />
            <Text style={styles.title}>Navegar con parámetros a otro screen</Text>
            <TouchableOpacity style={styles.buton}
                onPress={() => navigation.navigate('Persona', persona)}>
                <Text  style={styles.texto}>Gerson</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buton}
                onPress={() => navigation.navigate('Persona2', persona2)}>
                <Text  style={styles.texto}>Persona 2</Text>
            </TouchableOpacity>
            <TextInput
            // style={styles.input}
            // onChangeText={onChangeNumber}
            // value={number}
            placeholder="useless placeholder"
            keyboardType="numeric"
        />
        </View>
    )
}



