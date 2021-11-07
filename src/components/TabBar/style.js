import { StyleSheet } from "react-native";
import Color from "../../util/color";
const styles = StyleSheet.create({
    mainConatiner: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: Color.white,
        margin: 10,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20


    },
    Icons: {
        fontSize: 26,
        color: Color.darkGray,
        padding: 15
    },
    plusIcon: {
        fontSize: 38,
        backgroundColor: Color.primary,
        borderRadius: 30,
        position: 'absolute',
        alignSelf: 'center',
        overflow: 'hidden',
        padding: 10,
        color: Color.white,
        top: -25
    }
});

export default styles