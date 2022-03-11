import Board from '../components/Board'
import { BoardType } from '../components/Board'
import Head from 'next/head'
import Image from 'next/image'
import Keyboard from '../components/Keyboard'
import React, { useEffect, useState } from 'react';
import styles from '../styles/Home.module.css'
import type { NextPage } from 'next'

const BOARD_WIDTH = 5;
const MAX_GUESSES = 6;
interface State {
  wordToGuess: string,
  guessesSoFar: string[],
  currentGuess: string
}

function boardFromState (state: State) {
  const board = emptyBoard();
  state.guessesSoFar.forEach((guess: string, row: number) => {
    var col = 0;
    for (let c of guess) {
      board[row][col].letter = c;
      col++;
    }
  });
  return board;
}

function emptyBoard () {
  return new Array(MAX_GUESSES).fill(null).map(() =>
    new Array(BOARD_WIDTH).fill(null).map(() => ({ letter: '', color: 'white' }))
  );
}

function debugState (state: State) {
  console.log(state);
  console.log(boardFromState(state));
}

const Home: NextPage = () => {
  // FIXME wordToGuess selected from list...
  const [state, setState] = useState<State>({ wordToGuess: 'pause', guessesSoFar: [], currentGuess: '' });
  var board: BoardType = emptyBoard();

  const onKeyPress = (key: string) => {
    const { wordToGuess, guessesSoFar, currentGuess } = state;

    if (key === '{enter}') {
      return setState({wordToGuess, guessesSoFar: guessesSoFar.concat(currentGuess), currentGuess: '' });
    }
    setState({wordToGuess, guessesSoFar, currentGuess: currentGuess + key })
  }

  useEffect(() => {
    debugState(state);
    board = boardFromState(state);
  });

  return (
    <div className={styles.container}>
      <Board board={boardFromState(state)}></Board>
      <Keyboard onKeyPress={onKeyPress}></Keyboard>
    </div>
  )
}

export default Home
