import React from "react";
import { View, TouchableOpacity } from 'react-native'
import { SimpleLineIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import styles from "./style";


const TabBar = () => {
    return (
        <View style={styles.mainConatiner}>
            <TouchableOpacity activeOpacity={0.6}>
                <SimpleLineIcons name="home" style={styles.Icons} />
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.6}>
                <MaterialCommunityIcons name="calendar-range" style={styles.Icons} />
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.6}>
                <View>
                    <MaterialCommunityIcons name="plus" style={styles.plusIcon} />
                </View>
            </TouchableOpacity >
            <TouchableOpacity activeOpacity={0.6}>
                <MaterialCommunityIcons name="bell-outline" style={styles.Icons} />
            </TouchableOpacity>

            <TouchableOpacity activeOpacity={0.6}>
                <Ionicons name="person-outline" style={styles.Icons} />
            </TouchableOpacity>

        </View>
    );
}

export default TabBar