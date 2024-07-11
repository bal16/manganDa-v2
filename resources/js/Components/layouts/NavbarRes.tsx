import { HiHome } from "react-icons/hi";
import ResponsiveNavLink from "../ResponsiveNavLink2";
import { IoCompassOutline } from "react-icons/io5";
import { PiStorefrontDuotone } from "react-icons/pi";
import { FaUser } from "react-icons/fa";
import { BiLogOut } from "react-icons/bi";

const NavbarRes = () => {
    return (
        <nav className="sticky bottom-0 w-full h-16 p-1 pb-2 text-center border-t-[0.1px] sm:hidden border-marshland-950  bg-ecru-white-100 grid grid-cols-5 ">
            <ResponsiveNavLink
                active={route().current("home")}
                href={route("home")}
            >
                <span className="items-center block w-8  align-middle ps-[0.1rem]">
                    <HiHome width="1.7rem" height="2rem" />
                </span>
            </ResponsiveNavLink>
            <ResponsiveNavLink
                active={route().current("explore")}
                href="/explore"
            >
                <IoCompassOutline size="2rem" />
            </ResponsiveNavLink>

            <ResponsiveNavLink
                active={route().current("stores")}
                href="/stores"
            >
                <PiStorefrontDuotone size="2rem" />
            </ResponsiveNavLink>
            <ResponsiveNavLink
                active={route().current("bookmark")}
                href="/bookmark"
            >
                {/*  href={`#${auth.user.id}`}> */}
                <FaUser size="2rem" />
            </ResponsiveNavLink>
            <ResponsiveNavLink
                active={route().current("profile")}
                href="/profile"
            >
                <BiLogOut size="2rem" />
            </ResponsiveNavLink>
        </nav>
    );
};

export default NavbarRes;
