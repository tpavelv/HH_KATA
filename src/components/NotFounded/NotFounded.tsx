import { Link } from 'react-router-dom'
import CatImage from '../../assets/Cat.gif'
import styles from './NotFounded.module.scss'
export const NotFounded = () => {
  return (
    <section className={styles.notFoundedPage}>
      <div className={styles.wraper}>
        <div className={styles.text_wraper}>
          <h1 className={styles.title}>Упс! Такой страницы не существует</h1>
          <p>Давайте перейдем к началу</p>
        </div>
        <Link to="/" className={styles.link}>
          На главную
        </Link>
      </div>
      <img src={CatImage} alt="Картинка для утешения" className={styles.image} />
    </section>
  )
}
