import {ScaledSheet} from 'react-native-size-matters';
import {Colors} from '../../utils/colors';

const styles = ScaledSheet.create({
  container: {
    height: '60@s',
    width: '60@s',
    backgroundColor: Colors.primary,
    borderRadius: '10@s',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontStyle: 'italic',
    color: Colors.white,
    fontSize: '32@s',
    fontWeight: '600',
  },
});
export default styles;
