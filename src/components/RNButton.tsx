import {Pressable, StyleSheet, Text} from 'react-native';
import React, {memo} from 'react';
import {colors} from '../theme/colors';
import {weight} from '../theme/fonts';

interface IRNButton {
  text?: string;
  onPress?: () => void;
}

export const RNButton = memo<IRNButton>(({text = '', onPress = () => {}}) => {
  return (
    <Pressable onPress={onPress} style={styles.container}>
      <Text style={styles.text}>{text}</Text>
    </Pressable>
  );
});

const styles = StyleSheet.create({
  container: {
    flex: 1,

    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 5,

    padding: 5,
    marginHorizontal: 5,
    marginVertical: 10,
    alignItems: 'center',
  },
  text: {
    color: colors.black,
    fontWeight: weight.semi,
  },
});
