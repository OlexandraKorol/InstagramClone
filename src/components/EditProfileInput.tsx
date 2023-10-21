import {StyleSheet, Text, TextInput, View} from 'react-native';
import React, {memo} from 'react';
import {colors} from '../theme/colors';
import {Controller, Control} from 'react-hook-form';
import {
  EditProfileInputFields,
  EditableUserType,
} from '../screens/EditProfileScreen';
interface ICustomInput {
  label: string;
  multiline?: boolean;
  control: Control<EditableUserType, object>;
  name: EditProfileInputFields;
  rules: {};
}
export const EditProfileInput = memo<ICustomInput>(
  ({label, multiline = false, control, name, rules}) => {
    return (
      <Controller
        control={control}
        name={name}
        rules={rules}
        render={({field: {onChange, value, onBlur}, fieldState: {error}}) => {
          return (
            <View style={styles.inpuContainer}>
              <Text style={styles.label}>{label}</Text>
              <View style={styles.inputView}>
                <TextInput
                  value={value}
                  placeholder="Hello.."
                  style={[
                    styles.input,
                    {borderColor: error ? colors.error : colors.border},
                  ]}
                  multiline={multiline}
                  onChangeText={onChange}
                  onBlur={onBlur}
                />
                {error && <Text style={styles.errorText}>{error.type}</Text>}
              </View>
            </View>
          );
        }}
      />
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
    borderColor: colors.border,
    borderBottomWidth: 1,
  },
  errorText: {
    color: colors.error,
  },
  inputView: {
    flex: 1,
  },
});
