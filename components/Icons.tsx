import {View, Text, ImageSourcePropType, FlatList, Image} from 'react-native';
import React from 'react';
import IconStyle from '../screens/styles/Icons.styles';
import {TouchableOpacity} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {RFPercentage, RFValue} from 'react-native-responsive-fontsize';

interface IconProps {
  headTitle: string;
  IconsArray: {id: number; title: string; uri: ImageSourcePropType}[];
  isTransfer?: boolean;
  margin?: boolean;
  showBtn?: boolean;
}

interface RenderItemProps {
  title: string;
  uri: ImageSourcePropType;
  // isTransfer?: boolean;
}

export const renderItem = ({
  item,
  isTransfer,
}: {
  item: RenderItemProps;
  isTransfer?: boolean;
}) => (
  <TouchableOpacity activeOpacity={0.8} style={IconStyle.IconCol}>
    <Image
      resizeMode="cover"
      style={isTransfer ? IconStyle.TransferIcons : IconStyle.IconImage}
      source={item.uri}
    />
    <Text style={IconStyle.Text}>{item.title}</Text>
  </TouchableOpacity>
);

const Icons = ({
  headTitle,
  IconsArray,
  isTransfer = false,
  margin = false,
  showBtn = false,
}: IconProps) => {
  return (
    <View
      style={[
        IconStyle.Container,
        {marginVertical: margin ? RFValue(15) : RFValue(0)},
      ]}>
      <View style={IconStyle.HeadingContainer}>
        <Text style={IconStyle.Headline}>{headTitle}</Text>
        {showBtn && (
          <TouchableOpacity activeOpacity={0.8} style={IconStyle.Iconbtn}>
            <Text style={IconStyle.btnText}>View All</Text>
          </TouchableOpacity>
        )}
      </View>
      <FlatList
        columnWrapperStyle={IconStyle.IconRow}
        data={IconsArray}
        numColumns={4}
        scrollEnabled={false}
        showsVerticalScrollIndicator={false}
        nestedScrollEnabled={false}
        // renderItem={renderItem}
        renderItem={({item}) => renderItem({item, isTransfer})}
        keyExtractor={item => item.id.toString()}
      />

      {/* ELite Two column Layout Starts here */}
      {!isTransfer && (
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
      )}
      {/* ELite Two column Layout ends here */}
    </View>
  );
};

export default Icons;
