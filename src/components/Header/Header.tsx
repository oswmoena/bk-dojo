import {Link, NavLink} from "react-router-dom";
import AKF from "/src/assets/AKF.svg"
import BK from "/src/assets/bk.svg"
import styles from './styles.module.scss';

export const Header = () => {
    console.log('header');
    return (
        <header className={styles.header}>
            <div className={styles.logos}>
                <Link to={'/'}>
                    <img src={BK} alt={'bk'} height={100}/>
                </Link>
                <Link to={'/'}>
                    <img src={AKF} alt={'akf'} height={100}/>
                </Link>

            </div>
            <nav className={styles.navbar}>
                <NavLink to={'/history'} className={({ isActive }) => (isActive ? 'activeLink' : '')}>
                    <div>Historia del Kempo</div>
                </NavLink>
                <NavLink to={'/dojo'} className={({ isActive }) => (isActive ? 'activeLink' : '')}>
                    <div>Nuestra Escuela</div>
                </NavLink>
                <NavLink to={'/contact'} className={({ isActive }) => (isActive ? 'activeLink' : '')}>
                    <div>Contacto</div>
                </NavLink>
                <NavLink to={'/learn'} className={({ isActive }) => (isActive ? 'activeLink' : '')}>
                    <div>Programa</div>
                </NavLink>
            </nav>
        </header>
    )
}