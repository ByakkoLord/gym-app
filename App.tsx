import { StatusBar } from 'expo-status-bar';
import { Pressable ,Button, StyleSheet, Text, Touchable, TouchableOpacity, View, Animated } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { FontAwesome5 } from '@expo/vector-icons';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useState } from 'react';

import WaterBlock from './components/WaterBlock';
import SettingsBlock from './components/SettingsBlock';

export default function App() {
  const [pop, setPop] = useState<boolean>(false);

  const [icon_1] = useState(new Animated.Value(40));
  const [icon_2] = useState(new Animated.Value(40));
  const [icon_3] = useState(new Animated.Value(40));
  const [icon_4] = useState(new Animated.Value(40));

  const popIn = () => {
    if (pop === false) {
      setIconMenu('close');
    }else{
      setIconMenu('menu');
    }
    setPop(true);
    Animated.timing(icon_1, {
      toValue: 155,
      duration: 500,
      useNativeDriver: false,
    }).start();
    Animated.timing(icon_2, {
      toValue: 97,
      duration: 500,
      useNativeDriver: false,
    }).start();
    Animated.timing(icon_3, {
      toValue: 155,
      duration: 500,
      useNativeDriver: false,
    }).start();
    Animated.timing(icon_4, {
      toValue: 155,
      duration: 500,
      useNativeDriver: false,
    }).start();
  }

  const popOut = () => {
    if (pop === true) {
      setIconMenu('menu');
    }else{
      setIconMenu('close');
    }
    setPop(false);
    Animated.timing(icon_1, {
      toValue: 40,
      duration: 500,
      useNativeDriver: false,
    }).start();
    Animated.timing(icon_2, {
      toValue: 40,
      duration: 500,
      useNativeDriver: false,
    }).start();
    Animated.timing(icon_3, {
      toValue: 40,
      duration: 500,
      useNativeDriver: false,
    }).start();
    Animated.timing(icon_4, {
      toValue: 40,
      duration: 500,
      useNativeDriver: false,
    }).start();
  }

  const [iconMenu, setIconMenu] = useState<'menu' | 'close'>('menu');

  const [preVisibility, setPreVisibility] = useState<string>('none');
  const [preVisibilit1, setPreVisibility1] = useState<string>('none');
  const [preVisibility2, setPreVisibility2] = useState<string>('none');
  const [preVisibility3, setPreVisibility3] = useState<string>('none');

  

  return (
    <View style={styles.container}>

      <Animated.View style={[styles.circle, { bottom: icon_1}]}>
        <TouchableOpacity>
          <Ionicons name="water" size={25} color="#FFFF" />
        </TouchableOpacity>
      </Animated.View>

      <Animated.View style={[styles.circle, { bottom: icon_2, right: icon_2}]}>
        <TouchableOpacity>
          <Ionicons name="bicycle" size={25} color="#FFFF" />
        </TouchableOpacity>
      </Animated.View>

      <Animated.View style={[styles.circle, { bottom: icon_3, right: icon_3}]}>
        <TouchableOpacity>
          <Ionicons name="barbell" size={25} color="#FFFF" />
        </TouchableOpacity>
      </Animated.View>

      <Animated.View style={[styles.circle, { right: icon_4}]}>
        <TouchableOpacity>
          <Ionicons name="settings" size={25} color="#FFFF" />
        </TouchableOpacity>
      </Animated.View>

      <TouchableOpacity
        style={styles.circle}
        onPress={() => {
          pop === false ? popIn() : popOut();
        }}
      >
        <Ionicons name={iconMenu} size={35} color="#FFFF" />
      </TouchableOpacity>

      
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
  },
  circle: {
    backgroundColor: '#f52d56',
    width: 60,
    height: 60,
    position: 'absolute',
    bottom: 40,
    right: 40,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
 }
});
