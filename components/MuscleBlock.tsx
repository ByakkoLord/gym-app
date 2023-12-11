import { View, Text, Pressable, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import { LinearGradient }from "expo-linear-gradient";
import Ionicons from '@expo/vector-icons/Ionicons';
import { useState, useContext, useEffect } from "react";
import { DaysContext } from "../contexts/days";



interface Props {
    visibility: string
}

export default function MuscleBlock(props: Props) {

    const { Sunday, Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, workDay } = useContext(DaysContext);
    const { exercises } = useContext(DaysContext);

    const [textToday, setTextToday] = useState<string>('');
    type IconName = "checkmark-circle" | "checkmark-circle-outline";
    const [iconNames, setIconNames] = useState<IconName[]>(Array(3).fill("checkmark-circle"));

    let day = new Date()
    const today = day.getDay();
    useEffect(() => {
        
        if(today === 0 && Sunday === true){
            setTextToday('Sunday');
        }
        if(today === 1 && Monday === true){
            setTextToday('Monday');
        }
        if(today === 2 && Tuesday === true){
            setTextToday('Tuesday');
        }
        if(today === 3 && Wednesday === true){
            setTextToday('Wednesday');
        }
        if(today === 4 && Thursday === true){
            setTextToday('Thursday');
        }
        if(today === 5 && Friday === true){
            setTextToday('Friday');
        }
        if(today === 6 && Saturday === true){
            setTextToday('Saturday');
        }
        if(workDay === false){
            setTextToday('Rest Day');
        }
},[Sunday, Monday, Tuesday, Wednesday, Thursday, Friday, Saturday])
   
 
    if (props.visibility === 'none') {
        return null;
    }
    
    return (
        <ScrollView style={{width: '100%', height: '100%'}}>
            <View style={{ width: '100%', height: 'auto', display: "flex", justifyContent: "center", alignItems: "center" }}>
                <LinearGradient start={{x: 0.1, y:0.1}} colors={['#f52d56', '#ED61E6']} style={styles.main}>
                        <Text style={{ color: 'white', fontSize: 60, fontWeight: 'bold', textAlign: 'left', position: 'absolute', top: 12, left: 12 }}>{textToday}</Text>
                        <Text style={{ color: 'white', fontSize: 45, fontWeight: 'bold', textAlign: 'left', position: 'absolute', top: 92, left: 12 }}>Let's train:</Text>
                        <Text style={{ color: 'white', fontSize: 40, fontWeight: 'bold', textAlign: 'left', position: 'absolute', top: 142, left: 12 }}>Chest</Text>
                        <Text style={{ color: 'white', fontSize: 45, fontWeight: 'bold', textAlign: 'left', position: 'absolute', top: 232, left: 12 }}>Exercices:</Text>

                    <ScrollView horizontal={true} style={{ position: "absolute", bottom: 10 ,width: '100%', backgroundColor: '#3E4552'}}>
                        <View style={{ backgroundColor: 'yellow', width: 10, height: '100%', borderBottomRightRadius: 15 }}></View>
                        {Array.from(exercises).filter(exercise => exercise.day1.includes(today)).map((exercise, index) => {
                            
                            return (
                        <TouchableOpacity key={index} onPress={() => {setIconNames(prevIconNames => {
                            
                            const newIconNames = [...prevIconNames];
                            newIconNames[index] = newIconNames[index] === 'checkmark-circle' ? "checkmark-circle-outline" : "checkmark-circle";
                            return newIconNames;
                        });}} style={{  width: 300, height: 100, display: 'flex', justifyContent: 'center', alignItems: 'center', borderRightColor: 'gray', borderRightWidth: 2}}>
                            <Text style={{ color: 'white', fontSize: 45, fontWeight: 'bold', textAlign: 'left'}}>{exercise.name}</Text>
                            <Text style={{ color: '#CFCBBA', fontSize: 20}}>Series: {exercise.series} Reps: {exercise.reps}</Text>
                            <Ionicons style={{position: "absolute", right: 10, bottom: 3}} name={iconNames[index]} size={35} color="#FFFF" />
                        </TouchableOpacity>)}
                        )}
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