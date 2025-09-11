import { Tab, Tabs } from '../../types'
import { CustomButton } from '../../UI/CustomButton/CustomButton'
import styles from './PageTabs.module.scss'

import { Link } from 'react-router-dom'

type PageTabsViewProps = {
  tabs: Tab[]
  activeTab: Tabs
  onChange: (activeTab: Tabs) => void
}

// export const PageTabsView = ({ tabs, activeTab, onChange }: PageTabsViewProps) => {
//   return (
//     <ul className={styles.tabList}>
//       {tabs.map((tab) => {
//         return (
//           <li className={styles.tab} key={tab.name}>
//             <CustomButton
//               icon={tab.src ? <img src={tab.src} /> : undefined}
//               isActive={tab.name === activeTab}
//               onClick={() => onChange(tab.name)}
//             >
//               {tab.title}
//             </CustomButton>
//           </li>
//         )
//       })}
//     </ul>
//   )
// }

export const PageTabsView = ({ tabs, activeTab, onChange }: PageTabsViewProps) => {
  return (
    <>
      <ul className={styles.tabList}>
        {tabs.map((tab) => {
          return (
            <li className={styles.tab} key={tab.name}>
              <CustomButton
                icon={tab.src ? <img src={tab.src} /> : undefined}
                isActive={tab.name === activeTab}
                onClick={() => onChange(tab.name)}
              >
                {tab.title}
              </CustomButton>
            </li>
          )
        })}
        {/* <Link to="/notfounded">notfounded</Link> */}
      </ul>
    </>
  )
}
