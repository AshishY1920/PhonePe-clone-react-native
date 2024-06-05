import {StyleSheet} from 'react-native';
import {RFPercentage, RFValue} from 'react-native-responsive-fontsize';

const HeaderStyle = StyleSheet.create({
  HeaderContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#5F259E',
    paddingHorizontal: RFValue(15),
    paddingVertical: RFValue(10),
  },
  HeaderIcons: {
    width: RFValue(20),
    height: RFValue(20),
  },
  HeaderIconContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: RFValue(8),
  },
  userIcon: {
    width: RFValue(40),
    height: RFValue(40),
    borderRadius: RFValue(10),
  },
  StaticHeader: {
    fontFamily: 'Pangram-Bold',
    color: 'white',
    fontSize: RFPercentage(2),
  },
  Address: {
    fontFamily: 'Pangram-Regular',
    color: '#E0E0E0',
    fontSize: RFPercentage(1.5),
  },
  leftSide: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: RFValue(5),
  },
});

export default HeaderStyle;
