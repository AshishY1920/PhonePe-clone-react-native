import {StyleSheet} from 'react-native';
import {RFPercentage, RFValue} from 'react-native-responsive-fontsize';

const HomeStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D9D9D9',
  },
  PaddingContainer: {
    width: RFValue(310),
    margin: 'auto',
  },
  IconRow: {
    flex: 1,
    justifyContent: 'center',
    marginTop: RFValue(15),
    marginBottom: RFValue(15),
    gap: RFValue(10),
  },
  IconCol: {
    width: RFValue(96),
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: RFValue(8),
    paddingHorizontal: RFValue(15),
    borderRadius: RFValue(8),
    paddingVertical: RFValue(12),
    backgroundColor: '#4E84DA',
  },
  IconImg: {
    width: RFValue(18),
    height: RFValue(18),
  },
  IconTitle: {
    color: 'white',
    fontFamily: 'Pangram-Bold',
    textAlign: 'left',
    fontSize: RFPercentage(1.4),
  },
});

export default HomeStyle;
