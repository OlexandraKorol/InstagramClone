import {StyleSheet, Text, TextInput, View} from 'react-native';
import React, {memo} from 'react';
import {colors} from '../theme/colors';

interface ICustomInput {
  label: string;
  multiline?: boolean;
}

export const EditProfileInput = memo<ICustomInput>(
  ({label, multiline = false}) => {
    return (
      <View style={styles.inpuContainer}>
        <Text style={styles.label}>{label}</Text>
        <TextInput
          placeholder="Hello.."
          style={styles.input}
          multiline={multiline}
        />
      </View>
    );
  },
);

const styles = StyleSheet.create({
  inpuContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'stretch',

    paddingVertical: 12,
  },
  label: {
    width: 75,
  },
  input: {
    flex: 1,
    borderColor: colors.border,
    borderBottomWidth: 1,
  },
});
