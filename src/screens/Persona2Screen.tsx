import { StackScreenProps } from '@react-navigation/stack';
import React from 'react'
import { Text, View } from 'react-native';
import { styles } from '../theme/appTheme';
import { RootStackParams } from '../navigator/StackNavigator';

type Props = StackScreenProps<RootStackParams, 'Persona2'>;

//INTERFACE PARA EL OBJETO PERSONA (parámetro)
// interface RouteParams {
//     id: number;
//     nombre: string;
//     apellido: string;
// }
export const Persona2Screen = ({ route }: Props) => {
    //const params = route.params as RouteParams;
    const params = route.params;
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Persona 2 Screen</Text>
            <Text style={styles.texto}>
                {params.id}, {params.nombre}, {params.apellido}
            </Text>
        </View>
    )
}
