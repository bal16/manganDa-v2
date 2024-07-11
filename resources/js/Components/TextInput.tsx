import {
    forwardRef,
    useEffect,
    useImperativeHandle,
    useRef,
    InputHTMLAttributes,
} from "react";

type TextInputProps = InputHTMLAttributes<HTMLInputElement> & {
    isFocused?: boolean;
    error?: string;
};

export default forwardRef(function TextInput(
    {
        type = "text",
        className = "",
        isFocused = false,
        error,
        ...props
    }: TextInputProps,
    ref
) {
    const localRef = useRef<HTMLInputElement>(null);

    useImperativeHandle(ref, () => ({
        focus: () => localRef.current?.focus(),
    }));

    useEffect(() => {
        if (isFocused) {
            localRef.current?.focus();
        }
    }, []);

    return (
        <input
            {...props}
            type={type}
            className={
                (error ? "border-danger" : "border-primary-300") +
                "  dark:border-primary-700 dark:bg-primary-900 dark:text-primary-300 focus:border-primary-500 dark:focus:border-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 rounded-md shadow-sm " +
                className
            }
            ref={localRef}
        />
    );
});
