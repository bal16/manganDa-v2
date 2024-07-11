import { useEffect, FormEventHandler } from "react";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import { useForm } from "@inertiajs/react";
import AuthLayout from "@/Layouts/AuthLayout";
import PasswordInput from "@/Components/PasswordInput";

export default function Register() {
    const { data, setData, post, processing, errors, reset } = useForm({
        username: "",
        email: "",
        password: "",
        password_confirmation: "",
    });

    useEffect(() => {
        return () => {
            reset("password", "password_confirmation");
        };
    }, []);

    const submit: FormEventHandler = (e) => {
        e.preventDefault();

        post(route("register"));
    };

    return (
        <form onSubmit={submit}>
            <div className="mt-4">
                <InputLabel className="block mb-2 text-sm font-bold text-primary-700">
                    Username
                </InputLabel>
                <TextInput
                    className="block w-full px-4 py-2 border rounded appearance-none text-primary-700 bg-primary-100 border-primary-300 focus:outline-none focus:shadow-outline"
                    type="text"
                    value={data.username}
                    onChange={(e) => setData("username", e.target.value)}
                    error={errors.username}
                />
                <InputError message={errors.username} className="mt-2" />
            </div>
            <div className="mt-4">
                <InputLabel className="block mb-2 text-sm font-bold text-primary-700">
                    Email Address
                </InputLabel>
                <TextInput
                    className="block w-full px-4 py-2 border rounded appearance-none text-primary-700 bg-primary-100 border-primary-300 focus:outline-none focus:shadow-outline"
                    type="email"
                    value={data.email}
                    onChange={(e) => setData("email", e.target.value)}
                    error={errors.email}
                />
                <InputError message={errors.email} className="mt-2" />
            </div>
            <div className="mt-4">
                <InputLabel className="block mb-2 text-sm font-bold text-primary-700">
                    Password
                </InputLabel>

                <PasswordInput
                    className="block w-full px-4 py-2 border rounded appearance-none text-primary-700 bg-primary-100 border-primary-300 focus:outline-none focus:shadow-outline"
                    value={data.password}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        setData("password", e.target.value)
                    }
                    error={errors.password}
                />

                <InputError message={errors.password} className="mt-2" />
            </div>
            <div className="mt-4">
                <InputLabel className="block mb-2 text-sm font-bold text-primary-700">
                    Password Confirmation
                </InputLabel>
                <PasswordInput
                    className="block w-full px-4 py-2 border rounded appearance-none text-primary-700 bg-primary-100 border-primary-300 focus:outline-none focus:shadow-outline"
                    value={data.password_confirmation}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        setData("password_confirmation", e.target.value)
                    }
                    error={errors.password_confirmation}
                />
                <InputError
                    message={errors.password_confirmation}
                    className="mt-2"
                />
            </div>

            <PrimaryButton
                type="submit"
                className="justify-center w-full mt-8 text-center"
                disabled={processing}
            >
                Register
            </PrimaryButton>
        </form>
    );
}
Register.layout = (page: React.ReactNode) => (
    <AuthLayout children={page} title="Register" />
);
