import { View, Text, Button } from 'react-native'
import React, { memo } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation } from '@react-navigation/native'

export const Home = memo(() => {
  const navigation = useNavigation()

  return (
    <SafeAreaView>
      <Text>home</Text>
      <Button onPress={() => navigation.navigate('two')} title='next screen'/>
    </SafeAreaView>
  )
})