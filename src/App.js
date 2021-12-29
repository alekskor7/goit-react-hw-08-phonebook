import  s  from './App.module.css';
import { Link, Routes, Route } from 'react-router-dom';
import { Register } from './pages/Register';
import { Login } from './pages/Login';
import { Home } from './pages/Home';
import { Contacts } from './pages/Contacts';
import { PrivateRoute } from './routes/PrivateRoute';
import { PublicRoute } from './routes/PublicRoute';
import { useDispatch, useSelector } from 'react-redux';
import { currentUserThunk } from './redux/auth/auth-thunks';
import { useEffect } from 'react';
import { authSelectors } from './redux/auth/auth-selectors';
import { ToastContainer } from 'react-toastify';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(currentUserThunk());
  }, [dispatch]);

  const isAuth = useSelector(authSelectors.getIsLoggedIn);

  return (
    <div className={s.app}>
      <header className={s.header}>
        <nav className={s.navigation}>
          <ul className={s.navList}>
            <li>
              <Link to="/" className={s.navLink}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/register" className={s.navLink}>
                Sign Up
              </Link>
            </li>
            <li>
              <Link to="/login" className={s.navLink}>
                Login
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <section className={s.section}>
          <Routes>
            <Route path="/" exact element={<PublicRoute component={Home} />} />
            <Route path="/login" element={<PublicRoute component={Login} />} />
            <Route
              path="/register"
              element={<PublicRoute component={Register} />}
            />
            <Route
              path="/contacts"
              element={<PrivateRoute isAuth={isAuth} component={Contacts} />}
            />
          </Routes>
          <ToastContainer />
        </section>
      </main>
    </div>
  );
}

export default App;
