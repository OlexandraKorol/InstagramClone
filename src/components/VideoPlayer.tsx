import { Pressable, StyleSheet, View } from 'react-native';
import React, { memo, useState } from 'react';

import Video from 'react-native-video';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { colors } from '../theme/colors';

interface IVideoPlayer {
  uri: string
  paused: boolean
}

export const VideoPlayer = memo<IVideoPlayer>(({ uri, paused }) => {
  const [muted, setMuted] = useState(true)

  return (
    <View>
      <Video 
        source={{uri:uri}} 
        style={styles.video}
        resizeMode='cover'
        repeat
        muted={muted}
        paused={!paused}
      />

      <Pressable onPress={() => setMuted(!muted)} style={styles.volumeMuteBackground}>
        <Ionicons name={muted ? 'volume-mute' : 'volume-medium'} size={23} color={colors.white}/>
      </Pressable>
    </View>
  )
})

const styles = StyleSheet.create({
  video: {
    width: '100%',
    aspectRatio: 1,
  },
  volumeMuteBackground:{
    backgroundColor: colors.darkGray,
    borderRadius: 50,
    padding: 5,
    alignItems: 'center',
    position: 'absolute',
    bottom: 10,
    right: 10
  },
})

