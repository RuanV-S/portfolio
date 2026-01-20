import { ReactNode } from "react";

interface ReusableDivProps {
  children: ReactNode;
}

const ReusableDiv: React.FC<ReusableDivProps> = ({ children }) => {
  return (
    <div
      className="
    text-3xl font-bold uppercase tracking-widest
    rounded-3xl p-11 shadow-lg

    /* Light */
    bg-white
    text-cyan-700
    border border-zinc-200
    bg-[radial-gradient(#e5e7eb_1px,transparent_1px)]
    [background-size:16px_16px]

    /* Dark */
    dark:bg-zinc-900
    dark:text-zinc-100
    dark:border-zinc-700
    dark:bg-[radial-gradient(#27272a_1px,transparent_1px)]
  "
    >
      {children}
    </div>
  );
};

export default ReusableDiv;
