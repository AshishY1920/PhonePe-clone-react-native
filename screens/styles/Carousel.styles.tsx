import {StyleSheet} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';

const CarouselStyle = StyleSheet.create({
  Image: {
    height: RFValue(160),
    width: RFValue(300),
    borderRadius: RFValue(8),
  },
});

export default CarouselStyle;
