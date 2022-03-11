import Board from '../components/Board'
import Head from 'next/head'
import Image from 'next/image'
import Keyboard from '../components/Keyboard'
import React, { useEffect, useState } from 'react';
import styles from '../styles/Home.module.css'
import type { NextPage } from 'next'

interface State {
  wordToGuess: string,
  guessesSoFar: string[],
  currentGuess: string
}

function debugState (state: State) {
  console.log(state);
}

const Home: NextPage = () => {
  const [state, setState] = useState<State>({ wordToGuess: 'pause', guessesSoFar: [], currentGuess: '' });

  const onKeyPress = (key: string) => {
    const { wordToGuess, guessesSoFar, currentGuess } = state;

    if (key === '{enter}') {
      return setState({wordToGuess, guessesSoFar: guessesSoFar.concat(currentGuess), currentGuess: '' });
    }
    setState({wordToGuess, guessesSoFar, currentGuess: currentGuess + key })
  }

  useEffect(() => {
    debugState(state);
  });

  return (
    <div className={styles.container}>
      <Board></Board>
      <Keyboard onKeyPress={onKeyPress}></Keyboard>
    </div>
  )
}

export default Home
