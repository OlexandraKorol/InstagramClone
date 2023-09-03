import { View, Text, StyleSheet } from 'react-native'
import React, { memo } from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { colors } from '../theme/colors'
import { weight } from '../theme/fonts'
import { IComment } from '../types/models'

interface ICommentProps {
  comment: IComment
}

export const Comment = memo<ICommentProps>(({ comment }) => {
  return (
    <View style={styles.comment}>
      <Text style={styles.text}>
        <Text style={styles.bold}>
          {comment.user}{' '}
        </Text>

        <Text style={styles.text}>
          {comment.comment}
        </Text>

      </Text>
      <AntDesign name='hearto' size={16} style={styles.icon}/>
    </View>
  )
})

const styles = StyleSheet.create({
  icon: {
    marginHorizontal: 5,
    alignSelf: 'center'
  },
  text: {
    color: colors.black,
    lineHeight: 18,
    marginBottom: 3
  },
  bold: {
    fontWeight: weight.bold,
  },
  threeDots: {
    marginLeft: 'auto'
  },
  comment:{
    flexDirection: 'row',
    alignItems: 'center',
  },
})

