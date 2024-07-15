import { Pressable, StyleSheet, Text, PressableProps } from 'react-native'
import React from 'react'
interface ButtonComponentProps extends PressableProps  {
    value: string,
}
 
const ButtonComponent: React.FC<ButtonComponentProps> = ({ value,onPress }) => {
    return (
        <Pressable onPress={onPress} style={(pressed) => pressed ? styles.button : styles.button}>
            <Text style={styles.buttonText}>{value}</Text>
        </Pressable>
    )
}

export default ButtonComponent

const styles = StyleSheet.create({
    button: {
        display: "flex",
        justifyContent: "center",
        borderRadius: 10,
        padding: 20,
        color: "#fff",
        backgroundColor: "#E76D40"
    },
    buttonText: {
        textAlign: "center",
        color: "#fff"
    },
})