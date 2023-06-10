import { ScaledSheet } from "react-native-size-matters";
import { Colors } from "../../../../../utils/colors";

const styles=ScaledSheet.create({
    hotelName: {
        color: Colors.white,
        fontSize: '18@s',
        fontWeight: '500',
        marginBottom: '7@s',
      },
      hotelLocation: {
        color: Colors.white,
        fontSize: '14@s',
        fontWeight: '300',
      },
      nameAndLocationWrapper: {
        position: 'absolute',
        bottom: '17@s',
        left: '25@s',
      },
      image: {width: '256@s', height: '424@s', borderRadius: '20@s'},

      cardWrapper: {width: '256@s',marginEnd:10},
      rateWrapper: {
        position: 'absolute',
        backgroundColor: '#827f80',
        borderRadius: '25@s',
        padding: '10@s',
        right: '10@s',
        top: '15@s',
      },
})
export default styles;