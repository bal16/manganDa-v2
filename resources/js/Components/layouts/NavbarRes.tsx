import ResponsiveNavLink from "@/Components/ResponsiveNavLink2";
const NavbarRes = () => {
    return (
        <nav className="sticky bottom-0 w-full max-w-sm mx-auto h-16 p-1 pb-2 text-center border-t-[0.1px] sm:hidden border-primary-950  flex justify-center items-center ">
            <ResponsiveNavLink active={route().current('home')} href={route('home')} icon="home" />
            <ResponsiveNavLink active={false} href="/explore" icon="search" />

            <ResponsiveNavLink active={false} href="/stores" icon="store" />
            <ResponsiveNavLink
                active={false}
                href="/bookmark"
                icon="bookmark"
            />
            <ResponsiveNavLink active={false} href="/profile" icon="profile" />
        </nav>
    );
};

export default NavbarRes;
