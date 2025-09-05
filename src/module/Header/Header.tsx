import { Logo } from '../../UI/Logo'
import style from './Header.module.scss'
import { PageTabs } from '../../components/PageTabs/PageTabs'

export const Header = () => {
  return (
    <header className={style.header} style={{ backgroundColor: 'var(--mantine-color-blackCustom-0)' }}>
      <Logo />
      <PageTabs />
    </header>
  )
}
