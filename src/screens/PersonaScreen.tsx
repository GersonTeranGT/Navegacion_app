import React from 'react'
import { Text, View } from 'react-native'
import { styles } from '../theme/appTheme';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParams } from '../navigator/StackNavigator';

//interface para los props
type Props = StackScreenProps<RootStackParams, 'Persona'>;

//INTERFACE PARA EL OBJETO PERSONA (parámetro)
// interface RouteParams {
//     id: number;
//     nombre: string;
//     apellido: string;
// }

export const PersonaScreen = ({ route }: Props) => {
    //console.log(props);
    //const params = route.params as RouteParams;
    const params = route.params;
    //console.log(params)
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Persona Screen</Text>
            <Text style={styles.texto}>
                {params.id}, {params.nombre}, {params.apellido}
            </Text>
        </View>
    )
}
