import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { signUpThunk } from '../redux/auth/auth-thunks';
import { ToastContainer } from 'react-toastify';
import { useSelector } from 'react-redux';
import { authSelectors } from '../redux/auth/auth-selectors';
import { Navigate } from 'react-router';
import s from '../App.module.css'

export function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  const nameChange = e => {
    setName(e.target.value);
  };

  const emailChange = e => {
    setEmail(e.target.value);
  };

  const passwordChange = e => {
    setPassword(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    const user = { name, email, password };
    dispatch(signUpThunk(user));
    reset();
  };
  const reset = () => {
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <>
      <h1>Register Form</h1>
      <form onSubmit={handleSubmit} className={s.registerForm}>
        <input
          type="text"
          value={name}
          placeholder="type name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          onChange={nameChange}
          className={s.input}
        />
        <input
          type="mail"
          name="email"
          value={email}
          placeholder="type email"
          onChange={emailChange}
          className={s.input}
        />
        <input
          type="password"
          name="password"
          value={password}
          placeholder="type password"
          onChange={passwordChange}
          className={s.input}
        />
        <button type="submit" className={s.button}>
          Sign Up
        </button>
      </form>
      {isLoggedIn && <Navigate to="/contacts" />}
      <ToastContainer />
    </>
  );
}
