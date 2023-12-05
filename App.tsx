import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { useState } from 'react';

export default function App() {

  const [size, setSize] = useState<number>(28);
  const [size1, setSize1] = useState<number>(28);
  const [size2, setSize2] = useState<number>(28);

  const [color, setColor] = useState<string>('#778DBD');
  const [color1, setColor1] = useState<string>('#778DBD');
  const [color2, setColor2] = useState<string>('#778DBD');

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.optionsBlock}>
          <View onTouchEnd={() => {setSize(32); setSize1(28); setSize2(28); setColor('#2F94F0'); setColor1('#778DBD'); setColor2('#778DBD')}} style={[styles.headerOptions, { backgroundColor: color }]}>
            <FontAwesome5 name="dumbbell" size={size} color="black" />
          </View>
          <View onTouchEnd={() => {setSize1(32); setSize(28); setSize2(28); setColor1('#2F94F0'); setColor('#778DBD'); setColor2('#778DBD')}} style={[styles.headerOptions, { backgroundColor: color1}]}>
            <FontAwesome5 name="fire" size={size1} color="black" />
          </View>
          <View onTouchEnd={() => {setSize2(32); setSize(28); setSize1(28); setColor2('#2F94F0'); setColor('#778DBD'); setColor1('#778DBD')}} style={[styles.headerOptions, { backgroundColor: color2 }]}>
            <FontAwesome5 name="tasks" size={size2} color="black" />
          </View>
        </View>
      </View>
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
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: "100%",
    height: 80,
    backgroundColor: '#434957',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    boxShadow: '0px -6px 4px rgba(0, 0, 0, 0.25)'
  },
  headerOptions:{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#778DBD',
    width: 60,
    height: 60,
    borderRadius: 20,
    boxShadow: '0px 6px 4px rgba(0, 0, 0, 0.25)',
  },
  optionsBlock: {
    display: 'flex',
    paddingBottom: 40,
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 50,
    alignItems: 'center',
    width: '100%',
    height: 60,
  }
});
