import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground, TouchableOpacity } from 'react-native';
// import { GameEngine } from "react-native-game-engine"
// import BestGameEver from "./index.android"

const NumberOne = Math.floor(Math.random() * 100);
const NumberTwo = Math.floor(Math.random() * 100);




const sum = (NumberOne * NumberTwo);
const fakeSum = (NumberOne * NumberTwo) + Math.floor(Math.random() * 10);;

export default function App() {
  return (
    <ImageBackground source={require('./assets/background2.jpg')} style={styles.image}>
      <View style={styles.container}>

        <View style={styles.scoreBox}>
          <Text style={{ fontSize: 22, fontWeight: 'bold' }}>Score</Text>
          <Text style={{ fontSize: 30, fontWeight: 'bold' }}>{sum}</Text>
          <StatusBar style="auto" />
        </View>

        <View style={styles.QABox}>
          <Text style={{ fontSize: 35, fontWeight: 'bold' }}>โจทย์</Text>
          <Text style={{ fontSize: 40, fontWeight: 'bold' }}>{NumberOne} X {NumberTwo}</Text>

          <StatusBar style="auto" />
        </View>

        <View style={styles.answerBox}>
          <TouchableOpacity
            style={styles.TouchableOpacityStyle}
            onPress={() => {
              alert('ถูกต้อง!');
            }}
          >
            <View>
              <Text style={{ fontSize: 22, fontWeight: 'bold', color: 'white' }}>{sum}</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.TouchableOpacityStyle}
            onPress={() => {
              alert('ผิด!');
            }}
          >
            <View>
              <Text style={{ fontSize: 22, fontWeight: 'bold', color: 'white' }}>{fakeSum}</Text>
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
  scoreBox: {
    margin: 'auto',
    backgroundColor: '#dddddd',
    width: '50%',
    height: '10%',
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'column'
  },
  QABox: {
    margin: 'auto',
    backgroundColor: '#dddddd',
    width: '75%',
    height: '25%',
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'column',
  },
  answerBox: {
    margin: 'auto',
    width: '90%',
    height: '15%',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  TouchableOpacityStyle: {
    height: '80%',
    width: '30%',
    backgroundColor: '#596DD2',
    justifyContent: 'center',
    alignItems: 'center',
  },


});



