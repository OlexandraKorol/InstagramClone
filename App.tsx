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
import { SafeAreaView, ScrollView, StyleSheet } from 'react-native';
import {FeedPost} from './src/components/FeedPost';

import post from './src/data/post.json'
import { HomeScreen } from './src/screens/HomeScreen';

const App = () => {
      return(
        <SafeAreaView style={styles.container}>
          <HomeScreen />
        </SafeAreaView>
      )
};


const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})
  

export default App

