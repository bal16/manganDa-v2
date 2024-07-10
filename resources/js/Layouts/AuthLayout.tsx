import ApplicationLogo from "@/Components/ApplicationLogo";
import { Head, Link } from "@inertiajs/react";
import { FormEventHandler, PropsWithChildren } from "react";

type LayoutProps = {
    children: React.ReactNode;
    title: 'Login'|'Register';
    submitAction: FormEventHandler;
}
export default function AuthLayout({ children, title, submitAction }: LayoutProps) {
    return (
        <div className="min-h-screen py-16 bg-green-500 place-content-center">
            <Head title={title} />
            <div className="flex h-full max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-lg lg:max-w-4xl">
                <div
                    className="hidden bg-center bg-cover lg:block lg:w-1/2"
                    style={{
                        backgroundImage:
                            "url('https://plus.unsplash.com/premium_photo-1663852297267-827c73e7529e?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
                    }}
                ></div>
                <div className="flex flex-col justify-center w-full p-8 lg:w-1/2">
                    <h2 className="text-4xl font-bold text-center text-gray-700">
                        manganda
                    </h2>
                    <p className="text-center text-gray-600 text-l">
                        {title=='Login'?'Welcome back!':'Create your account'}
                    </p>
                    <form onSubmit={submitAction}>
                    {children}
                    </form>
                    <div className="flex items-center justify-between mt-4">
                        <span className="w-1/5 border-b md:w-1/4"></span>
                        <Link
                            href={title=="Login"?"/register":"/login"}
                            className="text-xs text-gray-500 uppercase"
                        >
                            or {title=='Login'?'sign up':'sign in'}
                        </Link>
                        <span className="w-1/5 border-b md:w-1/4"></span>
                    </div>
                </div>
            </div>
        </div>
    );
}
