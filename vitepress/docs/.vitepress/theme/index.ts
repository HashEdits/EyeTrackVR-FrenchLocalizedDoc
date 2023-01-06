//https://vitepress.vuejs.org/guide/theme-introduction#customizing-css
import { ThemeSettings } from '../../src/custom/theme'
import '../../src/styles/imports.css'
import DefaultTheme from 'vitepress/theme'
import "./custom.css";

const CustomTheme = {
    ...DefaultTheme,
    ...ThemeSettings
}

export default CustomTheme