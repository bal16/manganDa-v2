import Header from "@/Components/layouts/Header";
import MainLayout from "@/Layouts/MainLayout";

export default function Home() {

    return (
    <>
        <Header></Header>
        Home
    </>
    );
}

Home.layout = (page:React.ReactNode) => <MainLayout children={page} title="Home"  />

