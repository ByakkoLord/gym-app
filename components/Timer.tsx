import { View, Text, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";

export default function Timer() {

const [ seconds, setSeconds ] = useState(0);
const [ text, setText ] = useState('Start Work');

const [isActive, setIsActive] = useState(false);

useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isActive) {
        interval = setInterval(() => {
            setSeconds(seconds => seconds + 1);
        }, 1000);
    }
    return () => clearInterval(interval);
}, [isActive, seconds]);

const startTimer = () => {
    if (text === 'Start Work') {
        setIsActive(true);
        setText('Stop Work');
    } else {
        setIsActive(false);
        setSeconds(0);
        setText('Start Work');
    }
}
    
    


const formatTime = (time: number) => {
    const getSeconds = `0${(time % 60)}`.slice(-2);
    const minutes = Math.floor(time / 60);
    const getMinutes = `0${minutes % 60}`.slice(-2);
    const getHours = `0${Math.floor(time / 3600)}`.slice(-2);

    return `${getHours} : ${getMinutes} : ${getSeconds}`;
}


    return(
        <View style={{ borderBottomColor: 'white', borderBottomWidth: 3, position: 'absolute', top: 170, left: 210 }}>
            <TouchableOpacity onPress={startTimer} style={{ position: 'relative', top: 50, left: -195, width: 150, height: 50, borderColor: 'white', borderWidth: 3, borderRadius: 15, display: 'flex', justifyContent: "center", alignItems: 'center', elevation: 20}}>
                            <Text style={{ fontSize: 25, color: 'white', fontWeight: 'bold' }}>{text}</Text>
            </TouchableOpacity>
            <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 40 }}>{formatTime(seconds)}</Text>
        </View>
    )
}