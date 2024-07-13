import { Link, InertiaLinkProps } from '@inertiajs/react';
import { clsx } from 'clsx';
import { Bookmark, Home, Profile, Search, Store } from '@/Components/icons';

export default function ResponsiveNavLink({ active = false, icon, className = '', children, ...props }: InertiaLinkProps & { active?: boolean, icon?:'home'|'search'|'store'|'bookmark'|'profile'|string }) {
    return (
        <Link {...props} className={clsx("block mx-auto  rounded-lg  group p-2  hover:text-primary-950  hover:bg-primary-900/30 backdrop-blur-sm hover:backdrop-blur-md dark:hover:text-primary-50   dark:hover:bg-primary-200/30 transition-all ease-in" ,{"text-primary-950 bg-primary-900/30 dark:text-primary-50 dark:bg-primary-100/20  ":active==true},{"text-primary-900 dark:text-primary-300":active==false})}>
            {icon == 'home' && (
                <Home active={active}  />
            )}
            {icon == 'search' && (
                <Search active={active}  />
            )}
            {icon == 'store' && (
                <Store  />
            )}
            {icon == 'bookmark' && (
                <Bookmark active={active} />
            )}
            {icon == 'profile' && (
                <Profile active={active} />
            )}
            {children}
        </Link>
    );
}
