import { PageProps } from "@/types";
import { BiLogOut } from "react-icons/bi";
import { FaUser } from "react-icons/fa";
import { HiHome } from "react-icons/hi";
import { IoCompassOutline } from "react-icons/io5";
import { PiStorefrontDuotone } from "react-icons/pi";
import { RiBookmarkLine } from "react-icons/ri";
import Logo from "@images/logo.png"
import NavLink from "@/Components/NavLink2";
import { usePage } from "@inertiajs/react";

const Navbar = () => {
    const user = usePage<PageProps>().props.auth.user;
    return (
        <nav className="top-0 hidden w-2/5 h-screen  p-2 border-r-[0.4px] border-marshland-950 md:sticky sm:flex  text-marshland-950 bg-ecru-white-100">
            <div className="grid w-full h-full md:grid-rows-[2fr_4fr_5fr_1fr] px-3 py-4 ">
                <div className="flex -mt-10 md:hidden"></div>
                <div className="hidden -mt-10 md:flex">
                    <img className="w-25 border-1" src={Logo} />
                </div>
                <ul className="space-y-2 font-medium ">
                    <li>
                        <NavLink
                            active={route().current("home")}
                            href={route("home")}
                        >
                            <HiHome size={"2rem"} />
                            <span className="flex-1 ms-3 whitespace-nowrap">
                                Home
                            </span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            active={route().current("explore")}
                            href={route("explore")}
                        >
                            <IoCompassOutline size="2rem" />

                            <span className="flex-1 ms-3 whitespace-nowrap">
                                Explore
                            </span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            active={route().current("stores")}
                            href={route("stores")}
                        >
                            <PiStorefrontDuotone size="2rem" />
                            <span className="flex-1 ms-3 whitespace-nowrap">
                                Stores
                            </span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            active={route().current("bookmark")}
                            href={route("bookmark")}
                        >
                            <RiBookmarkLine size="2rem" />
                            <span className="flex-1 ms-3 whitespace-nowrap">
                                Bookmark
                            </span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            active={route().current("profile")}
                            href={route("profile")}
                        >
                            <FaUser size="2rem" />
                            <span className="flex-1 ms-3 whitespace-nowrap">
                                Profile
                            </span>
                        </NavLink>
                    </li>
                </ul>
                <div className=""></div>
                <div className="space-y-2 font-medium ">
                    <NavLink
                        href={route("logout")}
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
