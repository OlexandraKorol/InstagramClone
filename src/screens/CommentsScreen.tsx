import {View, FlatList} from 'react-native';
import React from 'react';

import comments from '../data/comments.json';
import {Comment} from '../components/Comment';
import {CommentsInput} from '../components/CommentsInput';

export const CommentsScreen = () => {
  return (
    <View style={{flex: 1}}>
      <FlatList
        data={comments}
        renderItem={({item}) => <Comment comment={item} includeDetails />}
        style={{padding: 10}}
      />

      <CommentsInput image="https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/1.jpg" />
    </View>
  );
};
