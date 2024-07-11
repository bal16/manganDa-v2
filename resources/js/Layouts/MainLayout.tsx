import Navbar from "@/Components/layouts/Navbar";
import NavbarRes from "@/Components/layouts/NavbarRes";
import Sidebar from "@/Components/layouts/Sidebar";
import { PageProps } from "@/types";
import { Head } from "@inertiajs/react";
import { ReactNode } from "react";

type MainLayoutProps = {
    children: ReactNode;
    auth: PageProps;
    title: string;
};

const MainLayout = ({ children,  title }: MainLayoutProps) => {
    return (
        <div className="container flex w-full h-full mx-auto bg-ecru-white-100 max-w-7xl">
            <Head title={title} />
            <Navbar  />
            <main className="">{children}</main>
            <Sidebar  /> {/* assign or fetch merchant */}
            <NavbarRes />
        </div>
    );
};

export default MainLayout;
