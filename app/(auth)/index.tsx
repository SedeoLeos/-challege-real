import ButtonComponent from '@/components/auth/button/button.component'
import AccountSvg from '@/components/auth/icons/account.icon'
import EyeSvg from '@/components/auth/icons/eyes.icon'
import MessageSvg from '@/components/auth/icons/message.icon'
import PasswordSvg from '@/components/auth/icons/password.icon'
import PhoneSvg from '@/components/auth/icons/phone.icon'
import InputComponents from '@/components/auth/input/input.component'
import { Link, useNavigation, useRouter } from 'expo-router'
import React from 'react'
import { StyleSheet, Text, useWindowDimensions, View } from 'react-native'

const login = () => {
  const { width, height } = useWindowDimensions()
  const navigation = useRouter()
  return (
    <View style={[styles.container, { width, height }]}>

      <Text style={styles.title}>Create account</Text>
      <InputComponents prefix={<AccountSvg />} placeholder='Full Name' />
      <InputComponents prefix={<MessageSvg />} placeholder='Your Email' />
      <InputComponents prefix={<PhoneSvg />} placeholder='Mobile Number' />
      <InputComponents prefix={<PasswordSvg />} suffix={<EyeSvg />} placeholder='Password' />
      <InputComponents prefix={<PasswordSvg />} suffix={<EyeSvg />} placeholder='Confirm Password' />

      <ButtonComponent value="Sign Up"
        onPress={() => navigation.navigate('/(auth)/login' as never)}
      />

      <View style={{ display: 'flex', justifyContent: 'center', flexDirection: 'row' }}>
        <Text style={{ color: '#C0C0C0' }}>Already have an account?</Text>
        <Text style={{ color: '#E76D40' }}>Sign In</Text>
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

export default login