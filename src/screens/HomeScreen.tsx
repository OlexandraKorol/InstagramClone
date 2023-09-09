import {  FlatList } from 'react-native'
import React, { memo } from 'react'

import posts from '../data/post.json'
import { FeedPost } from '../components/FeedPost'

export const HomeScreen = memo(() => {

  return (
    <FlatList 
      data={posts}
      renderItem={({item}) => <FeedPost post={item}/>}
      showsVerticalScrollIndicator={false}
    />

  )
})