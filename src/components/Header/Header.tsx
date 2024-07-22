import styles from './styles.module.scss';
import {Link, NavLink} from "react-router-dom";

export const Header = () => {
    console.log('header');
    return (
        <header className={styles.header}>
            <div className={styles.logos}>
                <Link to={'/'}>
                    <img src="/bk.svg" alt={'bk'} height={100}/>
                </Link>
                <Link to={'/'}>
                    <img src="/AKF.svg" alt={'bk'} height={100}/>
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