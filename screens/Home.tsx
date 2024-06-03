import {View, Text, ScrollView} from 'react-native';
import React from 'react';
import HomeStyle from './styles/Home';
import Header from '../components/Header';

const Home = () => {
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={HomeStyle.container}>
      {/* Header component */}
      <Header isOk={true} />
      {/* Header component */}
    </ScrollView>
  );
};

export default Home;
