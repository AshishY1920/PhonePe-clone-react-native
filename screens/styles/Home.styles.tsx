import {StyleSheet} from 'react-native';
import {RFPercentage, RFValue} from 'react-native-responsive-fontsize';
import {widthPercentageToDP} from 'react-native-responsive-screen';

const HomeStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D9D9D9',
  },
  PaddingContainer: {
    // width: RFValue(310),
    // margin: 'auto',
    paddingHorizontal: RFValue(10),
  },
  IconRow: {
    flex: 1,
    justifyContent: 'center',
    marginTop: RFValue(15),
    marginBottom: RFValue(15),
    gap: RFValue(10),
  },
  IconCol: {
    width: widthPercentageToDP(29),
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    // justifyContent: 'space-between',
    gap: RFValue(8),
    paddingHorizontal: RFValue(8),
    borderRadius: RFValue(8),
    paddingVertical: RFValue(12),
    backgroundColor: '#4E84DA',
  },
  IconImg: {
    width: RFValue(22),
    height: RFValue(22),
  },
  IconTitle: {
    color: 'white',
    fontFamily: 'Pangram-Bold',
    textAlign: 'left',
    fontSize: RFPercentage(1.4),
  },
});

export default HomeStyle;
