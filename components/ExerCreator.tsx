import { ScrollView, View, Text, TextInput, Button, StyleSheet } from "react-native";
import { useContext, useState } from "react";
import { DaysContext } from "../contexts/days";




export default function ExerCreator() {

    const { exercises, setExercises } = useContext(DaysContext);

    const [series, setSeries] = useState<number>(0);
    const [reps, setReps] = useState<number>(0);
    const [exercise, setExercise] = useState<string>('');

    const addExercise = (series: number, reps: number, name: string) => {
        setExercises((prevExercises: {series: number, reps: number, name: string}[]) => {
            return [...prevExercises, {series: Number(series), reps: Number(reps), name: String(name)}]
        })
    }

    return (
        <View>
                <View>
                    <Text style={styles.title}>Series</Text>
                    <TextInput
                        onChangeText={text => setSeries(parseInt(text))}
                        style={[styles.inputText]}
                    />
                </View>
                <View>
                    <Text style={styles.title}>Reps</Text>
                    <TextInput
                        onChangeText={text => setReps(parseInt(text))}
                        style={[styles.inputText]}
                    />
                </View>
                <View>
                    <Text style={styles.title}>Exercise</Text>
                    <TextInput
                        onChangeText={text => setExercise(text)}
                        value={exercise}
                        style={[styles.inputText]}
                    />
                </View>
                <Button
                    title="Add Exercise"
                    onPress={() => addExercise(series, reps, exercise)}
                />
        </View>
        
    )
}

const styles = StyleSheet.create({
    inputText: {
        width: 300,
        height: 50,
        marginBottom: 20,
        borderBottomColor: '#f52d56',
        borderBottomWidth: 1,
        padding: 10,
        fontSize: 20,
    },
    title:{
        fontSize: 30,
        fontWeight: 'bold',
        color: '#f52d56',
    }
})