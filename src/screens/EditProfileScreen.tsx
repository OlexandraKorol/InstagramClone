import {Image, StyleSheet, Text, View} from 'react-native';
import React, {memo} from 'react';
import user from '../data/user.json';
import {colors} from '../theme/colors';
import {size, weight} from '../theme/fonts';
import {EditProfileInput} from '../components/EditProfileInput';

export const EditProfileScreen = memo(() => {
  const onSubmit = () => {
    console.warn('Submit');
  };

  return (
    <View style={styles.page}>
      <Image source={{uri: user.image}} style={styles.avatar} />
      <Text style={styles.textButton}>Change profile button</Text>

      <EditProfileInput label="Name" />
      <EditProfileInput label="Username" />
      <EditProfileInput label="Website" />
      <EditProfileInput label="Bio" multiline={true} />

      <Text onPress={onSubmit} style={styles.submite}>
        Submite
      </Text>
    </View>
  );
});

const styles = StyleSheet.create({
  page: {
    alignItems: 'center',
    padding: 10,
  },
  avatar: {
    width: '30%',
    aspectRatio: 1,
    borderRadius: 100,
  },
  textButton: {
    color: colors.primary,
    fontSize: size.md,
    flexWeight: weight.semi,

    margin: 10,
  },
  submite: {
    color: colors.primary,
    fontSize: size.md,
    margin: 10,
  },
});
