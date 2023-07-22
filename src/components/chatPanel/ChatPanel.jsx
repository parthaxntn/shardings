import React, { useState } from 'react'
import styles from './chatpanel.module.scss'

const ChatPanel = () => {
  
  const chats = [
    'Hello',
    'official helping to help',
    'unoff-A'
  ]

  const [chatSel, setChatSel] = useState(chats[0])

  return (
    <div className={styles.chatpanel}>
        <div className={styles.heading}>Shardings</div>
        <div className='vr'></div>

        <ul className={styles.chats}>
            {chats.map((elem)=>{
              return (
                <li className={`${styles.chat} ${chatSel===elem?styles.selectd:''}`} onClick={()=>{setChatSel(elem)}}> <span className={styles.left}>{'>'}</span> {elem}</li>
              )
            })}
        </ul>
    </div>
  )
}

export default ChatPanel
