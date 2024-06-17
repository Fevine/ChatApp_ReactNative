import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

type Props = {}

const Stack = createNativeStackNavigator()

const AuthNav = (props: Props) => {
  return (
    <Stack.Navigator>
        <Stack.Screen  />
    </Stack.Navigator>
  )
}

export default AuthNav