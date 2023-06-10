import * as React from 'react';
import {
  Text,
  View,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
import styles from './style';
import {Colors} from '../../../utils/colors';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import {Button} from 'react-native-paper';
import { hotelType } from '../../../utils/types';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';

interface HotelDetailsProps {}
type routeParams = {
  params: {hotel: hotelType};
};
const HotelDetailsScreen = (props: HotelDetailsProps) => {
  const route: RouteProp<routeParams> = useRoute();
  const {hotel} = route.params;
  const navigation=useNavigation();
  const onBackPress=()=>navigation.goBack();
  return (
    <SafeAreaView style={styles.container}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <TouchableOpacity style={{marginEnd: 20}} onPress={onBackPress}>
          <AntDesignIcon name="arrowleft" size={24} color={Colors.black} />
        </TouchableOpacity>

        <Text style={styles.screenTitle}>Description</Text>
      </View>
      <ScrollView>
        <View style={{flex: 1}}>
          <View style={styles.hotelCard}>
            <Image source={{uri: hotel.image}} style={styles.image} />
            <View style={{justifyContent: 'space-between'}}>
              <Text style={styles.hotelName}>{hotel.name}</Text>
              <Text style={styles.hotelLocation}>{hotel.location}</Text>
             <View style={{flexDirection:'row',alignItems:'center'}}>

              <Text style={{color: '#FD9942'}}>
                <AntDesignIcon name="star" color={'#FD9942'} size={20}  />{' '}
                {hotel.stars}{' '}
              </Text>
              <Text>{`(${hotel.reviews} Reviews)`}</Text>

             </View>
            </View>
          </View>
          <Text style={styles.hotelDescription}>{hotel.description}</Text>
          <Button
            mode="contained"
            buttonColor={Colors.primary}
            style={styles.button}
            labelStyle={{fontSize: 18}}>
            Book
          </Button>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HotelDetailsScreen;
