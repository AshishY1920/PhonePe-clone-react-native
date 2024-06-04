import {
  View,
  Text,
  ScrollView,
  Dimensions,
  Image,
  ImageSourcePropType,
  FlatList,
} from 'react-native';
import React from 'react';
import HomeStyle from './styles/Home';
import Header from '../components/Header';
import Slider from '../components/Carousel';
import Icons from '../components/Icons';
import {TouchableOpacity} from 'react-native';

interface HeaderBannerProps {
  uri: ImageSourcePropType;
}

const Header_Banner: HeaderBannerProps[] = [
  {
    uri: require('../assets/images/1.jpg'),
  },
  {
    uri: require('../assets/images/2.png'),
  },
  {
    uri: require('../assets/images/3.png'),
  },
  {
    uri: require('../assets/images/5.webp'),
  },
];

interface IconsArrayProps {
  id: number;
  title: string;
  uri: ImageSourcePropType;
  isTransfer?: boolean;
}

const TransferMoneyArr: IconsArrayProps[] = [
  {
    id: 1,
    title: 'To Mobile Number',
    uri: require('../assets/icons/to-mobile-no.png'),
  },
  {
    id: 2,
    title: 'To Bank/ UPI ID',
    uri: require('../assets/icons/to-bank.png'),
  },
  {
    id: 3,
    title: 'To Self Account',
    uri: require('../assets/icons/self.png'),
  },
  {
    id: 4,
    title: 'Check Bank Balance',
    uri: require('../assets/icons/check-balance.png'),
  },
];

const RechargePayBillsArr: IconsArrayProps[] = [
  {
    id: 1,
    title: 'Mobile Recharge',
    uri: require('../assets/icons/Frame95.png'),
  },
  {
    id: 2,
    title: 'DTH',
    uri: require('../assets/icons/Frame96.png'),
  },
  {
    id: 3,
    title: 'Electricity',
    uri: require('../assets/icons/Frame97.png'),
  },
  {
    id: 4,
    title: 'Brand Vouchers',
    uri: require('../assets/icons/Frame99.png'),
  },
  // {
  //   id: 5,
  //   title: 'Rent Payment',
  //   uri: require('../assets/icons/Frame92.png'),
  // },
  // {
  //   id: 6,
  //   title: 'Loan Repayment',
  //   uri: require('../assets/icons/Frame93.png'),
  // },
  // {
  //   id: 7,
  //   title: 'Education',
  //   uri: require('../assets/icons/Frame94.png'),
  // },
];

const IconsArraycol: IconsArrayProps[] = [
  {
    id: 1,
    uri: require('../assets/icons/image7.png'),
    title: 'PhonePe Wallet',
  },
  {
    id: 2,
    uri: require('../assets/icons/Framey.png'),
    title: 'Explore Rewards',
  },
  {
    id: 3,
    uri: require('../assets/icons/Framez.png'),
    title: 'Refer & Get ₹100',
  },
];

export const renderItem = ({item}: {item: IconsArrayProps}) => (
  <TouchableOpacity style={HomeStyle.IconCol} activeOpacity={0.8}>
    <Image resizeMode="cover" style={HomeStyle.IconImg} source={item.uri} />
    <Text style={HomeStyle.IconTitle}>{item.title}</Text>
  </TouchableOpacity>
);

const Home = () => {
  return (
    <>
      {/* Header component */}
      <Header />
      {/* Header component */}
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={HomeStyle.container}>
        {/* Reanimated Carousel Component */}
        <View style={{flex: 1, margin: 'auto'}}>
          <Slider Header_Banner={Header_Banner} />
        </View>
        {/* Reanimated Carousel Component */}

        <View style={HomeStyle.PaddingContainer}>
          {/* Transfer Money Component */}
          <Icons headTitle="Transfer Money" IconsArray={TransferMoneyArr} />
          {/* Transfer Money Component */}

          {/* 3 Icons Row starts here */}
          <FlatList
            columnWrapperStyle={HomeStyle.IconRow}
            data={IconsArraycol}
            numColumns={3}
            scrollEnabled={false}
            showsVerticalScrollIndicator={false}
            nestedScrollEnabled={false}
            renderItem={renderItem}
            keyExtractor={item => item.id.toString()}
          />
          {/* 3 Icons Row ends here */}

          {/* Recharge & Pay Bills Component starts here */}
          <Icons
            headTitle="Recharge & Pay Bills"
            IconsArray={RechargePayBillsArr}
            isTransfer={true}
          />
          {/* Recharge & Pay Bills Component ends here */}
        </View>
      </ScrollView>
    </>
  );
};

export default Home;
