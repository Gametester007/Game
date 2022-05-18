import React, { PureComponent } from "react";
import { AppRegistry, StyleSheet, StatusBar, View } from "react-native";
import { GameEngine } from "react-native-game-engine";
import { Finger } from "./renderers";
import { MoveFinger } from "./systems"

export default class BestGameEver extends PureComponent {
  constructor() {
    super();
  }

  render() {
    return (
      <View style={{ width: 100, height: 200, backgroundColor: 'red' }}>
        <GameEngine
          style={styles.container}
          systems={[MoveFinger]}
          entities={{
            1: { position: [25, 50], renderer: <Finger /> }, //-- Notice that each entity has a unique id (required)
            2: { position: [25, 100], renderer: <Finger /> }, //-- and a renderer property (optional). If no renderer
            3: { position: [25, 150], renderer: <Finger /> }, //-- is supplied with the entity - it won't get displayed.
            4: { position: [25, 200], renderer: <Finger /> },
            5: { position: [25, 250], renderer: <Finger /> }
          }}>

          <StatusBar hidden={true} />

        </GameEngine>
      </View>

    );
  }
}

// https://stackoverflow.com/questions/52449976/how-to-use-vw-and-vh-css-with-react-native?

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: 'green',
    display: 'flex',
    justifyContent: 'center',

  }
});

AppRegistry.registerComponent("BestGameEver", () => BestGameEver);