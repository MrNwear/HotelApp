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
import {Logo} from '../../../Components';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import {hotels} from '../../../utils/dummyData';
import {Button} from 'react-native-paper';

interface HotelDetailsProps {}

const HotelDetailsScreen = (props: HotelDetailsProps) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <TouchableOpacity style={{marginEnd: 20}}>
          <AntDesignIcon name="arrowleft" size={24} color={Colors.black} />
        </TouchableOpacity>

        <Text style={styles.screenTitle}>Description</Text>
      </View>
      <ScrollView>
        <View style={{flex: 1}}>
          <View style={styles.hotelCard}>
            <Image source={{uri: hotels?.[0]?.image}} style={styles.image} />
            <View style={{justifyContent: 'space-between'}}>
              <Text style={styles.hotelName}>{hotels[0].name}</Text>
              <Text style={styles.hotelLocation}>{hotels[0].location}</Text>
              <Text>Reviews</Text>
            </View>
          </View>
          <Text style={styles.hotelDescription}>{hotels[0].description}</Text>
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
