import { ChangeEventHandler, ReactNode } from "react";
import { User } from "@/types/entity";

export type PageProps<T extends Record<string, unknown> = Record<string, unknown>> = T & {
    auth: {
        user: User;
    };
};

export type MainLayoutProps = {
    children: ReactNode;
    auth?: PageProps;
    title: string;
};

export type AuthLayoutProps = {
    children: ReactNode;
    title: 'Login'|'Register';
}

export type PasswordInputProps = {
    value: string;
    onChange: ChangeEventHandler;
    className: string;
    error?: string;
};
