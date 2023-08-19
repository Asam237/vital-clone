import type { ReactNode } from "react";
import Sidebar from "./components/commons/Sidebar";

interface DefaultLayoutProps extends React.AllHTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

export const DefaultLayout = ({
  children,
  className,
  ...props
}: DefaultLayoutProps) => {
  return (
    <div className="h-screen flex flex-col font-sans">
      <div className="flex flex-1 h-screen overflow-x-hidden">
        <Sidebar />
        <main className="bg-gray-200 min-h-full w-full h-full p-6">
          {children}
        </main>
      </div>
    </div>
  );
};
