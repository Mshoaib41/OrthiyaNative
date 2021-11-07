import React from "react";
import { View, Text, TouchableOpacity } from 'react-native'
import styles from "./style";
import { AntDesign } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
const Header = () => {

    return (
        <View style={styles.parentView}>
            <View style={styles.childView}>
                <TouchableOpacity activeOpacity={0.6}>
                    <AntDesign name="arrowleft" style={styles.arrowIcon} />
                </TouchableOpacity>

                <Text style={styles.headerText}>Group Info</Text>
            </View>

            <View style={styles.childView}>
                <TouchableOpacity activeOpacity={0.6}>
                    <AntDesign name="search1" style={styles.headerIcons} />
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.6}>
                    <Feather name="menu" style={styles.headerIcons} />
                </TouchableOpacity>

            </View>


        </View>
    );
};
export default Header;