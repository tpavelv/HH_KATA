import styles from './Logo.module.scss'
import LogoImage from '../../assets/logo.png'
import { Link } from 'react-router-dom'
export const Logo = () => {
  return (
    <div className={styles.logo}>
      <Link to="/" className={styles.link}>
        <img className={styles.image} src={LogoImage} alt="логотип hh" />

        <span className={styles.title}>.FrontEnd</span>
      </Link>
    </div>
  )
}
