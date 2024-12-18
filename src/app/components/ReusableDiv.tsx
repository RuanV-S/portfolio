import { ReactNode } from "react";

interface ReusableDivProps {
  children: ReactNode; // Aceita qualquer conteúdo como filhos
}

const ReusableDiv: React.FC<ReusableDivProps> = ({ children }) => {
  return (
    <div className="text-3xl font-bold text-cyan-100 uppercase tracking-widest">
      {children}
    </div>
  );
};

export default ReusableDiv;
