import React, { useRef, useState } from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import Video from 'react-native-video';

export const MyVideo = () => {


  const [state, setState] = useState({
    rate: 1,
    volume: 1,
    muted: false,
    resizeMode: 'contain',
    duration: 0.0,
    currentTime: 0.0,
    paused: true,
  });

  const videoRef = useRef();

  const onLoad = (data) => {
    console.log(data);
    setState({ ...state, duration: data.duration });
  };

  const onProgress = (data) => {
    console.log(data);
    setState({ ...state, currentTime: data.currentTime });
  };

  const onEnd = () => {
    setState({ ...state, paused: true });
    videoRef.current?.seek(0)
  };

  const onAudioBecomingNoisy = () => {
    setState({ ...state, paused: true });
  };

  const onAudioFocusChanged = (event) => {
    setState({ ...state, paused: !event.hasAudioFocus });
  };
  return (
    <TouchableOpacity style={styles.videoWrapper}
      onPress={() => setState({ ...state, paused: !state.paused })}
    >
      <Video
        source={require('./broadchurch.mp4')}   // Can be a URL or a local file.
        ref={videoRef}
        resizeMode={"contain"}
        onLoad={onLoad}
        onProgress={onProgress}
        onEnd={onEnd}
        paused={state.paused}
        onAudioBecomingNoisy={onAudioBecomingNoisy}
        onAudioFocusChanged={onAudioFocusChanged}
        repeat={false}
        rate={state.rate}
        // Store reference
        // onBuffer={this.onBuffer}                // Callback when remote video is buffering
        // onError={this.videoError}               // Callback when video cannot be loaded
        style={styles.backgroundVideo}
      />
    </TouchableOpacity>
  )
}

var styles = StyleSheet.create({
  backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    width: "100%",
    height: "100%",
    flex: 1,
    zIndex: 222
  },
  videoWrapper: {
    height: 300,
    width: 300,
    borderWidth: 2,
  }
});