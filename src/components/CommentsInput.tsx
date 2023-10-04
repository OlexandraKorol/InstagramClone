import {Image, StyleSheet, Text, TextInput, View} from 'react-native';
import React, {memo, useState} from 'react';
import {colors} from '../theme/colors';
import {size, weight} from '../theme/fonts';

interface ICommentInput {
  image: string;
}

export const CommentsInput = memo<ICommentInput>(({image}) => {
  const [newComment, setNewComment] = useState('');

  const onPost = () => {
    console.warn('Posting the comment');

    //sending data to backend
  };

  return (
    <View style={styles.root}>
      <Image source={{uri: image}} style={styles.image} />
      <TextInput
        value={newComment}
        placeholder="Write your comment..."
        style={styles.input}
        onChangeText={setNewComment}
        multiline
      />

      <Text onPress={onPost} style={styles.button}>
        Post
      </Text>
    </View>
  );
});

const styles = StyleSheet.create({
  image: {
    width: 40,
    aspectRatio: 1,
    borderRadius: 25,
  },
  root: {
    flexDirection: 'row',
    padding: 7,
    borderTopWidth: 1,
    borderColor: colors.border,
  },
  input: {
    borderColor: colors.border,
    borderWidth: 1,
    borderRadius: 25,
    paddingVertical: 5,
    paddingHorizontal: 10,
    flex: 1,

    paddingRight: 49,

    marginLeft: 5,
  },
  button: {
    position: 'absolute',
    right: 19,
    top: '50%',
    fontSize: size.s,
    fontWeight: weight.semi,
    color: colors.primary,
    textTransform: 'uppercase',
  },
});
