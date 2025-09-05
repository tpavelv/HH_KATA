import { createRoot } from 'react-dom/client'
import App from './App/App'
import './index.css'
import './styles/fonts.scss'
import { MantineProvider, createTheme } from '@mantine/core'
import { Global } from '@emotion/react'
import { Provider } from 'react-redux'
import { store } from './store/store'
const root = createRoot(document.getElementById('root')!)
import '@mantine/core/styles.css'

const theme = createTheme({
  fontFamily: 'Open Sans, sans-serif',
  headings: { fontFamily: 'Open Sans, sans-serif' },
  colors: {
    primary: [
      '#f0f3ff',
      '#dce2ff',
      '#b3c1ff',
      '#8ba1ff',
      '#6280f7',
      '#4263eb', // Primary
      '#364fc7', // Dark Primary
      '#2c3f9e',
      '#223077',
      '#192150',
    ] as const,
    blackCustom: [
      '#ffffff', // White
      '#f6f6f7', // Background
      '#e6e6e6', // Ultra Light
      '#cccccc', // Pre Light
      '#b3b3b3', // Light gray
      '#999999', // Gray
      '#707070',
      '#4a4a4a',
      '#262626',
      '#0f0f10', // Black1
    ] as const,
  },
  primaryColor: 'primary',
})

root.render(
  <MantineProvider theme={theme}>
    <Global
      styles={{
        body: {
          backgroundColor: theme.colors!.blackCustom![1],
          color: theme.colors!.blackCustom![9],
        },
      }}
    />
    <Provider store={store}>
      <App />
    </Provider>
  </MantineProvider>
)
