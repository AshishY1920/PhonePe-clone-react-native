import {StyleSheet} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';

const HomeStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D9D9D9',
  },
  PaddingContainer: {
    width: RFValue(310),
    margin: 'auto',
  },
});

export default HomeStyle;
