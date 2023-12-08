import { View, Text, Pressable, StyleSheet } from "react-native";

export default function WaterBlock() {
    let counter = 0

    function WaterType() {

    }
    
    function WaterCounter() {
        counter++
        console.log(counter)
    }

    return (
        <View style={{width: '100%'}}>
            <View style={styles.WaterBar}>
                <View style={styles.WaterBarIn}>

                </View>
            </View>
            <Pressable onPress={WaterCounter} style={styles.headerOptions}></Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    headerOptions: {
        width: 50,
        height: 50,
        backgroundColor: 'red',
        borderRadius: 10,
        margin: 10
    },
    WaterBarIn: {
        position: 'absolute',
        left: -400,
        width: '100%',
        height: 25,
        backgroundColor: 'blue',
        borderRadius: 10,
        margin: 10
    },
    WaterBar: {
        display: 'flex',
        overflow: 'hidden',
        padding: 5,
        justifyContent: 'center',
        alignItems: 'center',
        width: '90%',
        height: 35,
        backgroundColor: 'green',
        borderRadius: 10,
        margin: 10
    }
})