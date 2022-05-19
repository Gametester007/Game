import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground, TouchableOpacity } from 'react-native';
import { React, useState, useEffect } from 'react';
// import { GameEngine } from "react-native-game-engine"
// import BestGameEver from "./index.android"

// const NumberOne = Math.floor(Math.random() * 100);
// const NumberTwo = Math.floor(Math.random() * 100);
// const Sum = (NumberOne * NumberTwo);
// const fakeSum = (NumberOne * NumberTwo) + Math.floor(Math.random() * 10);




export default function App() {

  const sign = ["+", "-", "x", "/"]
  const [Score, setScore] = useState(0);
  const [NumberOne, setNumberOne] = useState(1);
  const [NumberTwo, setNumberTwo] = useState(1);
  const [Operation, setOperation] = useState(1);

  const [Sum, setSum] = useState(0)
  const [fakeSum, setFakeSum] = useState(1)




  const RandomQuestion = () => {
    setNumberOne(Math.floor(Math.random() * 100))
    setNumberTwo(Math.floor(Math.random() * 100))
    setOperation(Math.floor(Math.random() * 3))

    switch (Operation) {
      case 0:
        setSum(NumberOne + NumberTwo)
        break;
      case 1:
        setSum(NumberOne - NumberTwo)
        break;
      case 2:
        setSum(NumberOne * NumberTwo)
        break;
      case 3:
        setSum((NumberOne / NumberTwo).toFixed(2))
        break;
    }

    switch (Operation) {
      case 0:
        setFakeSum((NumberOne + NumberTwo) + Math.floor(Math.random() * 10))
        break;
      case 1:
        setFakeSum((NumberOne - NumberTwo) + Math.floor(Math.random() * 10))
        break;
      case 2:
        setFakeSum((NumberOne * NumberTwo) + Math.floor(Math.random() * 10))
        break;
      case 3:
        setFakeSum((NumberOne % NumberTwo).toFixed(2) + Math.floor(Math.random() * 10))
        break;
    }

    console.log("one :" + NumberOne)
    console.log("two :" + NumberTwo)
    console.log("Oper :" + Operation)
    console.log("Ans  :" + Sum)
    console.log("Ans fake  :" + fakeSum)
    upScore()
    alert("ถูก")
  }

  const upScore = () => {
    setScore(Score + 1)
  }

  return (
    <ImageBackground source={require('./assets/background2.jpg')} style={styles.image}>
      <View style={styles.container}>

        <View style={styles.scoreBox}>
          <Text style={{ fontSize: 22, fontWeight: 'bold' }}>Score</Text>
          <Text style={{ fontSize: 30, fontWeight: 'bold' }}>{Score}</Text>
          <StatusBar style="auto" />
        </View>

        <View style={styles.QABox}>
          <Text style={{ fontSize: 35, fontWeight: 'bold' }}>โจทย์</Text>
          <Text style={{ fontSize: 40, fontWeight: 'bold' }}>{NumberOne} {sign[Operation]} {NumberTwo}</Text>

          <StatusBar style="auto" />
        </View>

        <View style={styles.answerBox}>
          <TouchableOpacity
            style={styles.TouchableOpacityStyle}
            onPress={() => {
              RandomQuestion();
            }}
          >
            <View>
              <Text style={{ fontSize: 22, fontWeight: 'bold', color: 'white' }}>{Sum}</Text>
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



