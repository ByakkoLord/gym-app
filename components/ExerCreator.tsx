import { ScrollView, View, Text, TextInput, Button, StyleSheet, Touchable, TouchableOpacity } from "react-native";
import { useContext, useState } from "react";
import { DaysContext } from "../contexts/days";
import { Picker } from "@react-native-picker/picker";

interface Props {
    visibility: string
}

export default function ExerCreator(props: Props) {

    const [difficult, setDifficult] = useState<number[]>();

    
    const [bgColor, setBgColor] = useState<string>('#3E4552');
    const [textColor, setTextColor] = useState<string>('white');
    const [bgColor1, setBgColor1] = useState<string>('#3E4552');
    const [textColor1, setTextColor1] = useState<string>('white');
    const [bgColor2, setBgColor2] = useState<string>('#3E4552');
    const [textColor2, setTextColor2] = useState<string>('white');
    const [bgColor3, setBgColor3] = useState<string>('#3E4552');
    const [textColor3, setTextColor3] = useState<string>('white');
    const [bgColor4, setBgColor4] = useState<string>('#3E4552');
    const [textColor4, setTextColor4] = useState<string>('white');
    const [bgColor5, setBgColor5] = useState<string>('#3E4552');
    const [textColor5, setTextColor5] = useState<string>('white');
    const [bgColor6, setBgColor6] = useState<string>('#3E4552');
    const [textColor6, setTextColor6] = useState<string>('white');


    const { exercises, setExercises } = useContext(DaysContext);

    const [series, setSeries] = useState<number>(0);
    const [reps, setReps] = useState<number>(0);
    const [exercise, setExercise] = useState<string>('');
    const [day1, setDay1] = useState<number[]>([]);

    const toggleDay = (day: number) => {
        setDay1((prevDay: number[]) => {
            if(prevDay.includes(day)){
                return prevDay.filter((d) => d !== day)
            }else{
                return [...prevDay, day]
            }
        })        
    }

    const addExercise = (series: number, reps: number, name: string, day1: number[]) => {
        setExercises((prevExercises: {series: number, reps: number, name: string, day1: number[]}[]) => {
            return [...prevExercises, {series: Number(series), reps: Number(reps), name: String(name), day1: day1}]
        })
    }

    
    

    if (props.visibility === 'none') {
        return null;
    }

    const SwitchDayOn = (day: string) => {
        if(day === 'Sunday'){
            if(bgColor === '#3E4552'){
                setBgColor('#f52d56');
                setTextColor('#3E4552');
            }else{
                setBgColor('#3E4552');
                setTextColor('white');
            }
        }
        if(day === 'Monday'){
            if(bgColor1 === '#3E4552'){
                setBgColor1('#f52d56');
                setTextColor1('#3E4552');
            }else{
                setBgColor1('#3E4552');
                setTextColor1('white');
            }
        }
        if(day === 'Tuesday'){
            if(bgColor2 === '#3E4552'){
                setBgColor2('#f52d56');
                setTextColor2('#3E4552');
            }else{
                setBgColor2('#3E4552');
                setTextColor2('white');
            }
        }
        if(day === 'Wednesday'){
            if(bgColor3 === '#3E4552'){
                setBgColor3('#f52d56');
                setTextColor3('#3E4552');
            }else{
                setBgColor3('#3E4552');
                setTextColor3('white');
            }
        }
        if(day === 'Thursday'){
            if(bgColor4 === '#3E4552'){
                setBgColor4('#f52d56');
                setTextColor4('#3E4552');
            }else{
                setBgColor4('#3E4552');
                setTextColor4('white');
            }
        }
        if(day === 'Friday'){
            if(bgColor5 === '#3E4552'){
                setBgColor5('#f52d56');
                setTextColor5('#3E4552');
            }else{
                setBgColor5('#3E4552');
                setTextColor5('white');
            }
        }
        if(day === 'Saturday'){
            if(bgColor6 === '#3E4552'){
                setBgColor6('#f52d56');
                setTextColor6('#3E4552');
            }else{
                setBgColor6('#3E4552');
                setTextColor6('white');
            }
        }
    }

    
    

    return (
        <View style={{ display: 'flex', backgroundColor: '#3E4552', justifyContent: 'center', alignItems: "center", width: 440, shadowColor: 'black', shadowRadius: 15, elevation: 15, borderRadius: 15, position: "absolute", top: 200, left: 20}}>
                <View style={{display: "flex", flexDirection: 'row', justifyContent: 'space-between', width: '85%', marginTop: 15}}>
                    <Text style={styles.title}>Series</Text>
                    <TextInput
                        keyboardType="numeric"
                        onChangeText={text => setSeries(parseInt(text))}
                        style={[styles.inputText]}
                    />
                </View>
                <View style={{display: "flex", flexDirection: 'row', justifyContent: 'space-between', width: '85%'}}>
                    <Text style={styles.title}>Reps</Text>
                    <TextInput
                        keyboardType="numeric"
                        onChangeText={text => setReps(parseInt(text))}
                        style={[styles.inputText]}
                    />
                </View>

                <View style={{display: "flex", flexDirection: 'row', alignItems: 'center'}}>
                    <Text style={styles.title}>Exercise:</Text>
                    <Picker
                        selectedValue={exercise}
                        style={{ height: 50, width:200, color: 'white', marginTop: 12}}
                        onValueChange={(itemValue) => setExercise(itemValue)}
                    >
                        <Picker.Item label="Leg Extension" value="Leg.Ex" />
                        <Picker.Item label="Squat" value="Squat" />
                        <Picker.Item label="Stiff" value="Stiff" />
                        <Picker.Item label="Hamstring Curl Machine" value="H.C.M" />
                        <Picker.Item label="Panturrilha (G)" value="Pant (G)" />
                        <Picker.Item label="Panturrilha (P)" value="Pant (P)" />
                        <Picker.Item label="Supino com Barra" value="Supino/Barra" />
                        <Picker.Item label="Peck Deck" value="Peck Deck" />
                        <Picker.Item label="Supino Sentado" value="Supino/Sent" />
                        <Picker.Item label="Remada Curvada" value="Remada/Curv" />
                        <Picker.Item label="Voador Inverso" value="Voador/Inv" />
                        <Picker.Item label="" value="" />
                        <Picker.Item label="" value="" />
                        <Picker.Item label="" value="" />
                    </Picker>
                </View>

                <View style={{ display: 'flex', flexDirection: 'row', width: '100%', justifyContent: 'center', alignItems: 'center' }}>
                    <TouchableOpacity onPress={() => {let day = 'Sunday' ;SwitchDayOn(day); toggleDay(0)}} style={[styles.daysCircle, { backgroundColor: bgColor }]}>
                        <Text style={{ color: textColor, fontSize: 25, fontWeight: 'bold' }}>S</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => {let day = 'Monday' ;SwitchDayOn(day); toggleDay(1)}} style={[styles.daysCircle, { backgroundColor: bgColor1 }]}>
                        <Text style={{ color: textColor1, fontSize: 25, fontWeight: 'bold' }}>M</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => {let day = 'Tuesday' ;SwitchDayOn(day); toggleDay(2)}} style={[styles.daysCircle, { backgroundColor: bgColor2 }]}>
                        <Text style={{ color: textColor2, fontSize: 25, fontWeight: 'bold' }}>T</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => {let day = 'Wednesday' ;SwitchDayOn(day); toggleDay(3)}} style={[styles.daysCircle, { backgroundColor: bgColor3 }]}>
                        <Text style={{ color: textColor3, fontSize: 25, fontWeight: 'bold' }}>W</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => {let day = 'Thursday' ;SwitchDayOn(day); toggleDay(4)}} style={[styles.daysCircle, { backgroundColor: bgColor4 }]}>
                        <Text style={{ color: textColor4, fontSize: 25, fontWeight: 'bold' }}>T</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => {let day = 'Friday' ;SwitchDayOn(day); toggleDay(5)}} style={[styles.daysCircle, { backgroundColor: bgColor5 }]}>
                        <Text style={{ color: textColor5, fontSize: 25, fontWeight: 'bold' }}>F</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => {let day = 'Saturday' ;SwitchDayOn(day); toggleDay(6)}} style={[styles.daysCircle, { backgroundColor: bgColor6 }]}>
                        <Text style={{ color: textColor6, fontSize: 25, fontWeight: 'bold' }}>S</Text>
                    </TouchableOpacity>
                </View>
                
                
                <TouchableOpacity style={{backgroundColor: '#f52d56', width: 150, height: 50, borderRadius: 10, display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: 20, marginBottom: 20, shadowColor: 'black', shadowRadius: 15, elevation: 5}}
                    onPress={() => addExercise(series, reps, exercise, day1)}
                >
                    <Text style={{color: 'white', fontSize: 25, fontWeight: 'bold'}}>Add</Text>
                </TouchableOpacity>
        </View>
        
    )
}

const styles = StyleSheet.create({
    inputText: {
        width: 50,
        color: 'white',
        height: 40,
        marginBottom: 20,
        borderBottomColor: '#f52d56',
        borderBottomWidth: 1,
        padding: 10,
        fontSize: 20,
    },
    title:{
        marginTop: 10,
        fontSize: 30,
        fontWeight: 'bold',
        color: '#f52d56',
    },
    daysCircle: {
        width: 40,
        height: 40,
        borderRadius: 25,
        display: 'flex',
        alignItems: 'center',
        borderColor: '#f52d56',
        borderWidth: 1,
        justifyContent: 'center',
        margin: 10
    }
})