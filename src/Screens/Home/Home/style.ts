import {ScaledSheet} from 'react-native-size-matters';
import {Colors} from '../../../utils/colors';

const styles = ScaledSheet.create({
  container: {
    marginHorizontal: '25@s',
  },
  welcomeText: {
    color: Colors.black,
    fontSize: '26@s',
    fontWeight: '400',
  },
  awardIcon: {
    alignSelf: 'flex-end',
    color: Colors.gray,
    marginVertical: '35@s',
    fontSize: '20@s',
  },
  
});
export default styles;
