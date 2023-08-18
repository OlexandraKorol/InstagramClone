import { Text, Button } from 'react-native'
import React, { memo } from 'react'
import { useNavigation } from '@react-navigation/native'
import { SafeAreaView } from 'react-native-safe-area-context'

export const Screen_two = memo(() => {
  const navigation = useNavigation()

  return (
    <SafeAreaView>
      <Text>screen_two</Text>
      <Button onPress={() => navigation.goBack()} title='go back'/>
      <Button onPress={() => navigation.navigate('three')} title='screen three'/>
    </SafeAreaView>
  )
})