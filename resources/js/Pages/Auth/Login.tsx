import { useEffect, FormEventHandler } from "react";
import Checkbox from "@/Components/Checkbox";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import { useForm } from "@inertiajs/react";
import AuthLayout from "@/Layouts/AuthLayout";
import PasswordInput from "@/Components/PasswordInput";

export default function Login({
    status,
}: {
    status?: string;
    canResetPassword: boolean;
}) {
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
                <InputLabel className="block mb-2 text-sm font-bold text-primary-700">
                    Username or Email Address
                </InputLabel>
                <TextInput
                    className="block w-full px-4 py-2 border rounded appearance-none text-primary-700 bg-primary-100 border-primary-300 focus:outline-none focus:shadow-outline"
                    type="text"
                    value={data.key}
                    onChange={(e) => setData("key", e.target.value)}
                    error={errors.key}
                />
                <InputError message={errors.key} className="mt-2" />
            </div>
            <div className="mt-4">
                <InputLabel className="block mb-2 text-sm font-bold text-primary-700">
                    Password
                </InputLabel>
                    <PasswordInput
                        className="block w-full px-4 py-2 border rounded appearance-none text-primary-700 bg-primary-100 border-primary-300 focus:outline-none focus:shadow-outline"
                        value={data.password}
                        onChange={(e:React.ChangeEvent<HTMLInputElement>) => setData("password", e.target.value)}
                        error={errors.key}
                    />
                <InputError message={errors.password} className="mt-2" />
            </div>
            <div className="block mt-4">
                <label className="flex items-center">
                    <Checkbox
                        name="remember"
                        checked={data.remember}
                        onChange={(e) => setData("remember", e.target.checked)}
                    />
                    <span className="text-sm text-primary-600 ms-2 dark:text-primary-300">
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
