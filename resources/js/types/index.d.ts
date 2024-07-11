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
    children: React.ReactNode;
    title: 'Login'|'Register';
}
