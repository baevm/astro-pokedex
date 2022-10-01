import { IoBulb, IoBulbOutline } from 'react-icons/io5/index.js'
import { useTheme } from '../../hooks/useTheme'

const ThemeButton = () => {
  const { theme, changeTheme } = useTheme()

  const handleModeChange = () => {
    changeTheme(theme === 'light' ? 'dark' : 'light')
  }

  return (
    <button
      className='rounded-3xl border-[1px] border-active-border-color p-2 text-active-border-color'
      onClick={handleModeChange}>
      {theme === 'dark' ? <IoBulb size={32} /> : <IoBulbOutline size={32} />}
    </button>
  )
}

export default ThemeButton
