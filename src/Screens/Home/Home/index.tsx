import * as React from 'react';
import {FlatList, SafeAreaView, Text} from 'react-native';
import styles from './style';
import FeatherIcon from 'react-native-vector-icons/Feather';
import {hotels} from '../../../utils/dummyData';
import HotelCard from './Components/hotelCard';

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <FeatherIcon name="award" style={styles.awardIcon} />
      <Text style={styles.welcomeText}>Good Morning , Stephanie</Text>
      <FlatList
        horizontal
        contentContainerStyle={{marginVertical:20}}
        renderItem={({item}: any) => {
          return <HotelCard hotel={item} />;
        }}
        data={hotels}
      />
    </SafeAreaView>
  );
};

export default HomeScreen;
