import { View,  FlatList } from 'react-native'
import React from 'react'

import comments from '../data/comments.json'
import { Comment } from '../components/Comment'

export const CommentsScreen = () => {
  return (
    <View>
     <FlatList 
      data={comments}
      renderItem={({item}) => (
        <Comment comment={item}/>
      )}
      style={{padding: 10}}
     />
    </View>
  )
}
