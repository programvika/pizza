import React, { useEffect, useState} from 'react';
import Carousel from '../../components/Carousel/Carousel';
import Food from '../../components/Food/Food';
import styles from './Home.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { setGoods } from '../../redux/slices/goodsSlice';
import Category from '../../components/Category/Category';


const Home = () => {
    const categoryName = [
        'Пицца',
        'Комбо',
        'Закуски',
        'Десерты',
        'Напитки',
        'Другие товары'
    ]

    const category = useSelector(state => state.filter.category)
    const sort = useSelector(state => state.filter.sort)
    const dispatch = useDispatch()
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        setLoading(true);
        axios.get(`https://62cd5a58a43bf7800856a291.mockapi.io/goods?category=${category}&sortBy=${sort.sortProperty}&order=desc`)
        .then((response) => {
            dispatch(setGoods(response.data));
            setLoading(false);
        });
    }, [category, sort]);


    return (
      <div className={styles.wrapper_home}>
        <Category categoryName={categoryName} />
        <Carousel />
        <Food setLoading={setLoading} loading={loading} categoryName={categoryName} />
      </div>
    );
};

export default Home;
