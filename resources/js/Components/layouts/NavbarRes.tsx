import { HiHome } from "react-icons/hi";
import ResponsiveNavLink from "../ResponsiveNavLink2";
import { IoCompassOutline } from "react-icons/io5";
import { PiStorefrontDuotone } from "react-icons/pi";
import { FaUser } from "react-icons/fa";
import { RiBookmarkLine } from "react-icons/ri";

const NavbarRes = () => {
    return (
        <nav className="sticky bottom-0 w-full h-16 p-1 pb-2 text-center border-t-[0.1px] sm:hidden border-primary-950  bg-primary-50 grid grid-cols-5 ">
            <ResponsiveNavLink
                active={false}
                href={'#'}
            >
                <span className="items-center block w-8  align-middle ps-[0.1rem]">
                    <HiHome size="2rem" />
                </span>
            </ResponsiveNavLink>
            <ResponsiveNavLink
                active={false}
                href="/explore"
            >
                <IoCompassOutline size="2rem" />
            </ResponsiveNavLink>

            <ResponsiveNavLink
                active={false}
                href="/stores"
            >
                <PiStorefrontDuotone size="2rem" />
            </ResponsiveNavLink>
            <ResponsiveNavLink
                active={false}
                href="/bookmark"
            >
                {/*  href={`#${auth.user.id}`}> */}
                <RiBookmarkLine size="2rem" className="p-1" />
            </ResponsiveNavLink>
            <ResponsiveNavLink
                active={false}
                href="/profile"
            >
                <FaUser size="2rem"  className="p-1" />
            </ResponsiveNavLink>
        </nav>
    );
};

export default NavbarRes;
