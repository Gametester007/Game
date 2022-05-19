import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground, TouchableOpacity } from 'react-native';
// import { GameEngine } from "react-native-game-engine"
// import BestGameEver from "./index.android"

export default function App() {
  return (
    <ImageBackground source={require('./assets/background2.jpg')} style={styles.image}>
      <View style={styles.container}>

        <View style={{ margin: 'auto', backgroundColor: '#dddddd', width: '50%', height: '10%', justifyContent: 'space-around', alignItems: 'center', flexDirection: 'column' }}>
          <Text style={{ fontSize: 22, fontWeight: 'bold' }}>Score</Text>
          <Text style={{ fontSize: 30, fontWeight: 'bold' }}>85 X 10</Text>
          <StatusBar style="auto" />
        </View>

        <View style={{ margin: 'auto', backgroundColor: '#dddddd', width: '75%', height: '25%', justifyContent: 'space-around', alignItems: 'center', flexDirection: 'column', }}>
          <Text style={{ fontSize: 35, fontWeight: 'bold' }}>โจทย์</Text>
          <Text style={{ fontSize: 40, fontWeight: 'bold' }}>85 X 10</Text>

          <StatusBar style="auto" />
        </View>

        <View style={{ margin: 'auto', width: '90%', height: '15%', alignItems: 'center', flexDirection: 'row', justifyContent: 'space-around' }}>
          <TouchableOpacity
            style={{ height: '80%', width: '30%', backgroundColor: 'gray', justifyContent: 'center', alignItems: 'center' }}
          // onPress={onPress}
          >
            <View>
              <Text style={{ fontSize: 22, fontWeight: 'bold', color: 'white' }}>คำตอบ</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={{ height: '80%', width: '30%', backgroundColor: 'gray', justifyContent: 'center', alignItems: 'center' }}
          // onPress={onPress}
          >
            <View>
              <Text style={{ fontSize: 22, fontWeight: 'bold', color: 'white' }}>คำตอบ</Text>
            </View>
          </TouchableOpacity>


        </View>


      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 0,
    height: '100%',
    justifyContent: 'space-around'
  },
});



