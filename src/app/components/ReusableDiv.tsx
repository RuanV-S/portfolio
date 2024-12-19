import { ReactNode } from "react";

interface ReusableDivProps {
  children: ReactNode;
}

const ReusableDiv: React.FC<ReusableDivProps> = ({ children }) => {
  return (
    <div className="text-3xl font-bold text-cyan-100 uppercase tracking-widest">
      {children}
    </div>
  );
};

export default ReusableDiv;
