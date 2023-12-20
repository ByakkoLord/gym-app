import { View, Text, StyleSheet } from "react-native";
import { useState } from "react";
import Ionicons from '@expo/vector-icons/Ionicons';

interface Props {
    iconMode: 'flame' | 'flame-outline',
    iconMode1: 'flame' | 'flame-outline',
    iconMode2: 'flame' | 'flame-outline',
    iconMode3: 'flame' | 'flame-outline',
    iconMode4: 'flame' | 'flame-outline',
    iconMode5: 'flame' | 'flame-outline',
    iconMode6: 'flame' | 'flame-outline',
}

export default function StreakDayHeader(props: Props) {
    const { iconMode, iconMode1, iconMode2, iconMode3, iconMode4, iconMode5, iconMode6 } = props;

    return (
        <View style={{ backgroundColor: '#3E4552', width: '100%', height: 150, shadowColor: 'black', shadowRadius: 10, elevation: 50, display: 'flex', justifyContent: "center", alignItems: "center"}}>
            <View style={{display: 'flex', flexDirection: 'row' ,borderBottomColor: '#4FF2F9', borderBottomWidth: 2 , width: '92%', paddingBottom: 20, marginTop: 25, justifyContent: 'center'}}>
                <View style={[styles.fireBlocks, { borderRightColor: '#576173', borderRightWidth: 2, display: 'flex', flexDirection: 'column'}]}><Ionicons style={{}} name={iconMode} size={40} color="#C22A16"/><Text style={[styles.text1, { color: 'white' }]}>Day 1</Text></View>
                <View style={[styles.fireBlocks, { borderRightColor: '#576173', borderRightWidth: 2, display: 'flex', flexDirection: 'column'}]}><Ionicons style={{}} name={iconMode1} size={40} color="#272B45"/><Text style={[styles.text1, { color: '#272B45' }]}>Day 2</Text></View>
                <View style={[styles.fireBlocks, { borderRightColor: '#576173', borderRightWidth: 2, display: 'flex', flexDirection: 'column'}]}><Ionicons style={{}} name={iconMode2} size={40} color="#272B45"/><Text style={[styles.text1, { color: '#272B45' }]}>Day 3</Text></View>
                <View style={[styles.fireBlocks, { borderRightColor: '#576173', borderRightWidth: 2, display: 'flex', flexDirection: 'column'}]}><Ionicons style={{}} name={iconMode3} size={40} color="#272B45"/><Text style={[styles.text1, { color: '#272B45' }]}>Day 4</Text></View>
                <View style={[styles.fireBlocks, { borderRightColor: '#576173', borderRightWidth: 2, display: 'flex', flexDirection: 'column'}]}><Ionicons style={{}} name={iconMode4} size={40} color="#272B45"/><Text style={[styles.text1, { color: '#272B45' }]}>Day 5</Text></View>
                <View style={[styles.fireBlocks, { borderRightColor: '#576173', borderRightWidth: 2, display: 'flex', flexDirection: 'column'}]}><Ionicons style={{}} name={iconMode5} size={40} color="#272B45"/><Text style={[styles.text1, { color: '#272B45' }]}>Day 6</Text></View>
                <View style={[styles.fireBlocks, { display: 'flex', flexDirection: 'column'}]}><Ionicons style={{}} name={iconMode6} size={40} color="#272B45"/><Text style={[styles.text1, { color: '#272B45' }]}>Day 7</Text></View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    fireBlocks: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: 50,
        backgroundColor: '#3E4552',
        width: 60,
        shadowColor: 'black',
        shadowRadius: 10,
        marginTop: 10
    },
    text1: {
    fontSize: 15,
        fontWeight: 'bold',
    },
})