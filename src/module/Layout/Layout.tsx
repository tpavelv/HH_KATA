import { Outlet } from 'react-router-dom'
import { Header } from '../Header/Header'
import style from './Layout.module.scss'
export const Layout = () => {
  return (
    <div className={style.layout}>
      <Header />
      <Outlet />
    </div>
  )
}
