import React from 'react';
import styles from './CartOne.module.scss';

import { clearItems } from '../../redux/slices/cartSlice';
import { removeItems } from '../../redux/slices/cartSlice';
import { minusItem } from '../../redux/slices/cartSlice';
import { plusItem } from '../../redux/slices/cartSlice';
import basketImg from '../../assets/img/basket.svg';
import backImg from '../../assets/img/back.svg';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const CartOne = () => {
  const items = useSelector((state) => state.cart.items);
  const totalCount = items.reduce((sum, item) => sum + item.count, 0);
  const totalPrice = useSelector((state) => state.cart.totalPrice);

  const dispatch = useDispatch();

  return (
    <div>
      <div className={styles.wrapper}>
        <div className={styles.basket_header}>
          <div className={styles.title}>
            <img src={basketImg} alt="basket" />
            Корзина
          </div>
          <button onClick={() => dispatch(clearItems())} className={styles.basket_btn_header}>
            Очистить корзину
          </button>
        </div>
        <div className={styles.basket_items}>
          {items.map((item, i) => (
            <div key={i} className={styles.basket_item}>
              <div className={styles.item_name}>
                <img src={item.img} alt="" />
                <div className={styles.title}>
                  <div>{item.title}</div>
                </div>
              </div>
              <div className={styles.quantity}>
                <button
                disabled={item.count === 1}
                  onClick={() => dispatch(minusItem(item.id))}>-
                </button>
                <div>{item.count}</div>
                <button onClick={() => dispatch(plusItem(item.id))}>+</button>
              </div>
              <div className={styles.price}>{item.price * item.count} руб.</div>
              <button onClick={() => dispatch(removeItems(item.id))}>x</button>
            </div>
          ))}
        </div>
        <div className={styles.summary}>
          <div>Всего товаров: {totalCount} шт.</div>
          <div>Сумма заказа: {totalPrice} рублей</div>
        </div>
        <div className={styles.basket_btns}>
          <div className={styles.back}>
            <img src={backImg} alt="" />
            <Link to='/'>
              <button className={styles.backBtn}>Вернуться назад</button>
            </Link>
          </div>
          <button className={styles.payBtn}>Оплатить сейчас</button>
        </div>
      </div>
    </div>
  );
};

export default CartOne;
