import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

import user from '../data/user.json';
import {size, weight} from '../theme/fonts';
import {colors} from '../theme/colors';
import {RNButton} from '../components/RNButton';
import {FeedGridView} from '../components/FeedGreedView';

export const ProfileScreen = () => {
  return <FeedGridView data={user.posts} listHeaderComponent={ProfileHeader} />;
};

export const ProfileHeader = () => {
  return (
    <View style={styles.root}>
      <View style={styles.headerRow}>
        {/* Profile image */}
        <Image source={{uri: user.image}} style={styles.image} />

        {/* Posts, followers, following number */}
        <View style={styles.numberContainer}>
          <Text style={styles.numberText}>98</Text>
          <Text style={styles.numberTextDescription}>Posts</Text>
        </View>

        <View style={styles.numberContainer}>
          <Text style={styles.numberText}>98</Text>
          <Text style={styles.numberTextDescription}>Followers</Text>
        </View>

        <View style={styles.numberContainer}>
          <Text style={styles.numberText}>98</Text>
          <Text style={styles.numberTextDescription}>Following</Text>
        </View>
      </View>

      {/* Bio */}

      <Text style={styles.name}> {user.name}</Text>
      <Text style={styles.bio}> {user.bio} </Text>

      {/* Profiles buttons */}

      <View style={styles.buttonContainer}>
        <RNButton
          text="Edit profile"
          onPress={() => console.warn('Edit profile')}
        />

        <RNButton
          text="Another Button"
          onPress={() => console.warn('Click!!')}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    padding: 10,
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  image: {
    width: 100,
    aspectRatio: 1,
    borderRadius: 50,
  },
  numberContainer: {
    alignItems: 'center',
  },
  numberText: {
    fontSize: size.lg,
    fontWeight: weight.semi,
    color: colors.black,
  },
  numberTextDescription: {
    color: colors.gray,
  },
  name: {
    fontWeight: weight.semi,
    color: colors.black,
    marginBottom: 4,
  },
  bio: {
    color: colors.gray,
  },
  buttonContainer: {
    flexDirection: 'row',
  },
});
