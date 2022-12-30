/* eslint-disable */
import Header from '@components/Header'

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { routes } from '.'

// TODO: Add autodetection component that chooses between the one eye and two eye modes based on the number of cameras connected
// TODO: Implement a settings page that allows the user to change the settings of the application

export default function AppRoutes() {
  const getUserName = () => {
    const userName = localStorage.getItem('settings')
    if (typeof userName === 'string') return JSON.parse(userName)
    return ''
  }

  return (
    <BrowserRouter>
      <Header name={getUserName()['name'] ? `Welcome ${getUserName()['name']}` : 'Welcome!'} />
      <Routes>
        {routes.map(({ index, path, Element }) => (
          <Route key={index} path={path} element={<Element />} />
        ))}
      </Routes>
    </BrowserRouter>
  )
}