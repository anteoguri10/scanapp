import { View, Text } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'

const TabLayout = () => {
  return (
    <Tabs>
      <Tabs.Screen name='scan' options={{headerShown:false}}/>
      <Tabs.Screen name='settings' options={{headerShown:false}}/>
    </Tabs>
  )
}

export default TabLayout;