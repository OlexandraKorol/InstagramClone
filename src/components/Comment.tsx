import { View, Text, StyleSheet, Image, Pressable } from 'react-native'
import React, { memo, useState } from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { colors } from '../theme/colors'
import { weight } from '../theme/fonts'
import { IComment } from '../types/models'


interface ICommentProps {
  comment: IComment
  includeDetails: boolean 
}

export const Comment = memo<ICommentProps>(({ comment, includeDetails = false }) => {
  console.log(comment);
  
  const [isLiked, setIsLiked] = useState(false)

  const commentsIsLiked = () => {
    setIsLiked(() => !isLiked)
  }

  return (
    <View style={styles.comment}>
     {includeDetails && (
       <Image source={{uri: comment.user.image}} style={styles.avatar}/>
     )}
        <View style={styles.middleColumn}>
          <Text style={styles.commentText}>

          <Text style={styles.bold}>{comment.user.username}</Text>
              {comment.comment}
          </Text>

          {includeDetails && (
            <View style={styles.footer}> 
              <Text style={styles.footerText}>ad</Text>
              <Text style={styles.footerText}>5 likes</Text>
              <Text style={styles.footerText}>Reply</Text>
            </View>
          )}

        </View>

        <Pressable onPress={commentsIsLiked} hitSlop={5}>
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
    marginHorizontal: 5
  },
  commentText:{
    color: colors.black,
    lineHeight: 18,
  },
  bold: {
    fontWeight: weight.bold,
  },
  comment:{
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  avatar:{
    width: 58,
    aspectRatio: 1,
    borderRadius: 25,
    marginRight: 5
  },
  footer:{
    flexDirection: 'row',
    marginBottom: 10
  },
  middleColumn:{
    flex:1
  },
  footerText:{
    marginRight: 5,
    color: colors.gray
  }
})
