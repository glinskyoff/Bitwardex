import React from 'react'

import styles from './Rate.module.scss';

const rate = [
    {
        rate: 'Стандартный',
        time: '1 месяц',
        price: '999 р.',
        li: [{desc: 'основной скрипт'}]
    },

    {
        rate: 'Расширенный',
        time: '1 месяц',
        price: '999 р.',
        li: [{desc: 'основной скрипт', desc2: 'расширенный скрипт'}]
    },

    {
        rate: 'Профессиональный',
        time: '1 месяц',
        price: '999 р.',
        li: [{desc: 'основной скрипт', desc2: 'расширенный скрипт', desc3: 'автоматизированная оптимизация под любой тикер'}]
    }
]

export const Rate = () => {
  return (
    <div className={styles.rate}>
        <div className="container">
            <div className={styles.rate__inner}>

                <p className={styles.rateTitleMain}>Тарифы</p>

                <div className={styles.rateWrapper}>

                    {rate.map ((item, index) => (
                        <div className={styles.rateBlock}>
                            <div className={styles.rateBlockWrapper}>

                                <p className={styles.rateRate}>{item.rate}</p>
                                <p className={styles.rateTime}>{item.time}</p>
                                <ul className={styles.rateUl}>

                                    {rate[index].li.map ((item, index) => (
                                        <li className={styles.rateLi}> {index + 1}. {item.desc} </li>
                                    ))}
                                </ul>

                                <p className={styles.ratePrice}>Цена: {item.price}</p>
                                <div className={styles.rateButtonBlock}>
                                    <p className={styles.rateButton}>Приобрести</p>
                                </div>

                            </div>
                        </div>
                    ))}  

                </div>
            </div>
        </div>
    </div>
  )
}
