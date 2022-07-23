import React from 'react';
import styles from './Basket.module.scss';
import { useSelector } from 'react-redux';
import CartEmpty from '../../components/CartEmpty/CartEmpty';
import CartOne from '../CartOne/CartOne';

const Basket = () => {
  const totalPrice = useSelector(state => state.cart.totalPrice)
  
  return <div className={styles.basket}>{totalPrice > 0 ? <CartOne /> : <CartEmpty />}</div>;
};

export default Basket;
