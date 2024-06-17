import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect} from 'react'
import {useFonts} from 'expo-font'
import { SplashScreen,Stack } from 'expo-router'
const RootLayout = () => {

  return (
      <Stack>
          <Stack.Screen name="index" options={{headerShown:false}} />
   </Stack>
  )
}

export default RootLayout

