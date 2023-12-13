import { View, Text, TextInput } from "react-native";

export default function BodyPrg() {
    return (
        <View style={{display: 'flex', alignItems: 'center' ,width: 400, height: 150, backgroundColor: '#3E4552', borderRadius: 20, shadowColor: 'black', elevation: 15, shadowRadius: 15, marginBottom: 20, marginTop: 40}}>
            <Text style={{ color: 'white', fontSize: 30, fontWeight: 'bold', marginTop: 20 }}>How is your body today?</Text>
            <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-evenly', width: 180, marginTop: 20 }}>
                    <Text style={{ color: '#f52d56',fontWeight: 'bold', fontSize: 20 }}>Weight:</Text>
                    <TextInput style={{ width: 50, height: 30, borderColor: 'red', borderWidth: 2, borderRadius: 10, textAlign: 'center', color: 'white' }}></TextInput>
            </View>
        </View>
    )
}