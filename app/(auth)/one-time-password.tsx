import ButtonComponent from '@/components/auth/button/button.component'


import MessageSvg from '@/components/auth/icons/message.icon';

import InputComponents from '@/components/auth/input/input.component'
import OneTimePasswordComponent from '@/components/auth/input/one-time-password.component';
import { useRouter } from 'expo-router'
import React from 'react'
import { StyleSheet, Text, useWindowDimensions, View } from 'react-native'

const Login = () => {
    const { width, height } = useWindowDimensions()
    const navigation = useRouter();
    return (
        <View style={[styles.container, { width, height }]}>
            <View style={{justifyContent:'center',alignItems:'center'}}>
                <Text style={styles.title}>00:42</Text>
                <Text>Type the verification code
                    we’ve sent you</Text>
            </View>
            <OneTimePasswordComponent placeholder={'0'}/>


            <View style={{ display: 'flex', justifyContent: 'flex-end', flexDirection: 'row' }}>
                <Text style={{ color: '#E76D40' }}>Send again?</Text>
            </View>

            <ButtonComponent value="Submit"
                onPress={() => navigation.navigate('/(auth)/location' as never)}
            />
        </View >
    )
}
const styles = StyleSheet.create({
    title: {
        fontSize: 32,
        fontWeight: 500,
        color: "#444444"
    },

    container: {
        display: 'flex',
        justifyContent: "center",
        gap: 30,
        padding: 20,
    },

})

export default Login