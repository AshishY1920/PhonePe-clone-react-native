import {View, Text, ImageSourcePropType, FlatList, Image} from 'react-native';
import React from 'react';
import IconStyle from '../screens/styles/Icons';
import {TouchableOpacity} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {RFPercentage, RFValue} from 'react-native-responsive-fontsize';

interface IconProps {
  headTitle: string;
  IconsArray: {id: number; title: string; uri: ImageSourcePropType}[];
}

interface RenderItemProps {
  title: string;
  uri: ImageSourcePropType;
}

export const renderItem = ({item}: {item: RenderItemProps}) => (
  <TouchableOpacity activeOpacity={0.8} style={IconStyle.IconCol}>
    <Image resizeMode="cover" style={IconStyle.IconImage} source={item.uri} />
    <Text style={IconStyle.Text}>{item.title}</Text>
  </TouchableOpacity>
);

const Icons = ({headTitle, IconsArray}: IconProps) => {
  return (
    <View style={IconStyle.Container}>
      <Text style={IconStyle.Headline}>{headTitle}</Text>
      <FlatList
        columnWrapperStyle={IconStyle.IconRow}
        data={IconsArray}
        numColumns={4}
        scrollEnabled={false}
        showsVerticalScrollIndicator={false}
        nestedScrollEnabled={false}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
      />
      <View style={IconStyle.colLite}>
        <TouchableOpacity
          activeOpacity={0.8}
          style={[
            IconStyle.rowLite,
            {
              flex: 2,
              flexWrap: 'wrap',
              justifyContent: 'flex-start',
              gap: RFValue(3),
            },
          ]}>
          <Text style={IconStyle.liteText}>UPI Lite:</Text>
          <Text
            style={[
              IconStyle.liteText,
              {
                color: '#5F259E',
                fontFamily: 'Pangram-Black',
                borderBottomColor: '#5F259E',
                borderBottomWidth: 1,
              },
            ]}>
            Try Now
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.8}
          style={[IconStyle.rowLite, {flex: 4, flexWrap: 'wrap'}]}>
          <MaterialIcons
            color={'#1c1c1c'}
            size={RFPercentage(1.8)}
            name="qr-code-scanner"
          />
          <Text style={IconStyle.liteText}>UPI ID: 9823981019@ybl</Text>
          <Text>
            <Entypo
              color={'#1c1c1c'}
              size={RFPercentage(1.8)}
              name="chevron-small-right"
            />
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Icons;
