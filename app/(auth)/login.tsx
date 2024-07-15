import ButtonComponent from '@/components/auth/button/button.component'

import EyeSvg from '@/components/auth/icons/eyes.icon'
import MessageSvg from '@/components/auth/icons/message.icon'
import PasswordSvg from '@/components/auth/icons/password.icon'

import InputComponents from '@/components/auth/input/input.component'
import { Link, useRouter } from 'expo-router'
import React from 'react'
import { StyleSheet, Text, useWindowDimensions, View } from 'react-native'

const Login = () => {
  const { width, height } = useWindowDimensions()
  const navigation = useRouter()
  return (
    <View style={[styles.container, { width, height }]}>
      <View>
        <Text style={styles.title}>Hi, Welcome Back!</Text>
        <Text>Login in to your account</Text>
      </View>
      <InputComponents prefix={<MessageSvg />} placeholder='Your Email' />
      <InputComponents prefix={<PasswordSvg />} suffix={<EyeSvg />} placeholder='Password' />

      <View style={{ display: 'flex', justifyContent: 'flex-end', flexDirection: 'row' }}>
        <Text style={{ color: '#E76D40' }}>Forgot Password</Text>
      </View>

      <ButtonComponent value="Log In"
        onPress={() => navigation.navigate('/(auth)/one-time-password' as never)}
      />

      <View style={{ display: 'flex', justifyContent: 'center', flexDirection: 'row', marginBottom: 100 }}>
        <Text>Don’t have an account?</Text>
        <Text style={{ color: '#E76D40' }}>sign up</Text>
      </View>
      <View style={{ display: 'flex', justifyContent: 'center', flexDirection: 'row' }}>
        <Text style={{ color: '#E76D40' }}>Skip</Text>
      </View>
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