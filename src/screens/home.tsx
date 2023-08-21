import { View, Text, Button } from 'react-native'
import React, { memo } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation } from '@react-navigation/native'

import Rest from 'react-native-vector-icons/AntDesign'

export const Home = memo(() => {
  const navigation = useNavigation()

  return (
    <SafeAreaView>
      <Text>home</Text>
      <Button onPress={() => navigation.navigate('two')} title='next screen'/>

      <Rest name='rest' size={24}/>

    </SafeAreaView>
  )
})