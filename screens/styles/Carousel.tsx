import {StyleSheet} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import {heightPercentageToDP} from 'react-native-responsive-screen';

const CarouselStyle = StyleSheet.create({
  Image: {
    height: heightPercentageToDP('23.33%'),
    width: '100%',
    borderRadius: RFValue(10),
  },
});

export default CarouselStyle;
