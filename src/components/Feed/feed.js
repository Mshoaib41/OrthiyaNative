import React from "react";
import { View, Text, Image, TouchableOpacity } from 'react-native'
import styles from "./style";
import { MaterialIcons } from '@expo/vector-icons';
import Images from "../../../assets/images";
import { AntDesign } from '@expo/vector-icons';

const Feed = (props) => {
    return (
        <View style={styles.parentView}>
            <View style={styles.childView}>
                <View style={styles.detailView}>
                    <View>
                        <View style={styles.personDetailParent} >
                            <Image source={Images.menpic} resizeMode='stretch' style={styles.peronImage} />
                            <View>
                                <Text style={styles.personName} >Jerome Gaveau</Text>
                                <Text style={styles.groupName}>Group B</Text>
                            </View>
                        </View>
                        <View></View>
                    </View>
                    <View>
                        <Text style={styles.date} >8 Nov</Text>
                    </View>
                </View>
                <View>
                    <TouchableOpacity activeOpacity={0.6}>
                        <MaterialIcons name="keyboard-arrow-down" style={styles.arrowDown} />
                    </TouchableOpacity>

                </View>
            </View>
            <Text style={styles.title}> Post Title</Text>
            <Text style={styles.feedDetail}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry standard dummy text ever since the 1500s.

            </Text>

            <View style={styles.imageContainer}>
                <Image source={props.source} resizeMode='cover' style={styles.feedImage} />
            </View>
            <View style={styles.postMenu}>
                <View style={styles.postLike}>
                    <TouchableOpacity activeOpacity={0.6}>
                        <Text style={styles.agree}>I agree</Text>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.6}>
                        <Text style={styles.discuss}>discussion</Text>
                    </TouchableOpacity>


                </View>
                <View style={styles.postMenu1}>
                    <TouchableOpacity>
                        <AntDesign name="sharealt" style={styles.shareIcon} />
                    </TouchableOpacity>

                </View>
            </View>
        </View>

    );
}

export default Feed