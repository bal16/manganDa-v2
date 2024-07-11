import { ChangeEventHandler, ReactNode } from "react";

export interface User {
    id: number;
    username: string;
    email: string;
    email_verified_at: string;
}

export type PageProps<T extends Record<string, unknown> = Record<string, unknown>> = T & {
    auth: {
        user: User;
    };
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
