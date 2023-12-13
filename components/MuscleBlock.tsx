import { View, Text, Pressable, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import { LinearGradient }from "expo-linear-gradient";
import Ionicons from '@expo/vector-icons/Ionicons';
import { useState, useContext, useEffect } from "react";
import { DaysContext } from "../contexts/days";

import Stats from "./Stats";
import BodyPrg from "./BodyPrg";



interface Props {
    visibility: string
}

export default function MuscleBlock(props: Props) {

    const { Sunday, Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, workDay } = useContext(DaysContext);
    const { exercises } = useContext(DaysContext);

    const [textToday, setTextToday] = useState<string>('');
    type IconName = "checkmark-circle" | "checkmark-circle-outline";
    const [iconNames, setIconNames] = useState<IconName[]>(new Array(exercises.length).fill("checkmark-circle-outline"));

    const [task, setTask] = useState<string>('');
    const [place, setPlace] = useState<number>(232);

    const [grColor, setGrColor] = useState<string>('#3E4552');
    const [grColor1, setGrColor1] = useState<string>('#3E4552');

    function getRandomColor() {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let index = 0; index < 6; index++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    let day = new Date()
    const today = day.getDay();
    useEffect(() => {
        
        if(today === 0 && Sunday === true){
            setTextToday('Sunday');
            setGrColor(getRandomColor());
            
        }
        if(today === 1 && Monday === true){
            setTextToday('Monday');
            setGrColor(getRandomColor());
            setGrColor1(getRandomColor());
        }
        if(today === 2 && Tuesday === true){
            setTextToday('Tuesday');
            setGrColor(getRandomColor());
            setGrColor1(getRandomColor());
        }
        if(today === 3 && Wednesday === true){
            setTextToday('Wednesday');
            setGrColor(getRandomColor());
            setGrColor1(getRandomColor());
        }
        if(today === 4 && Thursday === true){
            setTextToday('Thursday');
            setGrColor(getRandomColor());
            setGrColor1(getRandomColor());
        }
        if(today === 5 && Friday === true){
            setTextToday('Friday');
            setGrColor(getRandomColor());
            setGrColor1(getRandomColor());
        }
        if(today === 6 && Saturday === true){
            setTextToday('Saturday');
            setGrColor(getRandomColor());
            setGrColor1(getRandomColor());
        }
        if(workDay === false){
            setTextToday('Rest Day');
            setTask('Enjoy your day off!');
            setPlace(80);
            setGrColor(getRandomColor());
            setGrColor1(getRandomColor());
        }else{
            setTask('Today you have to do:');
            setPlace(232);
            setGrColor(getRandomColor());
            setGrColor1(getRandomColor());
        }
},[Sunday, Monday, Tuesday, Wednesday, Thursday, Friday, Saturday])
   
 
    if (props.visibility === 'none') {
        return null;
    }
    
    return (
        <ScrollView style={{display: "flex", flexDirection: 'column' ,width: '100%', height: '100%'}}>
            <View style={{ width: '100%', height: 'auto', display: "flex", justifyContent: "center", alignItems: "center" }}>
                <LinearGradient start={{x: 0.1, y:0.1}} colors={[grColor, grColor1]} style={styles.main}>
                        <Text style={{ color: 'white', fontSize: 60, fontWeight: 'bold', textAlign: 'left', position: 'absolute', top: 12, left: 12 }}>{textToday}</Text>
                        <Text style={{ color: 'white', fontSize: 45, fontWeight: 'bold', textAlign: 'left', position: 'absolute', top: place, left: 12 }}>{task}</Text>

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
                <Stats />
                <BodyPrg />
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