import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Board from '../components/Board'
import Keyboard from '../components/Keyboard'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Board></Board>
      <Keyboard></Keyboard>
    </div>
  )
}

export default Home
