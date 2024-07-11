import { Link, InertiaLinkProps } from '@inertiajs/react';
import { clsx } from 'clsx';

export default function ResponsiveNavLink({ active = false, className = '', children, ...props }: InertiaLinkProps & { active?: boolean }) {
    return (
        <Link {...props} className={clsx("block mx-auto  rounded-lg  group p-2",{"text-primary-950 bg-primary-300":active==true},{"text-primary-900":active==false})}>
            {children}
        </Link>
    );
}
