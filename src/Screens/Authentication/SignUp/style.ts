import {ScaledSheet} from 'react-native-size-matters';

const styles = ScaledSheet.create({
  container: {flex: 1, marginHorizontal: '25@s', marginVertical: '40@s'},
  textInput: {
    borderRadius: '30@s',
  },
  label: {
    color: '#3E3E3E',
    fontSize: '14@s',
    fontWeight: '300',
  },
});
export default styles;
