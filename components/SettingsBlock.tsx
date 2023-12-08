import { View, Text, StyleSheet, TextInput } from "react-native"
import { Ionicons } from '@expo/vector-icons';

interface Props {
    visibility: string
}

export default function SettingsBlock(props: Props) {
    
    if (props.visibility === 'none') {
        return null;
    }

    return (
        <View style={styles.main}>
            <View style={{ display: 'flex', flexDirection: "row", justifyContent: 'space-between', width: '100%', alignItems: 'center', borderBottomWidth: 1, borderBottomColor: 'white', paddingBottom: 20 }}>
                <Text style={styles.title}>Settings</Text>
                <Ionicons style={{ marginRight: 40 }} name="settings-outline" size={32} color={'#FF6D3E'} />
            </View>
            <View style={styles.blocks}>
                <Text style={styles.title2}>Set your preferences here</Text>
                <View>
                    <View style={{ display: "flex", flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginBottom: 5}}>
                        <Text style={styles.subtitle}>What's your weight?</Text>
                        <TextInput style={styles.inputs}></TextInput>
                    </View>
                </View>
                <View>
                    <View style={{ display: "flex", flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginBottom: 5}}>
                        <Text style={styles.subtitle}>How tall are you?</Text>
                        <TextInput style={styles.inputs}></TextInput>
                    </View>
                </View>
                <View>
                    <View style={{ display: "flex", flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginBottom: 5}}>
                        <Text style={styles.subtitle}>How old are you?</Text>
                        <TextInput style={styles.inputs}></TextInput>
                    </View>

                </View>
                

            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    title: {
        marginLeft: 40,
        fontSize: 40,
        fontWeight: 'bold',
        color: '#FF6D3E',
    },
    title2: {
        fontSize: 25,
        fontWeight: 'bold',
        color: '#D6E3FF',
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
        color: '#D6E3FF',
        borderBottomColor: '#D6E3FF',
        borderBottomWidth: 1,
    },
    blocks: {
        marginTop: 50,
        padding: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#D6E3FF',
        width: '90%',
        height: 'auto',
        backgroundColor: '#2C313A',
        borderRadius: 10,
        margin: 10
    },
    main:{
        marginTop: 150,
        alignItems: 'center',
        width: '100%',
        height: '100%',
        backgroundColor: '#2C313A',
        borderRadius: 10,
        margin: 10
    }
});