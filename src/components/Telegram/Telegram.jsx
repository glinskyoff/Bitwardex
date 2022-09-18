import React from 'react';

import styles from './Telegram.module.scss';

import telegramPhoto from './images/tg.png';
import arrowPhoto from './images/arrow.svg';

export const Telegram = () => {
  return (
    <div className={styles.telegram}>
        <div className={styles.telegram__inner}>

            <div className={styles.telegramBlock}>
                <div className={styles.telegramWrapper}>

                    <div className={styles.telegramInfo}>
                        <p className={styles.telegramTitle}>Наш Telegram</p>
                        <p className={styles.telegramDesc}>Переходи в наш telegram-канал там больше интересной информации</p>
                        <div className={styles.telegramButtonBlock}>
                            <button className={styles.telegramButton}>Перейти в канал</button>
                            <img src={arrowPhoto} alt="" width='25' />
                        </div>
                    </div>

                    <div className={styles.telegramImage}>
                        <img src={telegramPhoto} alt="" />
                    </div>

                </div>
            </div>

        </div>
    </div>
  )
}
