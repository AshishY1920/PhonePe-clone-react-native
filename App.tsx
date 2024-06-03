import {StatusBar} from 'react-native';
import React, {useEffect} from 'react';
import Home from './screens/Home';

const App = () => {
  useEffect(() => {
    // Change the status bar color when the component mounts
    StatusBar.setBackgroundColor('#5F259E'); // Use your desired color
    StatusBar.setBarStyle('light-content'); // Set the text color of the status bar
    return () => {
      // Reset the status bar color when the component unmounts
      StatusBar.setBackgroundColor('#ffffff'); // Reset to your default color
      StatusBar.setBarStyle('dark-content'); // Reset the text color
    };
  }, []);
  return <Home />;
};

export default App;
