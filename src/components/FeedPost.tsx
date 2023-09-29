import React, {memo, useState} from 'react';
import {
  Image,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {colors} from '../../src/theme/colors';
import Entypo from 'react-native-vector-icons/Entypo';
import {size, weight} from '../../src/theme/fonts';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Comment} from './Comment';
import {IPost} from '../types/models';
import {DoublePressable} from './DoublePressable';
import {Carousel} from './Carousel';
import {VideoPlayer} from './VideoPlayer';

interface IFeedPostProps {
  post: IPost;
  isVisible: boolean;
}

export const FeedPost = memo<IFeedPostProps>(({post, isVisible}) => {
  const [isDescpriptionExplained, setIsDescpriptionExplained] = useState(false);
  const [isLiked, setIsLiked] = useState(false);

  const onHandlerDescriptionOpen = () => {
    setIsDescpriptionExplained(!isDescpriptionExplained);
  };

  const onHandlerIsLiked = () => {
    setIsLiked(!isLiked);
  };

  const renderPostContent = () => {
    if (post.image) {
      return (
        <Image
          source={{
            uri: post.image,
          }}
          style={styles.image}
        />
      );
    } else if (post.images) {
      return <Carousel images={post.images} />;
    } else if (post.video) {
      return <VideoPlayer uri={post.video} paused={isVisible} />;
    }
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.post}>
        {/* Header */}
        <View style={styles.header}>
          <Image
            source={{
              uri: post.user.image,
            }}
            style={styles.userAvatar}
          />

          <Text style={styles.userName}> {post.user.username}</Text>
          <Entypo
            name="dots-three-horizontal"
            size={16}
            style={styles.threeDots}
          />
        </View>

        {/* Content */}
        <View style={styles.iconContainer}>
          <DoublePressable onDoublePress={onHandlerIsLiked}>
            {renderPostContent()}
          </DoublePressable>
        </View>

        {/* Footer */}
        <View style={styles.footer}>
          <View style={styles.iconContainer}>
            <Pressable onPress={onHandlerIsLiked}>
              <AntDesign
                name={isLiked ? 'heart' : 'hearto'}
                size={24}
                style={styles.icon}
                color={isLiked ? colors.accent : colors.black}
              />
            </Pressable>
            <Ionicons
              name="chatbubble-outline"
              size={24}
              style={styles.icon}
              color={colors.black}
            />
            <Feather
              name="send"
              size={24}
              style={styles.icon}
              color={colors.black}
            />

            <Feather
              name="bookmark"
              size={24}
              style={{marginLeft: 'auto'}}
              color={colors.black}
            />
          </View>

          {/* Likes */}
          <Text style={styles.text}>
            Liked by <Text style={styles.bold}>Sombd</Text> and{' '}
            <Text style={styles.bold}>{post.nofLikes} others</Text>
          </Text>

          {/* Post description */}
          <Text
            style={styles.text}
            numberOfLines={isDescpriptionExplained ? 0 : 2}>
            <Text style={styles.bold}>{post.user.username} </Text>
            {post.description}
          </Text>

          <Text onPress={onHandlerDescriptionOpen} style={styles.grayText}>
            {isDescpriptionExplained ? 'less' : 'more'}
          </Text>

          {/* Comments */}

          <Text style={styles.commentText}>
            View all {post.nofComments} comments
          </Text>

          {post.comments.map(comment => (
            <Comment key={comment.id} comment={comment} />
          ))}

          {/* Posted date */}
          <Text style={styles.date}>{post.createdAt}</Text>
        </View>
      </View>
    </SafeAreaView>
  );
});

const styles = StyleSheet.create({
  post: {
    flex: 1,
  },
  image: {
    width: '100%',
    aspectRatio: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  userAvatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  userName: {
    fontWeight: weight.bold,
    color: colors.black,
  },
  footer: {
    padding: 10,
  },
  iconContainer: {
    flexDirection: 'row',
    marginVertical: 5,
  },
  icon: {
    marginHorizontal: 5,
  },
  text: {
    color: colors.black,
    lineHeight: 18,
    marginBottom: 3,
  },
  bold: {
    fontWeight: weight.bold,
  },
  threeDots: {
    marginLeft: 'auto',
  },
  grayText: {
    color: colors.gray,
    fontSize: size.s,
    marginBottom: 5,
  },
  date: {
    marginVertical: 5,
    color: colors.gray,
    fontSize: size.s,
  },
  commentText: {
    color: colors.gray,
    lineHeight: 18,
    marginBottom: 3,
  },
});
