import clsx from "clsx";

export interface Props {
  className?: string;
}

const Title = ({ className }: Props) => {
  return (
    <div
      className={clsx(
        className,
        "text-6xl font-bold underline",
        "font-accent font-bold",
        "text-5xl md:text-6xl lg:text-7xl",
        "-rotate-6 -translate-y-10 md:-translate-y-15 lg:-translate-y-10",
        "flex justify-center"
      )}
    >
      <span>S.Dayani</span>
    </div>
  );
};

export default Title;
