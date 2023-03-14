export interface ExampleWrapperProps {
  children: React.ReactNode;
}

export const ExampleWrapper = ({ children }: ExampleWrapperProps) => {
  return <div className="md:-mx-16 bg-slate-50 p-8 rounded-xl">{children}</div>;
};
