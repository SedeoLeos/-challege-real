import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
interface InputComponentsProps {
  placeholder: string,
  suffix?: React.ReactNode,
  prefix?: React.ReactNode,
}
const InputComponents: React.FC<InputComponentsProps> = ({placeholder,...props}) => {
  return (
    <View style={styles.container}>
      {props.prefix && <View style={styles.iconView}>{props.prefix}</View>}
      <TextInput style={[styles.input]} placeholder={placeholder} />
      {props.suffix && <View style={styles.iconView}>{props.suffix}</View>}
    </View>
  )
}

export default InputComponents;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
    paddingVertical: 5,
    gap: 10,
    backgroundColor: '#fff',
    display: 'flex',
    flexDirection: "row",
    shadowColor: '#E5E5E5', // Couleur de l'ombre
    shadowOffset: { width: 0, height: 0 }, // Décalage de l'ombre
    shadowOpacity: 1, // Opacité de l'ombre
    shadowRadius: 2, // Rayon de l'ombre
    elevation: 5,
    borderRadius: 10,
    height: 55,

  },
  iconView:{
    display:'flex',
    justifyContent:"center",
  },
  input: {
    flex:1,
    padding: 5,
  }
})