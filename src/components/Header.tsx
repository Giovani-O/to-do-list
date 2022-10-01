import styles from './Header.module.css';
import Logo from './../assets/logo.svg';

export function Header() {
  return (
    <header>
      <img className={styles.logo} src={Logo} alt="ToDo Logo" />
    </header>
  )
}