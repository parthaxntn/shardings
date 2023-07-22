import React from 'react'
import styles from './Home.module.scss'
import ChatPanel from '../chatPanel/ChatPanel'
import ChatBox from '../chatbox/ChatBox'

const Home = () => {
  return (
    <div className={styles.home}>
      <ChatPanel/>
      <ChatBox/>
    </div>
  )
}

export default Home
