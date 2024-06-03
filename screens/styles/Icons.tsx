import {StyleSheet} from 'react-native';
import {RFPercentage, RFValue} from 'react-native-responsive-fontsize';

const IconStyle = StyleSheet.create({
  Container: {
    backgroundColor: 'white',
    paddingHorizontal: RFValue(15),
    paddingVertical: RFValue(15),
    borderRadius: RFValue(12),
  },
  Headline: {
    color: '#1c1c1c',
    fontSize: RFPercentage(2.2),
    fontFamily: 'Pangram-Black',
  },
  IconRow: {
    flex: 1,
    justifyContent: 'space-between',
    marginTop: RFValue(15),
    marginBottom: RFValue(15),
  },
  IconCol: {
    width: RFValue(60),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: RFValue(5),
  },
  Text: {
    textAlign: 'center',
    fontFamily: 'Pangram-Medium',
    fontSize: RFPercentage(1.65),
    color: '#1c1c1c',
  },
  IconImage: {
    width: RFValue(40),
    height: RFValue(40),
  },
});

export default IconStyle;
