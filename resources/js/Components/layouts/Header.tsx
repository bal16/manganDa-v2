import { ReactNode } from "react";

const Header = ({ children }: { children?: ReactNode }) => {
    return (
        <header className="flex justify-between items-center h-12 p-2 border-b-[0.1px] border-primary-950 bg-transparent">
            <span className="text-xl">manganda</span>
            {children}
        </header>
    );
};

export default Header;
