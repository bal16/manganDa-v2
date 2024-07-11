import { Link, InertiaLinkProps } from '@inertiajs/react';
import { clsx } from 'clsx';

export default function ResponsiveNavLink({ active = false, className = '', children, ...props }: InertiaLinkProps & { active?: boolean }) {
    return (
        <Link {...props} className={clsx("block mx-auto  rounded-lg  group p-2",{"text-marshland-950 bg-ecru-white-300":active==true},{"text-marshland-600":active==false})}>
            {children}
        </Link>
    );
}
