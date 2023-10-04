import {FlatList, Image, StyleSheet, View} from 'react-native';
import React, {memo} from 'react';
import {IPost} from '../types/models';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {colors} from '../theme/colors';

interface IFeedGreedView {
  data: IPost[];
  listHeaderComponent:
    | React.ComponentType<any>
    | React.ReactElement<unknown>
    | null
    | undefined;
}

export const FeedGridView = memo<IFeedGreedView>(
  ({data, listHeaderComponent}) => {
    return (
      <FlatList
        data={data}
        renderItem={({item}) => <FeedGreedItem post={item} />}
        showsVerticalScrollIndicator={false}
        numColumns={3}
        ListHeaderComponent={listHeaderComponent}
        style={{marginHorizontal: -1}}
      />
    );
  },
);

interface IFeedGreedItem {
  post: IPost;
}

const FeedGreedItem = memo<IFeedGreedItem>(({post}) => {
  return (
    <View style={styles.images}>
      <Image source={{uri: post.image || post?.images[0]}} style={{flex: 1}} />

      {post.images && (
        <MaterialIcons
          name={'collections'}
          size={19}
          color={colors.white}
          style={styles.icon}
        />
      )}
    </View>
  );
});

const styles = StyleSheet.create({
  images: {
    flex: 1,
    aspectRatio: 1,
    maxWidth: '33%',
    margin: 1,
  },

  icon: {
    position: 'absolute',
    top: 5,
    right: 5,
  },
});
