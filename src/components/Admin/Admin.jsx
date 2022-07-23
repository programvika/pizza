import React, {useState } from 'react';
import styles from './Admin.module.scss';
import axios from 'axios'

const Admin = () => {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [img, setImg] = useState('')
    const [price, setPrice] = useState('')
    const [category, setCategory] = useState('')
    const [rating, setRating] = useState('')
    const [size, setSize] = useState([])


    const postGoods = async () => {
        return await axios.post(`https://62cd5a58a43bf7800856a291.mockapi.io/goods`, {
            title: title,
            description: description,
            img: img,
            price: +price,
            category: +category,
            rating: +rating,
            size: size
        })

        .catch((err) => console.log(err))
        .finally(
            setTitle(''),
            setDescription(''),
            setImg(''),
            setPrice(''),
            setCategory(''),
            setRating(''),
            setSize([])
        )
    }

    const onChangeSize = (e) => {
            let value = e.target.value;
            setSize(value.split(","));
    }

    return (
        <div className={styles.wrapper_admin}>
            <div className={styles.panel}>
                Добавить товар:
                <div className={styles.inputs}>
                    <input
                        onChange={(e) => setTitle(e.target.value)}
                        value={title} 
                        placeholder="Наименование товара" />
                    <input
                        onChange={(e) => setDescription(e.target.value)}
                        value={description}
                        placeholder="Описание товара" />
                    <input
                        onChange={(e) => setImg(e.target.value)}
                        value={img}
                        placeholder="Адрес изображения товара" />
                    <input
                        onChange={(e) => setPrice(e.target.value)}
                        value={price}
                        placeholder="Цена" />
                    <input
                        onChange={(e) => setCategory(e.target.value)}
                        value={category}
                        placeholder="Категория" />
                    <input
                        value={rating}
                        onChange={(e) => setRating(e.target.value)}
                        placeholder="Рейтинг" />
                    <input
                        onChange={onChangeSize}
                        value={size}
                        placeholder="Доступные размеры" />
                </div>
                <div className={styles.btn_admin}>
                    <button onClick={postGoods}> Отправить </button>
                </div>
            </div>
        </div>
    );
};

export default Admin;
