import { StyleSheet } from "react-native"
import Color from "../../util/color";
const styles = StyleSheet.create({
    parentView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderBottomWidth: 1.5,
        borderColor: Color.gray,
        paddingBottom: 15,
        paddingVertical: 10,
        margin: 10
    },
    childView: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    headerText: {
        fontSize: 24,
        fontWeight: '700',
        color: Color.primary
    },
    arrowIcon: {
        fontSize: 26,
        fontWeight: '700',
        marginRight: 10,
        color: Color.primary
    },
    headerIcons: {
        fontSize: 26,
        fontWeight: '700',
        marginRight: 10
    }

});

export default styles