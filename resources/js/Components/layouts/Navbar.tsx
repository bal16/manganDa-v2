import { PageProps } from "@/types";
import { BiLogOut } from "react-icons/bi";
import Logo from "@images/logo.png"
import NavLink from "@/Components/NavLink2";
import { usePage } from "@inertiajs/react";

const Navbar = () => {
    const user = usePage<PageProps>().props.auth.user;
    return (
        <nav className="top-0 hidden w-2/5 h-screen  p-2 border-r-[0.4px] border-primary-950 md:sticky sm:flex  text-primary-950 bg-primary-50">
            <div className="grid w-full h-full md:grid-rows-[2fr_4fr_5fr_1fr] px-3 py-4 ">
                <div className="flex -mt-10 md:hidden"></div>
                <div className="hidden -mt-10 md:flex">
                    <img className="w-25 border-1" src={Logo} />
                </div>
                <ul className="space-y-2 font-medium ">
                    <li>
                        <NavLink
                            active={route().current('home')}
                            href={route('home')}
                            text="Home"
                        />
                    </li>
                    <li>
                        <NavLink
                            active={false}
                            href={'#'}
                            text="Search"
                        />
                    </li>
                    <li>
                        <NavLink
                            active={false}
                            href={'#'}
                            text="Store"
                        />
                    </li>
                    <li>
                        <NavLink
                            active={false}
                            href={'#'}
                            text="Bookmark"
                       />
                    </li>
                    <li>
                        <NavLink
                            active={false}
                            href={'#'}
                            text={user.username + "'s Profile"}
                        />
                    </li>
                </ul>
                <div className=""></div>
                <div className="space-y-2 font-medium ">
                    <NavLink
                        href={route('logout')}
                        method="post"
                        as="button"
                    >
                        <BiLogOut
                            size="2rem"
                        />
                        <span className="flex-1 me-24 text-start ms-3 whitespace-nowrap">
                            Log-out
                        </span>
                    </NavLink>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
