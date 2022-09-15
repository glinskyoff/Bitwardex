import React, {useState} from 'react';
import styles from './Menu.module.scss';

import menuApple from './images/apple.png';
import menuBitcoin from './images/bitcoin.png';
import menuDollar from './images/dollar.png';
import menuGold from './images/gold.png';

export const Menu = () => {
  return (
    <div className={styles.menu}>
        <div className={styles.menu__inner}>

            <div className={styles["menu-bg"]}>

                <div className={styles["menu-block"]}>
                    <div className={styles["menu-block-wrapper"]}>
                        <img src={menuApple} />
                        <p className={styles["menu-title"]}>Фондовый рынок</p>
                        <p className={styles["menu-desc"]}>Торговля акциями и облигациями, паи</p>
                    </div>
                </div>

                <div className={styles["menu-block"]}>
                    <div className={styles["menu-block-wrapper"]}>
                        <img src={menuBitcoin} />
                        <p className={styles["menu-title"]}>Криптовалюта</p>
                        <p className={styles["menu-desc"]}>Срочная и спотовая торговля</p>
                    </div>
                </div>

                <div className={styles["menu-block"]}>
                    <div className={styles["menu-block-wrapper"]}>
                        <img src={menuDollar} />
                        <p className={styles["menu-title"]}>Форекс</p>
                        <p className={styles["menu-desc"]}>Торговля любыми валютами</p>
                    </div>
                </div>

                <div className={styles["menu-block"]}>
                    <div className={styles["menu-block-wrapper"]}>
                        <img src={menuGold} />
                        <p className={styles["menu-title"]}>Другие рынки</p>
                        <p className={styles["menu-desc"]}>Торговля на ДМ, товарных и сырьевых рынках</p>
                    </div>
                </div>

            </div>

        </div>
    </div>
  )
}
