import clsx from "clsx";
import Avatar from "./Avatar/Avatar";
import Title from "./Title/Title";
import Typed from "react-typed";

export interface Props {
  className?: string;
}

const Hero = ({ className }: Props) => {
  return (
    <div className={clsx(className)}>
      <Avatar />
      <Title />
      <Typed 
      strings={[
      'React developer',
      'MERN developer',
      'Hobby listenig music'
    ]}
    typeSpeed={120}
     backSpeed={20}
    className={clsx(
      'flex  justify-start md:justify-center',
      'text-3xl  ',
      'text-yellow-500',
    
    )}
    loop
      />
    </div>
  );
};

export default Hero;
