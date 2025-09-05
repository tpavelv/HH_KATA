import aboutImage from '../../assets/About_image.svg'
import { useTypedDispatch, useTypedSelector } from '../../hooks/redux/redux'
import { changeTab } from '../../reducers/UiSlice'
import { Tabs, TabsTitles } from '../../types'
import { PageTabsView } from './PageTabsView'
import styles from './PageTabs.module.scss'
export const PageTabs = () => {
  const tabs = [
    { name: Tabs.find, title: TabsTitles.FIND },
    { name: Tabs.about, title: TabsTitles.ABOUT, src: aboutImage },
  ]

  const activeTab = useTypedSelector((state) => state.ui.activeTab)
  const dispatch = useTypedDispatch()
  const handleChange = (activeTab: Tabs) => {
    dispatch(changeTab(activeTab))
  }
  return (
    <div className={styles.tabsWrapper}>
      <PageTabsView tabs={tabs} activeTab={activeTab} onChange={handleChange} />
    </div>
  )
}
