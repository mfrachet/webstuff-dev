export interface TagProps {
  children: React.ReactNode;
}

export default function Tag({ children }: TagProps) {
  return (
    <span className="px-3 py-1 rounded-full bg-slate-700 text-sm text-white">
      {children}
    </span>
  );
}
