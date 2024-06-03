import {View, Text, ImageSourcePropType, FlatList, Image} from 'react-native';
import React from 'react';
import IconStyle from '../screens/styles/Icons';
import {RFValue} from 'react-native-responsive-fontsize';
import {TouchableOpacity} from 'react-native';

interface IconProps {
  headTitle: string;
  IconsArray: {id: string; title: string; uri: ImageSourcePropType}[];
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
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default Icons;
