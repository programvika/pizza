import React, { useEffect, useRef, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import styles from './Auth.module.scss';
import { setUser } from '../../redux/slices/userSlice';
import { useDispatch, useSelector } from 'react-redux';
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';

const Auth = () => {
  const location = useLocation();
  const isLogin = location.pathname === '/login';
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isMounted = useRef(false);
  const user = useSelector(state => state.user)
  console.log(user);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (email, password) => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then(( userCredential ) => {
        const email = userCredential.user.email
        const token = userCredential.user.accessToken
        const id = userCredential.user.uid;
        dispatch(
          setUser({
            email: email,
            token: token,
            id: id
          }),
        );
        navigate('/');
      })
      .catch(console.error);
  };

  const handleReg = (email, password) => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const email = userCredential.user.email;
        const token = userCredential.user.accessToken;
        const id = userCredential.user.uid;

        dispatch(
          setUser({
            email: email,
            token: token,
            id: id,
          }),
        );
        navigate('/');
      })
      .catch(console.error);
  };

    useEffect(() => {
      if (isMounted.current) {
        localStorage.setItem('authUser', JSON.stringify(user));
      }
      isMounted.current = true;
    }, [user]);

  return (
    <div className={styles.auth}>
      <div className={styles.wrapper}>
        <div className={styles.form}>
          <div className={styles.title}>{isLogin ? 'Вход' : 'Регистрация'}</div>
          <input
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            placeholder="Введите логин"
          />
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            placeholder="Введите пароль"
          />
          <div>
            {isLogin ? (
              <button onClick={() => handleLogin(email, password)}>Войдите</button>
            ) : (
              <button onClick={() => handleReg(email, password)}>Зарегистрируйтесь</button>
            )}
          </div>
        </div>
        {isLogin ? (
          <div>
            Вы еще не зарегистрированы? Тогда нажмите <Link to="/reg"> сюда </Link>
          </div>
        ) : (
          <div>
            Вы уже зарегистрированы? Тогда нажмите <Link to="/login"> сюда </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Auth;
