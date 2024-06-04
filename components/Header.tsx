import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import HeaderStyle from '../screens/styles/Header';
import {RFPercentage, RFValue} from 'react-native-responsive-fontsize';
import AntDesign from 'react-native-vector-icons/AntDesign';

// interface HeaderProps {
//   isOk?: boolean;
// }

const Header = () => {
  return (
    <View style={HeaderStyle.HeaderContainer}>
      <View style={[HeaderStyle.HeaderIconContainer, {flex: 4}]}>
        <View>
          <Image
            style={HeaderStyle.userIcon}
            source={require('../assets/icons/user.png')}
          />
        </View>
        <View>
          <TouchableOpacity activeOpacity={0.8} style={HeaderStyle.leftSide}>
            <Text style={HeaderStyle.StaticHeader}>Add Address</Text>
            <Text>
              <AntDesign
                name="caretdown"
                size={RFPercentage(1.3)}
                color={'white'}
              />
            </Text>
          </TouchableOpacity>
          <Text style={HeaderStyle.Address}>Wagle Estate</Text>
        </View>
      </View>
      <View
        style={[
          HeaderStyle.HeaderIconContainer,
          {flex: 4, justifyContent: 'flex-end', gap: RFValue(15)},
        ]}>
        <TouchableOpacity activeOpacity={0.8}>
          <Image
            style={HeaderStyle.HeaderIcons}
            source={require('../assets/icons/Frame.png')}
          />
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.8}>
          <Image
            style={HeaderStyle.HeaderIcons}
            source={require('../assets/icons/ri_notification-3-line.png')}
          />
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.8}>
          <Image
            style={HeaderStyle.HeaderIcons}
            source={require('../assets/icons/mdi_question-mark-circle-outline.png')}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Header;
