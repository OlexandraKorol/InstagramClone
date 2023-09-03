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
import FeedPost from './src/components/FeedPost';

const App = () => {
      return(
        <SafeAreaView style={styles.container}>
          <ScrollView>
            <FeedPost />
            <FeedPost />
            <FeedPost />
            <FeedPost />
            <FeedPost />
          </ScrollView>
        </SafeAreaView>
      )
};


const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})
  

export default App

