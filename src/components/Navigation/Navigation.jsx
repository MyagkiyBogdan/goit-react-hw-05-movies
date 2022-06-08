import styles from './Navigation.module.css';
import { NavLink } from 'react-router-dom';

export default function Navigation() {
  const activeLink = ({ isActive }) =>
    isActive ? styles.activeLink : styles.link;

  return (
    <ul className={styles.navList}>
      <li>
        <NavLink to="/" className={activeLink}>
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/movies" className={activeLink}>
          Movies
        </NavLink>
      </li>
    </ul>
  );
}
