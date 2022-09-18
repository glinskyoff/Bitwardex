import React from 'react'

import styles from './Footer.module.scss';

import twitterPhoto from './images/twitter.svg';
import telegramPhoto from './images/tg.svg';
import youtubePhoto from './images/youtube.svg';
import logoPhoto from './images/logo.svg';

export const Footer = () => {
  return (
    <div className={styles.footer}>
        <div className="container">
            <div className={styles.footer__inner}>

                <div className={styles.footerBlock}>
                    <a href="">
                        <img src={logoPhoto} alt="" />
                    </a>
                    <p className={styles.footerDesc}>© Все права защищены</p>
                    <a href="" className={styles.footerDesc}>Пользовательское соглашение</a>
                    <a href="" className={styles.footerDesc}>Политика конфиденциальности</a>
                </div>

                <div className={styles.footerBlock}>
                    <div className={styles.footerTitle}>Руководство</div>
                    <a href="" className={styles.footerDesc}>FAQ</a>
                    <a href="" className={styles.footerDesc}>Видео</a>
                </div>

                <div className={styles.footerBlock}>
                    <div className={styles.footerTitle}>Компания</div>
                    <a href="" className={styles.footerDesc}>О нас</a>
                    <a href="" className={styles.footerDesc}>Контактные данные</a>
                </div>

                <div className={styles.footerSocialBlock}>
                    <div className={styles.footerTitle}>Медиа</div>

                    <section>
                        <a href="">
                            <div className={styles.footerSocial}>
                                <img src={twitterPhoto} alt="" />
                                <p className={styles.footerSocialTitle}>Twitter</p>
                            </div>
                        </a>
                    </section>

                    <section>
                        <a href="">
                            <div className={styles.footerSocial}>
                                <img src={telegramPhoto} alt="" />
                                <p className={styles.footerSocialTitle}>Telegram</p>
                            </div>
                        </a>
                    </section>

                    <section>
                        <a href="">
                            <div className={styles.footerSocial}>
                                <img src={youtubePhoto} alt="" />
                                <p className={styles.footerSocialTitle}>YouTube</p>
                            </div>
                        </a>
                    </section>
                </div>
            </div>
        </div>
    </div>
  )
}
