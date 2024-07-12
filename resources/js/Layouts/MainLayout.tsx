import Navbar from "@/Components/layouts/Navbar";
import NavbarRes from "@/Components/layouts/NavbarRes";
import Sidebar from "@/Components/layouts/Sidebar";
import { MainLayoutProps } from "@/types";
import { Head } from "@inertiajs/react";

const MainLayout = ({ children, title }: MainLayoutProps) => {
    return (
        <div className="bg-primary-50">
            <div className="container flex w-full h-full mx-auto bg-primary-50 max-w-7xl">
                <Head title={title} />
                <Navbar />
                <main className="w-full min-h-screen mx-auto text-center border-primary-950 bg-primary-50 text-primary-950  md:shadow-primary-950 md:shadow-inner">
                    <section className="min-h-screen">{children}</section>
                    <NavbarRes />
                </main>
                <Sidebar /> {/* assign or fetch merchant */}
            </div>
        </div>
    );
};

export default MainLayout;
