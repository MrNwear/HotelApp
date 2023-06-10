import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { hotelType } from '../../../../../utils/types';
import styles from './style';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { HomeStackNavigatorParams } from '../../../../../navigation/HomeStack';

interface HotelCardProps {
    hotel:hotelType
}

const HotelCard = (props: HotelCardProps) => {
    const {hotel}=props;
    const navigation:NativeStackNavigationProp<HomeStackNavigatorParams>=useNavigation();
    const onCardPress=()=>navigation.navigate('HotelDetails',{hotel:hotel});
  return (
    <TouchableOpacity style={styles.cardWrapper} onPress={onCardPress}>
            <Image source={{uri: hotel.image}} style={styles.image} />
            <View style={styles.nameAndLocationWrapper}>
              <Text style={styles.hotelName}>{hotel.name}</Text>
              <Text style={styles.hotelLocation}>{hotel.location}</Text>
            </View>
            <View style={styles.rateWrapper}>
              <Text style={{color: '#fff'}}>
                <AntDesignIcon name="star" color={'#FD9942'} size={20} />
                {hotel.stars}{' '}
              </Text>
            </View>
          </TouchableOpacity>
  );
};

export default HotelCard;
