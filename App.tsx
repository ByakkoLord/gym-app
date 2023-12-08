import { StatusBar } from 'expo-status-bar';
import { Pressable ,Button, StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { FontAwesome5 } from '@expo/vector-icons';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useState } from 'react';

import WaterBlock from './components/WaterBlock';
import SettingsBlock from './components/SettingsBlock';

export default function App() {

  const [color, setColor] = useState<string>('#fff');
  const [color1, setColor1] = useState<string>('#fff');
  const [color2, setColor2] = useState<string>('#fff');
  const [color3, setColor3] = useState<string>('#fff');

  const [preVisibility, setPreVisibility] = useState<string>('none');
  const [preVisibilit1, setPreVisibility1] = useState<string>('none');
  const [preVisibility2, setPreVisibility2] = useState<string>('none');
  const [preVisibility3, setPreVisibility3] = useState<string>('none');


  return (
    <View style={styles.container}>

      <SettingsBlock visibility={preVisibility}/>

      <LinearGradient start={{x: 0.2, y: 0.1}} colors={['#606673', '#434957']}  style={styles.header}>
        <View style={styles.optionsBlock}>
          <Pressable onPress={() => {setPreVisibility('flex'); setPreVisibility1('none'); setPreVisibility2('none'); setPreVisibility3('none') ;setColor('#4691E8'); setColor1('#fff'); setColor2('#fff'); setColor3('#fff')}}  style={[styles.headerOptions]}>
            <Ionicons name="settings-outline" size={32} color={color} />
          </Pressable>
          <Pressable onPress={() => {setPreVisibility1('flex'); setPreVisibility('none'); setPreVisibility2('none'); setPreVisibility3('none') ;setColor('#fff'); setColor1('#4691E8'); setColor2('#fff'); setColor3('#fff')}}  style={[styles.headerOptions]}>
            <Ionicons name="barbell-outline" size={32} color={color1} />
          </Pressable>
          <Pressable onPress={() => {setPreVisibility2('flex'); setPreVisibility1('none'); setPreVisibility3('none'); setPreVisibility('none') ;setColor('#fff'); setColor1('#fff'); setColor2('#4691E8'); setColor3('#fff')}} style={[styles.headerOptions]}>
            <Ionicons name="water-outline" size={32} color={color2} />
          </Pressable>
          <Pressable onPress={() => {setPreVisibility3('flex'); setPreVisibility1('none'); setPreVisibility2('none'); setPreVisibility('none') ;setColor('#fff'); setColor1('#fff'); setColor2('#fff'); setColor3('#4691E8')}}  style={[styles.headerOptions]}>
            <Ionicons name="basketball-outline" size={32} color={color3} />
          </Pressable>
        </View>
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2C313A',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header:{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: "100%",
    height: 80,
    background: 'linear-gradient(to right, blue, red)',
    boxShadow: '0px -6px 4px rgba(0, 0, 0, 0.25)'
  },
  headerOptions:{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: 60,
    height: 60,
    borderRadius: 20,
    
  },
  optionsBlock: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 50,
    alignItems: 'center',
    width: '100%',
    height: 60,
  }
});
