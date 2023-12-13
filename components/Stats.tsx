import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function Stats() {
    return (
        <View style={{ width: 400, display: 'flex', flexDirection: 'row', marginTop: 40}}>
            <LinearGradient colors={['#f52d56', '#4FF2F9']} style={{ width: 20, height: 350, borderRadius: 20 }}></LinearGradient>
            <View style={{ width: '60%', height: '100%', marginRight: 20 }}>
                <Text style={{ color: 'white', fontSize: 50, fontWeight: 'bold', marginLeft: 20, borderBottomColor: '#4FF2F9', borderBottomWidth: 2 }}>Stats</Text>

                <View style={{ marginTop: 20 }}>
                    <Text style={{ color: '#B8B8B8', fontSize: 30, fontWeight: 'bold', marginLeft: 20 }} >20 days</Text>
                    <Text style={{ color: '#B8B8B8', fontSize: 30, fontWeight: 'bold', marginLeft: 20 }} >20 exercices</Text>
                    <Text style={{ color: '#B8B8B8', fontSize: 30, fontWeight: 'bold', marginLeft: 20 }} >20 losed calories</Text>
                    <Text style={{ color: '#B8B8B8', fontSize: 30, fontWeight: 'bold', marginLeft: 20 }} >20 losed weight</Text>
                </View>

            </View>
        </View>
    )
}