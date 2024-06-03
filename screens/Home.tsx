import {
  View,
  Text,
  ScrollView,
  Dimensions,
  Image,
  ImageSourcePropType,
} from 'react-native';
import React from 'react';
import HomeStyle from './styles/Home';
import Header from '../components/Header';
import Slider from '../components/Carousel';

const width = Dimensions.get('window').width;

interface HeaderBannerProps {
  uri: ImageSourcePropType;
}

const Header_Banner: HeaderBannerProps[] = [
  {
    uri: require('../assets/images/1.jpg'),
  },
  {
    uri: require('../assets/images/2.png'),
  },
  {
    uri: require('../assets/images/3.png'),
  },
  {
    uri: require('../assets/images/5.webp'),
  },
];

const Home = () => {
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={HomeStyle.container}>
      {/* Header component */}
      <Header isOk={true} />
      {/* Header component */}

      <View style={{flex: 1}}>
        <Slider Header_Banner={Header_Banner} width={width} />
      </View>
    </ScrollView>
  );
};

export default Home;
