import React, {useState} from 'react'
import logoHeader from './images/logo.svg';

import styles from './Header.module.scss';

const header_li = [
    {
        title: 'Как это работает',
        link: '/'
    },
    {
        title: 'Цены',
        link: '/'
    },
    {
        title: 'Контакты',
        link: '/'
    }
]

export const Header = () => {
  return (
    <div className={styles.header}>
        <div className={styles.header__inner}>

            <div className={styles['header-left']}>
                <a href="">
                    <img src={logoHeader} height='37' width='213' alt="" />
                </a>
            </div>
            <div className={styles['header-right']}>

                <ul className={styles.nav}>
                    {header_li.map((item, index) => (
                        <li><a href="{item.link}">{item.title}</a></li>
                    ))}
                </ul>
                
            </div>

        </div>
    </div>
  )
}
