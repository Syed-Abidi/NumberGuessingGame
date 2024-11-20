import { StyleSheet, ImageBackground} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import React, { useState, useEffect } from "react";
import StartScreen from './screens/startscreen.js';
import GameScreen from './screens/gameplayscreen.js';
import GameOver from './screens/gameover.js';

export default function App() {
  const [usernumber, setUserNumber] = useState();
  const [gameIsOver, setGameIsOver] = useState(true);
  const [guessRounds, setGuessRounds] = useState(0);


  function pickedNumberHandler(pickedNumber) {
    setUserNumber(pickedNumber);
    setGameIsOver(false);
  }

  function gameOverHandler(numberOfRounds) {
    setGameIsOver(true);
    setGuessRounds(numberOfRounds);
  }

  function startNewGameHandler() {
    setUserNumber(null);
    setGuessRounds(0);
  }

  let screen = <StartScreen onPickNumber={pickedNumberHandler} />;

  if (usernumber) {
    screen = (
      <GameScreen usernumber={usernumber} onGameOver={gameOverHandler} />
    );
  }

  if (gameIsOver && usernumber) {
    screen = (
      <GameOver
        usernumber={usernumber}
        roundsNumber={guessRounds}
        onStartNewGame={startNewGameHandler}
      />
    );
  }

  return (
    <LinearGradient colors={["blue", "white"]} style={styles.ssbody}>
      <ImageBackground
        source={require("./background.jpg")}
        resizeMode="cover"
        imageStyle={styles.imagebg}
        style={styles.rootscreen}
      >
        {screen}
      </ImageBackground>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  imagebg: {
    opacity: 0.15,
  },
  rootscreen: {
    flex: 1,
  },
  ssbody: { flex: 1 },
  
});
