import React from 'react'
import styles from './Intro.module.scss';

import introPhoto from './images/intro-photo.png';
import introArrow from './images/arrow.svg';

export const Intro = () => {
  return (
    <div className={styles.intro}>
        <div className={styles.intro__inner}>

            <div className={styles['intro-left']}>
              <p className={styles['intro-title']}>Алгоритмическая <span>торговля</span> на всех типах рынка</p>
              <p className={styles["intro-desc"]}><span>Bitwardex</span> - это автономный алгоритм, позволяющий извлекать выгоду из колебаний рынка. Непрерывная работа торгового алгоритма позволит Вам полностью отказаться от аналитики графиков, ведь Bitwardex будет делать это за вас.</p>
              <section>
                <a href="">
                  <div className={styles["intro-button-block"]}>
                    <button>Приобрести</button>
                    <img src={introArrow} alt="" width='25' />
                  </div>
                </a>
              </section>
                
            </div>

            <div className={styles['intro-right']}>
              <img src={introPhoto} width='600' height='728' />
            </div>

        </div>
    </div>
  )
}
