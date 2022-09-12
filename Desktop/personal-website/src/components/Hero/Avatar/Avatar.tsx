import logo from "../../../img/dayani-profile.png"
import clsx from 'clsx'

export interface Props {
  className?: string
}

const Avatar = ({ className }: Props) => {
  return (
    <div className={clsx(className, 'flex justify-center','mx-auto flex justify-center w-48 lg:w-56',)}>
      <img src={logo} alt='pic'/>
    </div>
  )
}

export default Avatar

