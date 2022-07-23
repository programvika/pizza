import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from './Category.module.scss';
import { setCategory } from '../../redux/slices/filterSlice';
import Sort from '../Sort/Sort';
import { useNavigate } from 'react-router-dom';
import basketImg from '../../assets/img/basketWhite.svg';

const Category = ({ categoryName }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isMounted = useRef(false);

  const clickCategory = (id) => {
    dispatch(setCategory(id));
  };

  const category = useSelector((state) => state.filter.category);
  const { items, totalPrice } = useSelector((state) => state.cart);

  const totalCount = items.reduce((sum, item) => sum + item.count, 0);

  useEffect(() => {
    if (isMounted.current) {
      const json = JSON.stringify(items);
      localStorage.setItem('cart', json);
    }
    isMounted.current = true;
  }, [items]);

  return (
    <div className={styles.category}>
      <ul>
        {categoryName.map((name, i) => (
          <li
            className={`${category === i ? styles.active : ''}`}
            onClick={() => clickCategory(i)}
            key={i}>
            {name}
          </li>
        ))}
      </ul>
      <Sort />
      {items.length !== 0 ? (
        <button onClick={() => navigate('/basket')} className={styles.btn_category_active}>
          <span> {totalPrice}</span>
          <div></div>
          <span>
            <img src={basketImg} alt="" />
            {totalCount}
          </span>
        </button>
      ) : (
        <button onClick={() => navigate('/basket')} className={styles.btn_category}>
          Корзина
        </button>
      )}
    </div>
  );
};

export default Category;
