import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
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
  }
});
