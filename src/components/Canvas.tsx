export const Canvas = ({ children }: { children: React.ReactNode }) => (
  <div className="flex flex-col md:flex-row justify-between items-center gap-2">
    {children}
  </div>
);
