import {ScaledSheet} from 'react-native-size-matters';
import {Colors} from '../../utils/colors';

const styles = ScaledSheet.create({
  container: {
    backgroundColor: Colors.primary,
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: '16@s',
    borderRadius: '30@s',
    flexDirection: 'row',
    borderWidth:.8,
    borderColor:Colors.primary
  },
  title: {color: '#fff', fontWeight: '500', fontSize: '16@s'},
  icon:{fontSize:'18@s',color:Colors.white}
});
export default styles;
