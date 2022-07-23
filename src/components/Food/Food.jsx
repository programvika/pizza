import React from 'react';
import styles from './Food.module.scss';
import { useSelector, useDispatch } from 'react-redux';
import Search from '../Search/Search';
import { addItems } from '../../redux/slices/cartSlice';
import Skeleton from 'components/Skeleton';

const Food = ({ categoryName, loading }) => {
  const goods = useSelector((state) => state.goods.goods);
  const category = useSelector((state) => state.filter.category);
  const search = useSelector((state) => state.filter.search);
  const dispatch = useDispatch();

  const addToCart = (item) => {
    dispatch(addItems(item));
  };

  const skeleton = [...new Array(6)].map((index) => <Skeleton key={index} />);

  return (
    <div className={styles.wrapper_food}>
      <div className={styles.title}>
        {categoryName[category]} <Search />
      </div>
      <div className={styles.goods}>
        {loading
          ? skeleton
          : goods
              .filter((itemOne) => {
                if (itemOne.title.toLowerCase().includes(search.toLowerCase())) {
                  return true;
                }
                return false;
              })
              .map((good) => (
                <div key={good.id} className={styles.cart}>
                  <img src={good.img} alt="" />
                  <div className={styles.cart_name}>{good.title}</div>
                  <div className={styles.cart_description}>{good.description}</div>
                  <div className={styles.cart_bottom}>
                    <div className={styles.price}>от {good.price} руб</div>
                    <div className={styles.cart_btn}>
                      <button onClick={() => addToCart(good)}>Выбрать</button>
                    </div>
                  </div>
                </div>
              ))}
      </div>
    </div>
  );
};

export default Food;
