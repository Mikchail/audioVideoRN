import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import TrackPlayer, { useProgress, State } from 'react-native-track-player';
// import Slider from '@react-native-community/slider';
import AppPlayer from './AppPlayer';
import MultiSlider from "@ptomasroos/react-native-multi-slider";
const AudioPlayer = ({ track }) => {
  const progress = useProgress();
  const [isPlaying, setPlaying] = useState(true);
  const [duration, setDuration] = useState(0);

  useEffect(() => {
    const setTrack = async () => {
      await TrackPlayer.add(track);
      await new Promise((r) => setTimeout(r, 100));
      const duration = await TrackPlayer.getDuration();
      console.log(duration);
      setDuration(duration)
    }
    setTrack();
  }, [track]);

  const onPlayPausePress = async () => {
    const state = await TrackPlayer.getState();
    if (state === State.Playing) {
      TrackPlayer.pause();
      setPlaying(false);
    }
    if (state === State.Paused) {
      TrackPlayer.play();
      setPlaying(true);
    }
  };

  const handleSeekTrack = (values) => {
    TrackPlayer.seekTo(values[0]);
  }

  const renderSlider = () => {
    return (
      <MultiSlider
        containerStyle={{ paddingHorizontal: 10 }}
        values={[progress.position]}
        min={0}
        max={duration || 1}
      // sliderLength={track.duration}
      // onValuesChangeStart={handleSeekTrack}
        onValuesChange={handleSeekTrack}
      // onValuesChangeFinish={sliderOneValuesChangeFinish}
      />
    )
  }

  const playOrPauseIcon = isPlaying ? 'pause' : 'play';
  return (
    <View style={myStyle.progrsBarSection}>
      <TouchableOpacity onPress={onPlayPausePress} style={myStyle.playPauseButton}>
        <View style={{ width: 20, height: 20, borderWidth: 1 }}></View>
      </TouchableOpacity>
      {/* <Text>{AppPlayer.secondsToHHMMSS(Math.floor(progress.position || 0))}</Text> */}
      {renderSlider()}
      <Text>{AppPlayer.secondsToHHMMSS(duration || 0)}</Text>
    </View>
  );
};


const myStyle = StyleSheet.create({
  progrsBarSection: {
    flexDirection: "row",
    alignItems: "center",
  },
  playPauseButton: {
    backgroundColor: '#52527a',
    borderRadius: 10,
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  }
})

export default AudioPlayer;