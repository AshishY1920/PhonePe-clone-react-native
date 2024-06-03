import {StyleSheet} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';

const HomeStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D9D9D9',
  },
  PaddingContainer: {
    paddingHorizontal: RFValue(15),
  },
});

export default HomeStyle;
