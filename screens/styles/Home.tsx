import {StyleSheet} from 'react-native';
import {RFPercentage, RFValue} from 'react-native-responsive-fontsize';
import {widthPercentageToDP} from 'react-native-responsive-screen';

const HomeStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D9D9D9',
  },
  PaddingContainer: {
    // paddingHorizontal: RFValue(15),
    width: RFValue(300),
    // width: parseFloat(RFPercentage('100%')),
    margin: 'auto',
  },
});

export default HomeStyle;
