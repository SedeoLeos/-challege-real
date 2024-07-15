import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
interface InputComponentsProps {
    placeholder: string,
    suffix?: React.ReactNode,
    prefix?: React.ReactNode,
}
const OneTimePasswordComponent: React.FC<InputComponentsProps> = ({ placeholder, ...props }) => {
    return (
        <View style={styles.container}>
            <TextInput maxLength={1}  inputMode='numeric' focusable={true} style={[styles.input]} placeholder={placeholder} />
            <TextInput  maxLength={1} inputMode='numeric' focusable={true}  style={[styles.input]} placeholder={placeholder} />
            <TextInput  maxLength={1} inputMode='numeric' style={[styles.input]} placeholder={placeholder} />
            <TextInput  maxLength={1} inputMode='numeric' style={[styles.input]} placeholder={placeholder} />
            <TextInput  maxLength={1} inputMode='numeric' style={[styles.input]} placeholder={placeholder} />
            <TextInput  maxLength={1} inputMode='numeric' style={[styles.input]} placeholder={placeholder} />
        </View>
    )
}

export default OneTimePasswordComponent;

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 15,
        paddingVertical: 5,
        gap: 10,
        display: 'flex',
        flexDirection: "row",
        justifyContent: "center",
        
    },
    iconView: {
        display: 'flex',
        justifyContent: "center",
    },
    input: {
        textAlign: "center",
        backgroundColor: '#fff',
        width:55,
        height: 55,
        shadowColor: '#E5E5E5', // Couleur de l'ombre
        shadowOffset: { width: 0, height: 0 }, // Décalage de l'ombre
        shadowOpacity: 1, // Opacité de l'ombre
        shadowRadius: 2, // Rayon de l'ombre
        elevation: 5,
        borderRadius: 10,
        padding: 5,
    }
})