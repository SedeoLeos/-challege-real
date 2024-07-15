import ButtonComponent from '@/components/auth/button/button.component'

import EyeSvg from '@/components/auth/icons/eyes.icon'
import LocationSvg from '@/components/auth/icons/location.icon'
import MessageSvg from '@/components/auth/icons/message.icon'
import { useRouter } from 'expo-router'

import React from 'react'
import {  StyleSheet, Text, useWindowDimensions, View } from 'react-native'

const Login = () => {
    const { width, height } = useWindowDimensions()
    const navigation = useRouter();
    return (
        <View style={[styles.container, { width, height }]}>
            <LocationSvg />
            <View style={[styles.container,]}>
                <Text style={[styles.title, styles.textAlign]}>Enable Your Location</Text>
                <Text style={[styles.textAlign, styles.subTitle]} >Choose your location to start find the
                    request around you.</Text>
            </View>
            <View style={{ width: '100%' }}>

                <ButtonComponent value="Enable your Location" onPress={()=>navigation.navigate('(tabs)')} />
            </View>

        </View >
    )
}
const styles = StyleSheet.create({
    textAlign: {
        textAlign: "center",
    },
    title: {
        fontSize: 32,
        fontWeight: 500,
        color: "#E76D40"
    },
    subTitle: {
        fontSize: 14,
        lineHeight: 24.23,
        color: "#C0C0C0"

    },
    containerHeader: {
        display: 'flex',
        justifyContent: "center",
        alignItems: "center",
        gap: 30,
        padding: 20,
    },

    container: {
        display: 'flex',
        justifyContent: "center",
        alignItems: "center",
        gap: 30,
        padding: 20,
    },

})

export default Login