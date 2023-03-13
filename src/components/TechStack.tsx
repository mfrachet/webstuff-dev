import { IconArrowBackward } from "./icons/IconArrowBackward";
import { IconArrowForward } from "./icons/IconArrowForward";

export const Request = () => <IconArrowForward className="text-6xl" />;

export const Response = () => <IconArrowBackward className="text-6xl" />;

export const Canvas = ({ children }: { children: React.ReactNode }) => (
  <div className="flex flex-col md:flex-row justify-between items-center gap-2">
    {children}
  </div>
);
