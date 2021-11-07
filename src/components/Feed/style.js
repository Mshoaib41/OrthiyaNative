import Color from "../../util/color"
import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
    parentView: {
        backgroundColor: Color.white,
        margin: 10,
        borderRadius: 15,
        shadowOffset: {
            width: 0,
            height: 1
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.65,
        elevation: 8

    },
    childView: {
        flexDirection: 'row'
    },
    detailView: {
        flexGrow: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 20
    },
    peronImage: {
        width: 70,
        height: 70,
        borderRadius: 25,
        
    },
    personDetailParent: {
        flexDirection: 'row',
    },
    arrowDown: {
        fontSize: 28,
        padding: 7,
        color: Color.darkGray
    },
    personName: {
        fontSize: 20,
        fontWeight: '700',
        color: Color.primary,
        marginLeft: 10,
    },
    groupName: {
        fontSize: 16,
        fontWeight: '700',
        marginLeft: 10,
        marginTop: 7

    },
    date: {
        fontSize: 16,
        fontWeight: '600',

    },
    title: {
        textDecorationLine: 'underline',
        fontSize: 18,
        fontWeight: '700',
        padding: 5,
        marginLeft: 10

    },
    feedDetail: {
        marginLeft: 10,
        fontSize: 16,
        fontWeight: '500',
        lineHeight: 26,
        padding: 10
    },

    imageContainer: {
        margin: 10,
        width: '95%',
        height: 150,

    },
    feedImage: {
        borderRadius: 10,
        width: '100%',
        height: '100%',
    },
    postMenu: {
        flexDirection: 'row',
        margin: 10,
        borderTopColor: Color.gray,
        borderTopWidth: 2

    },
    postMenu1: {
        margin: 10,
    },
    postLike: {
        flexDirection: 'row',
        flexGrow: 1,
        padding: 10

    },
    agree: {
        fontSize: 20,
        fontWeight: '600',
        color: Color.primary
    },
    discuss: {
        fontSize: 20,
        fontWeight: '600',
        color: Color.primary,
        marginLeft: 15
    },
    shareIcon: {
        fontSize: 24,
        color: Color.primary
    }

});
export default styles