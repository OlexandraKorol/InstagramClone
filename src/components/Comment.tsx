import { View, Text, StyleSheet, Image, Pressable } from 'react-native'
import React, { memo, useState } from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { colors } from '../theme/colors'
import { weight } from '../theme/fonts'
import { IComment } from '../types/models'


interface ICommentProps {
  comment: IComment
}

export const Comment = memo<ICommentProps>(({ comment }) => {
  console.log(comment);
  
  const [isLiked, setIsLiked] = useState(false)

  const commentsIsLiked = () => {
    setIsLiked(() => !isLiked)
  }

  return (
    <View style={styles.comment}>
      <Image source={{uri: comment.user.image}} style={styles.avatar}/>
        <View style={styles.middleColumn}>
          <Text style={styles.commentText}>

          <Text style={styles.bold}>{comment.user.username}</Text>
              {comment.comment}
          </Text>

          <View style={styles.footer}> 
            <Text style={styles.footerText}>ad</Text>
            <Text style={styles.footerText}>5 likes</Text>
            <Text style={styles.footerText}>Reply</Text>
          </View>
        </View>

        <Pressable onPress={commentsIsLiked}>
          <AntDesign 
            name={isLiked ? 'heart' : 'hearto'} 
            size={16} 
            style={styles.icon}
            color={isLiked ? colors.accent : colors.gray}
          />
        </Pressable>
    </View>
  )
})

const styles = StyleSheet.create({
  icon: {
    alignSelf: 'center',
    marginLeft:'auto',
    paddingLeft: 5
  },
  commentText:{
    color: colors.black,
    flex:1,
    lineHeight: 18,
    marginHorizontal: 7
  },
  bold: {
    fontWeight: weight.bold,
  },
  comment:{
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar:{
    width: 50,
    aspectRatio: 1,
    borderRadius: 25
  },
  footer:{
    flexDirection: 'row',
    marginBottom: 5
  },
  middleColumn:{
    flex:1
  },
  footerText:{
    marginHorizontal: 5,
    color: colors.gray
  }
})
