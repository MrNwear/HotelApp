import { Colors } from '../../utils/colors';
import { ScaledSheet } from 'react-native-size-matters';
export const styles = ScaledSheet.create({
    textInput: {
        backgroundColor: Colors.white,
        borderRadius:'30@s',

    },
    error:{alignSelf: 'flex-start', color: Colors.error}
});
