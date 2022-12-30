import Main from '@pages/Home'
import SettingsPage from '@pages/Settings'
export interface IRoutes {
  path: string
  index: string
  Element: () => JSX.Element
}

export const routes: IRoutes[] = [
  { path: '/', Element: Main, index: 'main' },
  { path: '/settings', Element: SettingsPage, index: 'settings_page' },
]
