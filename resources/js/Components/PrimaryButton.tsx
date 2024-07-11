import { ButtonHTMLAttributes } from 'react';

export default function PrimaryButton({ className = '', disabled, children, ...props }: ButtonHTMLAttributes<HTMLButtonElement>) {
    return (
        <button
            {...props}
            className={
                `inline-flex items-center px-4 py-2 bg-primary-800 dark:bg-primary-200 border border-transparent rounded-md font-semibold text-xs text-primary-50 dark:text-primary-800 uppercase tracking-widest hover:bg-primary-700 dark:hover:bg-primary-100 focus:bg-primary-700 dark:focus:bg-primary-100 active:bg-primary-900 dark:active:bg-primary-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:focus:ring-offset-primary-800 transition ease-in-out duration-150 ${
                    disabled && 'opacity-25'
                } ` + className
            }
            disabled={disabled}
        >
            {children}
        </button>
    );
}
