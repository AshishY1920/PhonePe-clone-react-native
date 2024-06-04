import {Image, ImageSourcePropType, View} from 'react-native';
import React from 'react';
import Carousel from 'react-native-reanimated-carousel';
import CarouselStyle from '../screens/styles/Carousel';
import {RFValue} from 'react-native-responsive-fontsize';

interface SliderProps {
  // width: number;
  Header_Banner: {uri: ImageSourcePropType}[];
}

const Slider = ({Header_Banner}: SliderProps) => {
  return (
    <Carousel
      loop
      width={RFValue(320)}
      height={RFValue(160)}
      autoPlay={true}
      data={[...new Array(Header_Banner.length).keys()]}
      //   onSnapToItem={index => setActiveIndex(index)}
      scrollAnimationDuration={1000}
      mode="parallax"
      renderItem={({index}) => (
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
          }}>
          {Header_Banner[index] && Header_Banner[index].uri && (
            <Image
              resizeMode="cover"
              style={CarouselStyle.Image}
              source={Header_Banner[index].uri}
            />
          )}
        </View>
      )}
    />
  );
};

export default Slider;
