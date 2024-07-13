import { PageProps } from "@/types";
import { BiLogOut } from "react-icons/bi";
import Logo from "@images/logo.png";
import NavLink from "@/Components/NavLink2";
import { Link, usePage } from "@inertiajs/react";

const Navbar = () => {
    const user = usePage<PageProps>().props.auth.user;
    return (
        <nav className="top-0 hidden xl:w-2/5 w-1/5 h-screen  p-2 border-r-[0.4px] border-primary-950 md:sticky sm:flex sm:flex-col   text-primary-950 dark:text-primary-50 ">
            <div>
                <Link
                    href={route("home")}
                    className="hidden  xl:flex rounded-full mb-5 object-cover size-32 relative overflow-hidden xl:items-center xl:justify-center px-5 group"
                >
                    <div className="bg-primary-200 dark:bg-primary-300 dark:bg-opacity-30 group-hover:dark:bg-opacity-40 blur-xl absolute size-full transition-all ease-in-out"></div>
                    <img
                        className="w-25 border-1  cover relative z-10 -mt-3"
                        src={Logo}
                    />
                </Link>
            </div>
            <ul className="space-y-2 font-medium w-full">
                <li>
                    <NavLink
                        active={route().current("home")}
                        href={route("home")}
                        text="Home"
                    />
                </li>
                <li>
                    <NavLink active={false} href={"#"} text="Search" />
                </li>
                <li>
                    <NavLink active={false} href={"#"} text="Store" />
                </li>
                <li>
                    <NavLink active={false} href={"#"} text="Bookmark" />
                </li>
                <li>
                    <NavLink
                        active={false}
                        href={"#"}
                        text={user.username + "'s Profile"}
                    />
                </li>
            </ul>
            <div className=" w-full h-full relative">
                <NavLink
                    href={route("logout")}
                    method="post"
                    as="button"
                    className="absolute bottom-0 w-full"
                >
                    <BiLogOut size="2rem" />
                    <span className="flex-1 ms-3 text-start whitespace-nowrap me-auto">
                        Log-out
                    </span>
                </NavLink>
            </div>
        </nav>
    );
};

export default Navbar;
