import { InertiaLinkProps, Link } from "@inertiajs/react"
import { clsx } from "clsx"

const NavLink = ({ active = false, className = '', children, ...props }: InertiaLinkProps & { active?: boolean }) => {

  return (
    <Link
            {...props}
            className={clsx("flex items-center p-2  rounded-lg  hover:text-primary-950  hover:bg-primary-300 w-full",{"text-primary-950 bg-primary-300":active==true}, { "text-primary-900 ":active==false}, className)}
        >
            {children}
        </Link>
  )
}

export default NavLink
