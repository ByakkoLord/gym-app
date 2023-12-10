import { View, Text, Pressable, StyleSheet, ScrollView } from "react-native";
import { LinearGradient }from "expo-linear-gradient";


interface Props {
    visibility: string
}

export default function MuscleBlock(props: Props) {

    let today = 'Saturday'

    if (props.visibility === 'none') {
        return null;
    }
    
    return (
        <ScrollView style={{width: '100%', height: '100%'}}>
            <View style={{ width: '100%', height: '100%', display: "flex", justifyContent: "center", alignItems: "center" }}>

                <LinearGradient start={{x: 0.1, y:0.1}} colors={['#f52d56', '#ED61E6']} style={styles.main}>
                    <Text style={{ color: 'white', fontSize: 60, fontWeight: 'bold', textAlign: 'left', position: 'absolute', top: 12, left: 12 }}>{today}</Text>
                    <Text style={{ color: 'white', fontSize: 45, fontWeight: 'bold', textAlign: 'left', position: 'absolute', top: 92, left: 12 }}>Let's train:</Text>
                    <Text style={{ color: 'white', fontSize: 45, fontWeight: 'bold', textAlign: 'left', position: 'absolute', top: 162, left: 12 }}>Chest</Text>
                    <Text style={{ color: 'white', fontSize: 45, fontWeight: 'bold', textAlign: 'left', position: 'absolute', top: 232, left: 12 }}>Exercices:</Text>
                
                <ScrollView horizontal={true} style={{ position: "absolute", bottom: 10 ,width: '100%', backgroundColor: '#3E4552'}}>
                    <View style={{ backgroundColor: 'yellow', width: 10, height: '100%', borderBottomRightRadius: 15 }}></View>
                    <View style={{  width: 300, height: 100, display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                        <Text style={{ color: 'white', fontSize: 45, fontWeight: 'bold', textAlign: 'left'}}>Bench Press</Text>
                    </View>
                    <View style={{  width: 300, height: 100, display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                        <Text style={{ color: 'white', fontSize: 45, fontWeight: 'bold', textAlign: 'left'}}>Bench Press</Text>
                    </View>
                </ScrollView>
                </LinearGradient>    
                
            
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    main:{
        marginTop: 100,
        alignItems: 'center',
        width: 400,
        height: 400,
        borderRadius: 10,
        shadowColor: 'black', shadowRadius: 10, elevation: 50
    }
})