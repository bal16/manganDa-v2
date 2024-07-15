import useTheme from "@/Hooks/useTheme";
import { AuthLayoutProps } from "@/types";
import { Head, Link } from "@inertiajs/react";


export default function AuthLayout({ children, title }: AuthLayoutProps) {
    useTheme()
    return (
        <div className="min-h-screen py-16 bg-primary-700 dark:bg-primary-900 place-content-center ">
            <Head title={title} />
            <div className="flex h-full max-w-sm mx-auto overflow-hidden rounded-lg shadow-lg bg-primary-50 dark:bg-primary-950 lg:max-w-4xl">
                <div
                    className="hidden bg-center bg-cover lg:block lg:w-1/2"
                    style={{
                        backgroundImage:
                            "url('https://plus.unsplash.com/premium_photo-1663852297267-827c73e7529e?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
                    }}
                ></div>
                <div className="flex flex-col justify-center w-full p-8 lg:w-1/2 ">
                    <h2 className="text-4xl font-bold text-center text-primary-950 dark:text-primary-50">
                        manganda
                    </h2>
                    <p className="text-center text-primary-900 text-l dark:text-primary-500">
                        {title=='Login'?'Welcome back!':'Create your account'}
                    </p>
                    {children}
                    <div className="flex items-center justify-between mt-4">
                        <span className="w-1/5 border-b md:w-1/4 dark:border-primary-200"></span>
                        <Link
                            href={title=="Login"?"/register":"/login"}
                            className="text-xs uppercase text-primary-500"
                        >
                            or {title=='Login'?'sign up':'sign in'}
                        </Link>
                        <span className="w-1/5 border-b md:w-1/4 dark:border-primary-200"></span>
                    </div>
                </div>
            </div>
        </div>
    );
}
