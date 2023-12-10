import { View, Text, StyleSheet, TextInput, ScrollView, TouchableOpacity } from "react-native"
import { Ionicons } from '@expo/vector-icons';
import { useState, useContext } from "react";
import { DaysContext } from "../contexts/days";

interface Props {
    visibility: string
}

export default function SettingsBlock(props: Props) {

    const { Sunday, setSunday } = useContext(DaysContext);
    const { Monday, setMonday } = useContext(DaysContext);
    const { Tuesday, setTuesday } = useContext(DaysContext);
    const { Wednesday, setWednesday } = useContext(DaysContext);
    const { Thursday, setThursday } = useContext(DaysContext);
    const { Friday, setFriday } = useContext(DaysContext);
    const { Saturday, setSaturday } = useContext(DaysContext);

    const { workDay, setWorkDay } = useContext(DaysContext);

    const [bgColor, setBgColor] = useState('#3E4552');
    const [bgColor1, setBgColor1] = useState('#3E4552');
    const [bgColor2, setBgColor2] = useState('#3E4552');
    const [bgColor3, setBgColor3] = useState('#3E4552');
    const [bgColor4, setBgColor4] = useState('#3E4552');
    const [bgColor5, setBgColor5] = useState('#3E4552');
    const [bgColor6, setBgColor6] = useState('#3E4552');

    const [textColor, setTextColor] = useState('#f52d56');
    const [textColor1, setTextColor1] = useState('#f52d56');
    const [textColor2, setTextColor2] = useState('#f52d56');
    const [textColor3, setTextColor3] = useState('#f52d56');
    const [textColor4, setTextColor4] = useState('#f52d56');
    const [textColor5, setTextColor5] = useState('#f52d56');
    const [textColor6, setTextColor6] = useState('#f52d56');

    


    const SwitchDayOn = (day: string) => {
        switch (day) {
            case 'Sunday':
                if (Sunday === false) {
                    setSunday(true);
                    setBgColor('#f52d56');
                    setTextColor('#fff');
                    setWorkDay(true);
                }else{
                    setSunday(false);
                    setBgColor('#3E4552');
                    setTextColor('#f52d56');
                    setWorkDay(false);
                }
                break;
            case 'Monday':
                if (Monday === false) {
                    setMonday(true);
                    setBgColor1('#f52d56');
                    setTextColor1('#fff');
                    setWorkDay(true);
                }else{
                    setMonday(false);
                    setBgColor1('#3E4552');
                    setTextColor1('#f52d56');
                    setWorkDay(false);
                }
                break;
            case 'Tuesday':
                if (Tuesday === false) {
                    setTuesday(true);
                    setBgColor2('#f52d56');
                    setTextColor2('#fff');
                    setWorkDay(true);
                }else{
                    setTuesday(false);
                    setBgColor2('#3E4552');
                    setTextColor2('#f52d56');
                    setWorkDay(false);
                }
                break;
            case 'Wednesday':
                if (Wednesday === false) {
                    setWednesday(true);
                    setBgColor3('#f52d56');
                    setTextColor3('#fff');
                    setWorkDay(true);
                }else{
                    setWednesday(false);
                    setBgColor3('#3E4552');
                    setTextColor3('#f52d56');
                    setWorkDay(false);
                }
                break;
            case 'Thursday':
                if (Thursday === false) {
                    setThursday(true);
                    setBgColor4('#f52d56');
                    setTextColor4('#fff');
                    setWorkDay(true);
                }else{
                    setThursday(false);
                    setBgColor4('#3E4552');
                    setTextColor4('#f52d56');
                    setWorkDay(false);
                }
                break;
            case 'Friday':
                if (Friday === false) {
                    setFriday(true);
                    setBgColor5('#f52d56');
                    setTextColor5('#fff');
                    setWorkDay(true);
                }else{
                    setFriday(false);
                    setBgColor5('#3E4552');
                    setTextColor5('#f52d56');
                    setWorkDay(false);
                }
                break;
            case 'Saturday':
                if (Saturday === false) {
                    setSaturday(true);
                    setBgColor6('#f52d56');
                    setTextColor6('#fff');
                    setWorkDay(true);
                }else{
                    setSaturday(false);
                    setBgColor6('#3E4552');
                    setTextColor6('#f52d56');
                    setWorkDay(false);
                }
                break;
        }
    }
    
    if (props.visibility === 'none') {
        return null;
    }

    return (
        <ScrollView style={{width: '100%', height: '100%'}}>
            <View style={styles.main}>
            <View style={{ display: 'flex', flexDirection: "row", justifyContent: 'space-between', width: '100%', alignItems: 'center', borderBottomWidth: 1, borderBottomColor: 'white', paddingBottom: 20 }}>
                <Text style={styles.title}>Settings</Text>
                <Ionicons style={{ marginRight: 40 }} name="settings-outline" size={32} color={'#f52d56'} />
            </View>
            <Text style={[styles.title2, { marginTop: 20 }]}>About You</Text>
            <View style={styles.blocks}>
                <Text style={styles.title2}>Set your caracteristics here</Text>
                <View>
                    <View style={{ display: "flex", flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginBottom: 5}}>
                        <Text style={styles.subtitle}>What's your weight?</Text>
                        <View style={{ display: "flex", flexDirection: 'row', alignItems: 'flex-end' }}>
                            <TextInput maxLength={3} keyboardType="numeric" style={styles.inputs}></TextInput>
                            <Text style={[styles.subtitle, { marginLeft: 35 }]}>Kg</Text>
                        </View>
                    </View>
                </View>
                <View>
                    <View style={{ display: "flex", flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginBottom: 5}}>
                        <Text style={styles.subtitle}>What's your height?</Text>
                        <View style={{ display: "flex", flexDirection: 'row', alignItems: 'flex-end' }}>
                            <TextInput maxLength={3} keyboardType="numeric" style={styles.inputs}></TextInput>
                            <Text style={[styles.subtitle, { marginLeft: 30 }]}>Cm</Text>
                        </View>
                    </View>
                </View>
                <View>
                    <View style={{ display: "flex", flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginBottom: 5}}>
                        <Text style={styles.subtitle}>What's your age?</Text>
                        <View style={{ display: "flex", flexDirection: 'row', alignItems: 'flex-end' }}>
                            <TextInput maxLength={3} keyboardType="numeric" style={styles.inputs}></TextInput>
                            <Text style={[styles.subtitle, { marginLeft: 10 }]}>Years</Text>
                        </View>
                    </View>
                </View>
            </View>
            <Text style={styles.title2}>Your Plan</Text>
            
            <View style={[styles.blocks, { marginTop: 15 }]}>
                <Text style={styles.title2}>What days of week?</Text>

                <View style={{ display: 'flex', flexDirection: 'row', width: '100%', justifyContent: 'center', alignItems: 'center' }}>
                    <TouchableOpacity onPress={() => {let day = 'Sunday' ;SwitchDayOn(day)}} style={[styles.daysCircle, { backgroundColor: bgColor }]}>
                        <Text style={{ color: textColor, fontSize: 25, fontWeight: 'bold' }}>S</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => {let day = 'Monday' ;SwitchDayOn(day)}} style={[styles.daysCircle, { backgroundColor: bgColor1 }]}>
                        <Text style={{ color: textColor1, fontSize: 25, fontWeight: 'bold' }}>M</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => {let day = 'Tuesday' ;SwitchDayOn(day)}} style={[styles.daysCircle, { backgroundColor: bgColor2 }]}>
                        <Text style={{ color: textColor2, fontSize: 25, fontWeight: 'bold' }}>T</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => {let day = 'Wednesday' ;SwitchDayOn(day)}} style={[styles.daysCircle, { backgroundColor: bgColor3 }]}>
                        <Text style={{ color: textColor3, fontSize: 25, fontWeight: 'bold' }}>W</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => {let day = 'Thursday' ;SwitchDayOn(day)}} style={[styles.daysCircle, { backgroundColor: bgColor4 }]}>
                        <Text style={{ color: textColor4, fontSize: 25, fontWeight: 'bold' }}>T</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => {let day = 'Friday' ;SwitchDayOn(day)}} style={[styles.daysCircle, { backgroundColor: bgColor5 }]}>
                        <Text style={{ color: textColor5, fontSize: 25, fontWeight: 'bold' }}>F</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => {let day = 'Saturday' ;SwitchDayOn(day)}} style={[styles.daysCircle, { backgroundColor: bgColor6 }]}>
                        <Text style={{ color: textColor6, fontSize: 25, fontWeight: 'bold' }}>S</Text>
                    </TouchableOpacity>
                </View>
                
            </View>
            <View style={[styles.blocks, { marginTop: 15 }]}>
                <Text style={styles.title2}>What time?</Text>
                <View style={{ display: 'flex', flexDirection: 'row', width: '100%', justifyContent: 'center', alignItems: 'center' }}>
                    <TextInput maxLength={2} keyboardType="numeric" style={[styles.inputs, { marginRight: 20 }]}></TextInput>
                    <Text style={styles.subtitle}>:</Text>
                    <TextInput maxLength={2} keyboardType="numeric" style={[styles.inputs, { marginLeft: 20 }]}></TextInput>
                </View>
                
            </View>
            <View style={[styles.blocks, { marginTop: 15 }]}>
                <Text style={styles.title2}></Text>
            </View>
        </View>
        </ScrollView>
        
    );
}

const styles = StyleSheet.create({
    title: {
        marginLeft: 40,
        fontSize: 40,
        fontWeight: 'bold',
        color: '#f52d56',
    },
    title2: {
        fontSize: 25,
        fontWeight: 'bold',
        color: '#f52d56',
    },
    subtitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#D6E3FF',
    },
    inputs: {
        fontSize: 20,
        fontWeight: 'bold',
        width: 50,
        textAlign: 'center',
        color: '#fff',
        borderBottomColor: '#f52d56',
        borderBottomWidth: 1,
    },
    blocks: {
        marginTop: 20,
        marginBottom: 20,
        padding: 20,
        width: '90%',
        height: 'auto',
        backgroundColor: '#3E4552',
        borderRadius: 10,
        margin: 10,
        shadowColor: 'black',
        shadowOpacity: 0.5,
        shadowRadius: 10,
        elevation: 25,
    },
    main:{
        marginTop: 100,
        alignItems: 'center',
        width: '100%',
        height: '100%',
        backgroundColor: '#2C313A',
        borderRadius: 10,
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
    }
);