import { View, Text } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

const TabLayout = () => {
  return (
    <Stack>
      <Stack.Screen name='login' options={{headerShown:false,gestureEnabled:false}}/>
      <Stack.Screen name='forget' options={{headerShown:false}}/>
    </Stack>
  )
}

export default TabLayout;