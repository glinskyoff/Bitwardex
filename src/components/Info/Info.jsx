import React from 'react'
import styles from './Info.module.scss';

import peopleOne from './images/people-one.png';
import peopleTwo from './images/people-two.png';

export const Info = () => {
  return (
    <div className={styles.info}>
        <div className={styles.info__inner}>

            <div className={styles.infoBlock}>
                <img src={peopleOne} alt="" />
                <div className={styles.infoContent}>
                    <p className={styles.infoTitle}>Как это работает</p>
                    <p className={styles.infoDesc}>Bitwardex высчитывает наилучшие точки входа в позиции, которые в среднем имеют <span>85%</span> вероятность выигрыша. Эти показатели поддерживаются благодаря безупречным системам мани и риск-менеджмента, а также доведенного до идеала алгоритма входа в позицию. Инструмент имеет статистику с множеством показателей, для абсолютно каждого актива. Вследствие чего, Вы сами можете решить, какие активы будут участвовать в вашей торговле.</p>
                </div>
            </div>

            <div className={styles.infoBlock}>
                <div className={styles.infoContent}>
                    <p className={styles.infoTitle}>Наша цель</p>
                    <p className={styles.infoDesc}>Наша главная миссия - сделать трейдинг <span>доступным</span> абсолютно для всех. Наш алгоритм подойдет любому, от новичка, до профессионала. Вне зависимости от Вашего опыта в сфере трейдинга - Bitwardex станет для Вас верным помощником, который поможетмаксимально извлекать выгоду из всех рыночных ситуаций.</p>
                </div>
                <img src={peopleTwo} alt="" />
            </div>



        </div>
    </div>
  )
}
