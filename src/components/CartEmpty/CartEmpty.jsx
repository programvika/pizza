import React from 'react';
import styles from './CartEmpty.module.scss';
import sadImg from '../../assets/img/pngwing.com.png';

const CartEmpty = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        Корзина пуста
        <img src={sadImg} alt="" />
      </div>
      <div className={styles.desc}>
        <p>Добавьте скорее сюда что-нибудь!:)</p>
      </div>
    </div>
  );
};

export default CartEmpty;
