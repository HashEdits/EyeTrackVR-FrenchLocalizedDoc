import styles from './index.module.scss'

export interface Iprops {
  color: string
  shadow: string
  onClick: () => void
  text: string
}

export const Button = ({ color, shadow, onClick, text }: Iprops) => {
  return (
    <button
      className={styles.primary_btn}
      style={{ background: color, boxShadow: shadow }}
      onClick={onClick}>
      {text}
    </button>
  )
}
