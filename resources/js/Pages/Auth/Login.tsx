import { useEffect, FormEventHandler, useState } from "react";
import Checkbox from "@/Components/Checkbox";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import { useForm } from "@inertiajs/react";
import AuthLayout from "@/Layouts/AuthLayout";
import { PiEye, PiEyeClosedDuotone } from "react-icons/pi";

export default function Login({
    status,
}: {
    status?: string;
    canResetPassword: boolean;
}) {
    const [isShow, setIsShow] = useState<boolean>(false);
    const { data, setData, post, processing, errors, reset } = useForm({
        key: "",
        password: "",
        remember: false,
    });

    useEffect(() => {
        return () => {
            reset("password");
        };
    }, []);

    const submit: FormEventHandler = (e) => {
        e.preventDefault();

        post(route("login"));
    };

    return (
        <form onSubmit={submit}>
            {status && (
                <div className="mb-4 text-sm font-medium text-green-600">
                    {status}
                </div>
            )}
            <div className="mt-4">
                <InputLabel className="block mb-2 text-sm font-bold text-gray-700">
                    Username or Email Address
                </InputLabel>
                <TextInput
                    className="block w-full px-4 py-2 text-gray-700 bg-gray-200 border border-gray-300 rounded appearance-none focus:outline-none focus:shadow-outline"
                    type="text"
                    value={data.key}
                    onChange={(e) => setData("key", e.target.value)}
                />
                <InputError message={errors.key} className="mt-2" />
            </div>
            <div className="mt-4">
                <InputLabel className="block mb-2 text-sm font-bold text-gray-700">
                    Password
                </InputLabel>
                <div className="relative flex">
                    <TextInput
                        className="block w-full px-4 py-2 text-gray-700 bg-gray-200 border border-gray-300 rounded appearance-none focus:outline-none focus:shadow-outline"
                        type={!isShow ? "password" : "text"}
                        value={data.password}
                        onChange={(e) => setData("password", e.target.value)}
                    />
                    <label className="absolute flex items-center justify-center p-1 text-center transition-colors rounded-full cursor-pointer hover:bg-gray-400 right-2 top-2">
                        <Checkbox
                            name="showPassword"
                            checked={isShow}
                            onChange={(e) => setIsShow(e.target.checked)}
                            className="hidden"
                        />
                        <span className="block text-gray-700">
                            {isShow?(<PiEye />):
                            (<PiEyeClosedDuotone />)}
                        </span>
                    </label>
                </div>
                <InputError message={errors.password} className="mt-2" />
            </div>
            <div className="block mt-4">
                <label className="flex items-center">
                    <Checkbox
                        name="remember"
                        checked={data.remember}
                        onChange={(e) => setData("remember", e.target.checked)}
                    />
                    <span className="text-sm text-gray-600 ms-2">
                        Remember me
                    </span>
                </label>
            </div>
            <PrimaryButton
                type="submit"
                className="justify-center w-full mt-8 text-center"
                disabled={processing}
            >
                Login
            </PrimaryButton>
        </form>
    );
}

Login.layout = (page:React.ReactNode) => <AuthLayout children={page} title="Login"  />
