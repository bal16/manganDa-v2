import { Link, InertiaLinkProps } from '@inertiajs/react';
import { clsx } from 'clsx';
import { Bookmark, Home, Profile, Search, Store } from '@/Components/icons';

export default function ResponsiveNavLink({ active = false, icon, className = '', children, ...props }: InertiaLinkProps & { active?: boolean, icon?:'home'|'search'|'store'|'bookmark'|'profile'|string }) {
    return (
        <Link {...props} className={clsx("block mx-auto  rounded-lg  group p-2",{"text-primary-950 bg-primary-300":active==true},{"icon-primary-900":active==false})}>
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
