import React, { useState, useEffect } from "react";
import { View, Text, ImageBackground, TouchableOpacity, Image, FlatList } from 'react-native'
import { SimpleLineIcons } from '@expo/vector-icons';
import Images from "../../assets/images";
import styles from "./style";
import Color from "../util/color";
import Feed from "../components/Feed/feed";
import TabBar from "../components/TabBar";
import dog from "../api/dog";


const MainScreen = () => {

    const [tab, setTab] = useState(1);
    const [result, setResult] = useState(null);
    const getData = async () => {
        const response = await dog.get(`/breed/hound/images/random/${3}`);
        setResult(response.data.message)

    }
    useEffect(() => { getData() }, [])
    return (
        <View style={styles.container}>

            <FlatList
                data={result}
                ListHeaderComponent={() => (
                    <>
                        <ImageBackground resizeMode='cover' source={Images.backGroundImage} style={styles.backgroundImage}>
                            <TouchableOpacity activeOpacity={0.6} style={styles.parentIcon}>
                                <SimpleLineIcons name="pencil" style={styles.pencilIcon} />
                            </TouchableOpacity>
                        </ImageBackground>
                        <View style={styles.imageContainer}>
                            <View >
                                <Image source={Images.personImage} resizeMode='contain' style={styles.personImage} />

                            </View>

                            <View style={styles.groupDetail}>
                                <Text style={styles.groupName}>Group Name</Text>
                                <TouchableOpacity activeOpacity={0.6}>
                                    <Text style={styles.joinNow}>Join Group</Text>
                                </TouchableOpacity>
                            </View>

                        </View>
                        <View style={styles.groupInfo}>
                            <Text style={styles.groupInfoText} >Group Info</Text>
                        </View>
                        <View style={styles.selectionTab} >
                            <TouchableOpacity onPress={() => { setTab(0) }} activeOpacity={0.6}>
                                <Text style={[styles.selectionItems, tab === 0 && { color: Color.black }]}>Topics</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => { setTab(1) }} activeOpacity={0.6}>
                                <Text style={[styles.selectionItems, tab === 1 && { color: Color.black }]}>Photo</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => { setTab(2) }} activeOpacity={0.6}>
                                <Text style={[styles.selectionItems, tab === 2 && { color: Color.black }]}>Vedio</Text>
                            </TouchableOpacity>
                        </View>
                    </>
                )}
                keyExtractor={(item, index) => index.toString()}
                showsVerticalScrollIndicator={false}
                renderItem={({ item }) => (
                    <Feed
                        source={{ uri: item }}
                    />

                )}
            />
            <TabBar />
        </View>
    );
}

export default MainScreen