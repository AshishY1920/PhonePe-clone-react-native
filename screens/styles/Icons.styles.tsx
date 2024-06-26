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
    flex: 4,
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
    fontSize: RFPercentage(1.4),
    color: '#1c1c1c',
  },
  IconImage: {
    width: RFValue(40),
    height: RFValue(40),
  },
  colLite: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: RFValue(10),
  },
  rowLite: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth: 1,
    paddingHorizontal: RFValue(8),
    paddingVertical: RFValue(6),
    borderColor: '#E0E0E0',
    borderRadius: RFValue(5),
  },
  liteText: {
    fontSize: RFPercentage(1.3),
    color: '#1c1c1c',
    fontFamily: 'Pangram-Regular',
  },
  TransferIcons: {
    width: RFValue(35),
    height: RFValue(35),
    resizeMode: 'contain',
  },
  HeadingContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: RFValue(5),
  },
  Iconbtn: {
    backgroundColor: '#F3EDF9',
    paddingHorizontal: RFValue(8),
    paddingVertical: RFValue(5),
    borderRadius: RFValue(50),
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  btnText: {
    fontFamily: 'Pangram-Bold',
    fontSize: RFPercentage(1.6),
    color: '#5F259E',
  },
});

export default IconStyle;
