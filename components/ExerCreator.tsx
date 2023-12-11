import { ScrollView, View, Text, TextInput, Button, StyleSheet, Touchable, TouchableOpacity } from "react-native";
import { useContext, useState } from "react";
import { DaysContext } from "../contexts/days";
import { Picker } from "@react-native-picker/picker";

interface Props {
    visibility: string
}

export default function ExerCreator(props: Props) {

    

    const { exercises, setExercises } = useContext(DaysContext);

    const [series, setSeries] = useState<number>(0);
    const [reps, setReps] = useState<number>(0);
    const [exercise, setExercise] = useState<string>('');


    const addExercise = (series: number, reps: number, name: string) => {
        setExercises((prevExercises: {series: number, reps: number, name: string}[]) => {
            return [...prevExercises, {series: Number(series), reps: Number(reps), name: String(name)}]
        })
    }

    if (props.visibility === 'none') {
        return null;
    }

    return (
        <View style={{ display: 'flex', backgroundColor: '#3E4552', justifyContent: 'center', alignItems: "center", width: 300, shadowColor: 'black', shadowRadius: 15, elevation: 15, borderRadius: 15}}>
                <View style={{display: "flex", flexDirection: 'row', justifyContent: 'space-between', width: '85%', marginTop: 15}}>
                    <Text style={styles.title}>Series</Text>
                    <TextInput
                        onChangeText={text => setSeries(parseInt(text))}
                        style={[styles.inputText]}
                    />
                </View>
                <View style={{display: "flex", flexDirection: 'row', justifyContent: 'space-between', width: '85%'}}>
                    <Text style={styles.title}>Reps</Text>
                    <TextInput
                        onChangeText={text => setReps(parseInt(text))}
                        style={[styles.inputText]}
                    />
                </View>
                <View style={{display: "flex", flexDirection: 'row', justifyContent: 'space-between', width: '85%'}}>
                    <Text style={[styles.title, { marginTop: 15 }]}>Difficult:</Text>
                    <View style={{display: "flex", flexDirection: 'row', justifyContent: 'space-around', width: '50%'}}>
                        <TouchableOpacity style={{backgroundColor: '#61F540', width: 30, height: 30, borderRadius: 10, display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: 20, marginBottom: 20}}>
                            
                        </TouchableOpacity>
                        <TouchableOpacity style={{backgroundColor: '#2FE4F5', width: 30, height: 30, borderRadius: 10, display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: 20, marginBottom: 20}}>
                            
                        </TouchableOpacity>
                        <TouchableOpacity style={{backgroundColor: '#ED61E6', width: 30, height: 30, borderRadius: 10, display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: 20, marginBottom: 20}}>
                            
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={{display: "flex", flexDirection: 'row', alignItems: 'center'}}>
                    <Text style={styles.title}>Exercise:</Text>
                    <Picker
                        selectedValue={exercise}
                        style={{ height: 50, width:150, color: 'white', marginTop: 12}}
                        onValueChange={(itemValue, itemIndex) => setExercise(String(itemValue))}
                    >
                        <Picker.Item label="Chest" value="Chest" />
                        <Picker.Item label="Back" value="Back" />
                        <Picker.Item label="Shoulders" value="Shoulders" />
                        <Picker.Item label="Biceps" value="Biceps" />
                        <Picker.Item label="Triceps" value="Triceps" />
                        <Picker.Item label="Legs" value="Legs" />
                        <Picker.Item label="Abs" value="Abs" />
                    </Picker>
                </View>
                
                
                <TouchableOpacity style={{backgroundColor: '#f52d56', width: 150, height: 50, borderRadius: 10, display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: 20, marginBottom: 20, shadowColor: 'black', shadowRadius: 15, elevation: 5}}
                    onPress={() => addExercise(series, reps, exercise)}
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
    }
})