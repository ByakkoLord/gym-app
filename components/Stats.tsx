import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

interface Props {
    textInfo1: number,
    textInfo2: number,
    textInfo3: number,
    textInfo4: number

}

export default function Stats(props: Props) {
    const { textInfo1, textInfo2, textInfo3, textInfo4 } = props;
    return (
        <View style={{ width: 400, display: 'flex', flexDirection: 'row', marginTop: 40}}>
            <LinearGradient colors={['#f52d56', '#4FF2F9']} style={{ width: 20, height: 350, borderRadius: 20 }}></LinearGradient>
            <View style={{ width: '60%', height: '100%', marginRight: 20 }}>
                <Text style={{ color: 'white', fontSize: 50, fontWeight: 'bold', marginLeft: 20, borderBottomColor: '#4FF2F9', borderBottomWidth: 2 }}>Stats</Text>

                <View style={{ marginTop: 20 }}>
                    <Text style={{ color: '#B8B8B8', fontSize: 30, fontWeight: 'bold', marginLeft: 20 }} >{textInfo1} days</Text>
                    <Text style={{ color: '#B8B8B8', fontSize: 30, fontWeight: 'bold', marginLeft: 20 }} >{textInfo2} exercices</Text>
                    <Text style={{ color: '#B8B8B8', fontSize: 30, fontWeight: 'bold', marginLeft: 20 }} >{textInfo3} losed calories</Text>
                    <Text style={{ color: '#B8B8B8', fontSize: 30, fontWeight: 'bold', marginLeft: 20 }} >{textInfo4} losed weight</Text>
                </View>

            </View>
        </View>
    )
}