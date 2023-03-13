export interface TitleProps {
  id: string;
  as: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  size: "6xl" | "5xl" | "4xl" | "3xl" | "2xl" | "xl" | "lg";
  children: React.ReactNode;
}

const SizeClass = {
  "6xl": "text-5xl md:text-6xl",
  "5xl": "text-4xl md:text-5xl",
  "4xl": "text-4xl",
  "3xl": "text-3xl",
  "2xl": "text-2xl",
  xl: "text-xl",
  lg: "text-lg",
};

const Title = ({ size, as, id, children }: TitleProps) => {
  const sizeClass = SizeClass[size];
  const sharedClass = `text-slate-900 font-bold leading-none ${sizeClass}`;
  const Root = as;

  return (
    <Root id={id} className={sharedClass}>
      {children}
    </Root>
  );
};

export default Title;
