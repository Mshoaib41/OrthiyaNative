import { StyleSheet } from "react-native"
import Color from "../util/color";
const styles = StyleSheet.create({
    backgroundImage: {
        height: 150,
        margin: 8,
        borderRadius: 15,
        overflow: 'hidden'
    },
    container: {
        flex: 1
    },
    parentIcon: {
        padding: 10
    },
    pencilIcon: {
        alignSelf: 'flex-end',
        fontSize: 16,
        backgroundColor: Color.primary,
        padding: 7,
        borderWidth: 0,
        borderRadius: 15,
        overflow: 'hidden',
        color: Color.white
    },
    imageContainer: {
        flexDirection: 'row',
        padding: 10,
        height:70
    },
    personImage: {
        height: 110,
        width: 110,
        top: -70,
        margin: 5,
        padding: 10,
        borderRadius: 200,
  

    },
    groupDetail: {
        flexDirection: "row",
        justifyContent: 'space-between',
        flexGrow:1,
        
    },
    groupName: {
        fontSize: 20,
        fontWeight: '700',
        color: Color.primary,
        padding: 10,
     
    },
    joinNow: {
        fontSize: 20,
        backgroundColor: Color.primary,
        color: Color.white,
        borderRadius: 10,
        overflow: 'hidden',
        padding: 12
    },
    groupInfo: {
        backgroundColor: Color.white,
        margin: 10,
        borderColor: Color.gray,
        borderWidth: 1,
        borderRadius: 8,
        
        
    },
    groupInfoText: {
        fontSize: 18,
        padding: 10,
        color: Color.darkGray,
        fontWeight: '500',
        margin: 10
    },
    selectionTab: {
        flexDirection: 'row',
        borderWidth: 1,
        borderColor: Color.gray,
        borderLeftWidth: 0,
        borderRightWidth: 0,
        margin: 10,
        padding: 10
    },
    selectionItems: {
        fontSize: 18,
        fontWeight: '500',
        padding: 10,
        color: Color.darkGray
    }
});

export default styles