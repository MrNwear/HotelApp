import {ScaledSheet} from 'react-native-size-matters';
import {Colors} from '../../../utils/colors';

const styles = ScaledSheet.create({
  container: {
    padding: '25@s',
    // backgroundColor:'#FAFAFA'
  },
  screenTitle: {
    color: Colors.black,
    fontWeight: '500',
    fontSize: '20@s',
  },
  image: {
    height: '95@s',
    width: '95@s',
    marginEnd: 20,
    borderRadius: '10@s',
  },
  hotelCard: {
    backgroundColor: Colors.white,
    flexDirection: 'row',
    marginVertical: '35@s',
    padding: '15@s',
    borderRadius: '10@s',
  },
  hotelName:{
    color:Colors.black,
    fontSize:'18@s',
    fontWeight:'500'
  },
  hotelLocation:{
    color:Colors.description,
    fontSize:'14@s',
    fontWeight:'300'
  },
  hotelDescription:{
    fontWeight:'300',
    fontSize:'12@s',
  },
  button:{width:'44%',alignSelf:'center',marginVertical:'70@s',height:'57@s',minWidth:'165@s',alignItems:'center',justifyContent:'center',borderRadius:40}
});
export default styles;
