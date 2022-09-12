import clsx from 'clsx'
import { ReactComponent as FacebookLogo } from './facebook-logo.svg'
import { ReactComponent as GithubLogo } from './github-logo.svg'
import { ReactComponent as LinkinLogo } from './linkin-logo.svg'


export interface Props {
  className?: string
}

const SocialMedia = ({ className }: Props) => {
  return (
    <ul className={clsx(className, 'flex gap-2 fill-current')}>
      <li className="w-8">
        <a href="https://github.com/dayani97">
          <GithubLogo />
        </a>
      </li>
      <li className="w-8">
        <a href="https://www.facebook.com/dayani.sugunaranjan">
          <FacebookLogo />
        </a>
      </li>
      <li className="w-8">
        <a href="http://www.linkedin.com/in/dayani-sugunaranjan-851b121ba">
          <LinkinLogo />
        </a>
      </li>
    </ul>
  )
}

export default SocialMedia
