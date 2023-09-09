import { Pressable, StyleSheet} from 'react-native'
import React, { Children, ReactNode, memo } from 'react'

interface IDoubleBressable {
  onDoublePress: () => void
  children: ReactNode
}

export const DoublePressable = memo<IDoubleBressable>(({onDoublePress, children}) => {
  let lastTap = 0
  const handleDoublePress = () => {
    const currentTap = Date.now() //value in miliseconds

    if(currentTap - lastTap < 300) {
      onDoublePress()
    }

    lastTap = currentTap
  }
  return (
    <Pressable onPress={handleDoublePress}>
      {children}
    </Pressable>
  )
})
