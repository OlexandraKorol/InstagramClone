import {View, Text, SafeAreaView} from 'react-native';
import React, {memo} from 'react';

export const Modal = memo(() => {
  return (
    <SafeAreaView>
      <View>
        <Text>modal</Text>
      </View>
    </SafeAreaView>
  );
});
