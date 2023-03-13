import { TbArrowNarrowLeft, TbArrowNarrowRight } from "react-icons/tb";

export const Request = () => <TbArrowNarrowRight className="text-6xl" />;

export const Response = () => <TbArrowNarrowLeft className="text-6xl" />;

export const Canvas = ({ children }: { children: React.ReactNode }) => (
  <div className="flex flex-col md:flex-row justify-between items-center gap-2">
    {children}
  </div>
);
