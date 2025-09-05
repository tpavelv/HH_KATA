import styles from './Logo.module.scss'
import LogoImage from '../../assets/logo.png'

export const Logo = () => {
  return (
    <div className={styles.logo}>
      <img src={LogoImage} alt="логотип hh" />

      <span className={styles.title}>.FrontEnd</span>
    </div>
  )
}
