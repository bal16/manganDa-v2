import Header from "@/Components/layouts/Header";
import MainLayout from "@/Layouts/MainLayout";
import { router } from "@inertiajs/react";

export default function Home() {
    return (
        <>
            <Header></Header>
            Home
        </>
    );
}

Home.layout = (page: React.ReactNode) => (
    <MainLayout children={page} title="Home" />
);
