import React from 'react';
import styles from './Header.module.scss';
import logo from '../../assets/img/logo.svg';
import star from '../../assets/img/star.svg';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from 'hooks/use-auth';
import { removeUser } from 'redux/slices/userSlice';
import { useDispatch, useSelector } from 'react-redux';

const Header = () => {
  const nav = useNavigate();
  const dispatch = useDispatch()
  const currentUser = useSelector(state => state.user.currentUser)

  const {isAuth} = useAuth()

  const logOut = () => {
    dispatch(removeUser())
  }

  return (
    <div className={styles.wrapper_header}>
      <div className={styles.logo}>
        <Link to="./">
          <img className={styles.logo_img} src={logo} alt="logo" />
        </Link>
        <div className={styles.time}>
          <div>Доставка пиццы Москва</div>
          <div className={styles.rating}>
            29 мин
            <i className={styles.dote}></i>
            4.81
            <img className={styles.star} src={star} alt="star" />
          </div>
        </div>
      </div>
      <div className={styles.auth}>
        {isAuth ? (
          <button onClick={() => nav('/admin')} className={styles.btn_auth}>
            Админ панель
          </button>
        ) : (
          ''
        )}
        {isAuth ? (
          <div className={styles.AuthDiv}>
            <button onClick={logOut} className={styles.btn_auth}>
              Выйти
            </button>
          </div>
        ) : (
          <button onClick={() => nav('/reg')} className={styles.btn_auth}>
            Войти
          </button>
        )}
      </div>
    </div>
  );
};

export default Header;
