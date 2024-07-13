import { InertiaLinkProps, Link } from "@inertiajs/react";
import { clsx } from "clsx";
import {Bookmark, Home, Profile, Search, Store} from "@/Components/icons";

const NavLink = ({
    active = false,
    text,
    className = "",
    children,
    ...props
}: InertiaLinkProps & { active?: boolean; text?: 'Home'|'Search'|'Store'|'Bookmark'|'Profile'|string }) => {
    return (
        <Link
            {...props}
            className={clsx(
                "flex items-center p-2  rounded-lg  hover:text-primary-950  hover:bg-primary-900/30 backdrop-blur-sm hover:backdrop-blur-md dark:hover:text-primary-50   dark:hover:bg-primary-200/30 transition-all ease-in  ",
                { "text-primary-950 bg-primary-900/30 dark:text-primary-50 dark:bg-primary-100/20  ": active == true },
                { "text-primary-900 dark:text-primary-300 ": active == false },
                className
            )}
        >
            {text == 'Home' && (
                <Home active={active}  />
            )}
            {text == 'Search' && (
                <Search active={active}  />
            )}
            {text == 'Store' && (
                <Store  />
            )}
            {text == 'Bookmark' && (
                <Bookmark active={active} />
            )}
            {(text == 'Profile' || text?.includes('Profile')) && (
                <Profile active={active} />
            )}
            {text && (
                <span className="flex-1 ms-3 whitespace-nowrap">{text}</span>
            )}
            {children}
        </Link>
    );
};

export default NavLink;
