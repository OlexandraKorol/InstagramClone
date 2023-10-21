import {Image, StyleSheet, Text, View} from 'react-native';
import React, {memo} from 'react';
import user from '../data/user.json';
import {colors} from '../theme/colors';
import {size, weight} from '../theme/fonts';
import {EditProfileInput} from '../components/EditProfileInput';
import {useForm} from 'react-hook-form';
import {IUser} from '../types/models';

export type EditProfileInputFields = 'name' | 'username' | 'website' | 'bio';
export type EditableUserType = Pick<IUser, EditProfileInputFields>;

export const EditProfileScreen = memo(() => {
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm<EditableUserType>({
    defaultValues: {
      name: user.name,
      username: user.username,
    },
  });

  const onSubmit = (data: EditableUserType) => {
    console.log('Submit', data);
  };

  console.log(errors, '++++');

  return (
    <View style={styles.page}>
      <Image source={{uri: user.image}} style={styles.avatar} />
      <Text style={styles.textButton}>Change profile button</Text>

      <EditProfileInput
        label="Name"
        control={control}
        rules={{require: true}}
        name="name"
      />
      <EditProfileInput
        label="username"
        control={control}
        name="username"
        rules={{require: true}}
      />
      <EditProfileInput
        label="Website"
        control={control}
        name="website"
        rules={{require: true}}
      />
      <EditProfileInput
        label="Bio"
        multiline={true}
        control={control}
        name="bio"
        rules={{require: true}}
      />

      <Text onPress={handleSubmit(onSubmit)} style={styles.submite}>
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
