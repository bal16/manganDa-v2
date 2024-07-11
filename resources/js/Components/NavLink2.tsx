import { InertiaLinkProps, Link } from "@inertiajs/react"
import { clsx } from "clsx"

const NavLink = ({ active = false, className = '', children, ...props }: InertiaLinkProps & { active?: boolean }) => {

  return (
    <Link
            {...props}
            className={clsx("flex items-center p-2  rounded-lg  hover:text-primary-950  hover:bg-ecru-white-300 w-full",{"text-primary-950 bg-ecru-white-300":active==false}, { "text-primary-600 ":active==true}, className)}
        >
            {children}
        </Link>
  )
}

export default NavLink
