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
import Icons from '../components/Icons';

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

interface IconsArrayProps {
  id: number;
  title: string;
  uri: ImageSourcePropType;
}

const IconsArray: IconsArrayProps[] = [
  {
    id: 1,
    title: 'To Mobile Number',
    uri: require('../assets/icons/to-mobile-no.png'),
  },
  {
    id: 2,
    title: 'To Bank/ UPI ID',
    uri: require('../assets/icons/to-bank.png'),
  },
  {
    id: 3,
    title: 'To Self Account',
    uri: require('../assets/icons/self.png'),
  },
  {
    id: 4,
    title: 'Check Bank Balance',
    uri: require('../assets/icons/check-balance.png'),
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

      {/* Reanimated Carousel Component */}
      <View style={{flex: 1, margin: 'auto'}}>
        <Slider Header_Banner={Header_Banner} />
      </View>
      {/* Reanimated Carousel Component */}

      <View style={HomeStyle.PaddingContainer}>
        {/* Transfer Money Component */}
        <Icons headTitle="Transfer Money" IconsArray={IconsArray} />
        {/* Transfer Money Component */}
      </View>
    </ScrollView>
  );
};

export default Home;
