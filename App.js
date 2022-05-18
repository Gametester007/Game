import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { GameEngine } from "react-native-game-engine"
import BestGameEver from "./index.android"

export default function App() {
  return (
    <View style={styles.container}>
      <View style={{display: 'flex',justifyContent : 'center',margin:'auto'}}>
        <Text>บ่าต้นหน้าโง่</Text>
        <Text>Ice Na Hee</Text>
        <BestGameEver />
        <StatusBar style="auto" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop:200
  },
});



