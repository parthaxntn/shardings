import React from 'react'
import styles from './ChatBox.module.scss'
import Input from '../Input/Input'

const ChatBox = () => {
    return (
        <div className={styles.chatbox_enclosure}>
            <div className={styles.chatbox}>
                
            </div>
            <Input />
        </div>
    )
}

export default ChatBox
