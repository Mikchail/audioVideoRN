/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';

import {
  StyleSheet,
  useColorScheme,
} from 'react-native';
import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';
import { VideoPlayer } from './src/Video'
import AudioPlayer from './src/Audio'
import { MyVideo } from './src/MyVideo';


const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
  const tK = {
    id: '1',
    url: require("./src/the.mp3"),
    title: 'Keys of moon',
    artist: 'The Epic Hero',
    artwork: 'https://picsum.photos/id/1003/200/300',
    album: '',
  };
  return (
    <>
      <AudioPlayer track={tK} />
      <MyVideo />
    </>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
