/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import { Dimensions, Image, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import { colors } from './src/theme/colors';
import Entypo from 'react-native-vector-icons/Entypo'
import { weight } from'./src/theme/fonts'
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather'
import Ionicons from 'react-native-vector-icons/Ionicons'

const App = () => {
      return (
      <SafeAreaView style={{flex: 1}}>
        <View style={styles.post}>
          {/* Header */}
          <View style={styles.header}>
            <Image 
              source={{
              uri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/1.jpg'
            }} 
              style={styles.userAvatar}
            />

            <Text style={styles.userName}> SandraYourDev</Text>
            <Entypo name='dots-three-horizontal' size={16} style={styles.threeDots}/>
          </View>
    
          {/* Content */}
          <View style={styles.iconContainer}>
            <Image 
            source={{
              uri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/images/1.jpg'
            }} 
            style={styles.image}
            />
          </View>
    
          {/* Footer */}
          <View style={styles.footer}>
            <View style={styles.iconContainer}>
                <AntDesign
                  name='heart' // 'hearto'
                  size={24}
                  style={styles.icon}
                  color='red'
                />
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
              <Text style={styles.text} > 
              Liked by {' '}
                <Text style={styles.bold}>Sombd</Text>  and {' '}
                <Text style={styles.bold}>88 others</Text>
              </Text>

            {/* Post description */}
            <Text style={styles.text} >
              <Text style={styles.bold}>SandraYourDev</Text>{' '}
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic repellendus unde blanditiis. Eos fugiat dolorem ea fugit aut sapiente corrupti autem dolores deleniti architecto, omnis, amet unde dignissimos quam minima?"
            </Text>
            {/* <Text onPress={toggleDescriptionExpanded}>
              {isDescriptionExpanded ? 'less' : 'more'}
            </Text>
            */}

            {/* Comments */}
            <>
              <Text style={styles.text}>
                View all 90 comments 
              </Text>

              <Text style={styles.comment}>
                <Text style={styles.bold}>
                  UserComment{' '}
                </Text>
                <Text style={styles.text}>
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic repellendus unde blanditiis. Eos fugiat dolorem ea fugit aut sapiente c
                </Text>
              </Text>
              </>

            {/* Posted date */}
            <Text style={styles.date}>3 September, 2023</Text>
          </View>
        </View>
      </SafeAreaView>
        
      );
};


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
    paddingHorizontal: 10
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
  date:{
    marginVertical:5
  }

})

export default App

