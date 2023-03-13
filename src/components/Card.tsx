export interface CardProps {
  children: React.ReactNode;
}

const Card = ({ children }: CardProps) => {
  return (
    <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
      {children}
    </div>
  );
};

export default Card;
