import { View, Text, Pressable, StyleSheet, ScrollView } from "react-native";

interface Props {
    visibility: string
}

export default function CardioBlock(props: Props) {

    if (props.visibility === 'none') {
        return null;
    }
    
    return (
        <ScrollView style={{width: '100%', height: '100%'}}>
            <View style={styles.main}>
                <ScrollView horizontal={true} style={{display:"flex", flexDirection: "row"}}>
                    <View style={{width: 400, height: 400, backgroundColor: 'white', marginRight: 50}}>

                    </View>
                    <View style={{width: 400, height: 400, backgroundColor: 'white', marginRight: 50}}>

                    </View>
                    <View style={{width: 400, height: 400, backgroundColor: 'white', marginRight: 50}}>

                    </View>
                    <View style={{width: 400, height: 400, backgroundColor: 'white', marginRight: 50}}>

                    </View>
                </ScrollView>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    main:{
        marginTop: 100,
        alignItems: 'center',
        width: '100%',
        height: '100%',
        backgroundColor: '#2C313A',
        borderRadius: 10,
    }
})