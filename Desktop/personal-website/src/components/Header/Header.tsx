import clsx from 'clsx'
import LanguageSwitch from './Languageswitch/LanguageSwitch'
import ThemeSwitch from './ThemeSwitch/ThemeSwitch'

export interface Props {
  className?: string
}

const Header = ({ className }: Props) => {
  return (
    <div className={clsx(className= 'flex justify-between container flex mx-auto px-4 pt-4 sm:pt-6 pb-8')}>
    <ThemeSwitch />
    <LanguageSwitch />
    </div>
  )
}

export default Header
