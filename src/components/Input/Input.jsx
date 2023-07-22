import React from 'react'
import styles from './input.module.scss'
import {FiBold, FiItalic} from 'react-icons/fi'
import {GoStrikethrough} from 'react-icons/go'
import {BiLink} from 'react-icons/bi'
import {PiAt, PiListBulletsLight, PiListNumbersBold} from 'react-icons/pi'
import {BsBlockquoteLeft, BsCodeSlash} from 'react-icons/bs'
import {FaRegFileCode} from 'react-icons/fa'
import {AiOutlinePlus, AiOutlineSend} from 'react-icons/ai'
import {HiOutlineFaceSmile} from 'react-icons/hi2'
 
const Input = () => {
  return (
    <div className={styles.input}>
      <div className={styles.fx}>
        <div className={styles.btns}><FiBold/></div>
        <div className={styles.btns}><FiItalic/></div>
        <div className={styles.btns}><GoStrikethrough/></div>
        <div className={styles.btns}><BiLink/></div>
        <div className={styles.btns}><PiListNumbersBold/></div>
        <div className={styles.btns}><PiListBulletsLight/></div>
        <div className={styles.btns}><BsBlockquoteLeft/></div>
        <div className={styles.btns}><BsCodeSlash/></div>
        <div className={styles.btns}><FaRegFileCode/></div>
      </div>
      <div className={styles.textbox}>
        <textarea placeholder='Chat comes here...'></textarea>
      </div>
      <div className={styles.buttons}>
        <div className={styles.btns}><AiOutlinePlus/></div>
        <div className={styles.btns}><HiOutlineFaceSmile/></div>
        <div className={styles.btns}><PiAt/></div>
        <div className={`${styles.btns} ${styles.send}`}><AiOutlineSend /></div>
      </div>
    </div>
  )
}

export default Input
