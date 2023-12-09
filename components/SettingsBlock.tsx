import { View, Text, StyleSheet, TextInput, ScrollView } from "react-native"
import { Ionicons } from '@expo/vector-icons';

interface Props {
    visibility: string
}

export default function SettingsBlock(props: Props) {
    
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
            <Text style={styles.title2}>Preferencies</Text>           

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
    }
});