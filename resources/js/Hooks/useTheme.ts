import { useEffect, useState } from "react";

type Theme = "media" | "light" | "dark" | "";

const useTheme = () => {
    const [theme, setTheme] = useState<Theme>("media");
    const prefersDarkMode = window.matchMedia(
        "(prefers-color-scheme: dark)"
    ).matches;

    // Toggle theme based on user preference
    const toggleTheme = () => {
        const newTheme =
            theme === "media" ? "light" : theme === "light" ? "dark" : "media";
        setTheme(newTheme);
        // Update CSS class and localStorage accordingly
        if (newTheme === "light") {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("colorMode", "light");
        } else if (newTheme === "dark") {
            document.documentElement.classList.add("dark");
            localStorage.setItem("colorMode", "dark");
        } else {
            // newTheme === "media"
            localStorage.removeItem("colorMode");
        }
    };

    // Handle initial theme based on system preference and localStorage
    useEffect(() => {
        // Prioritize localStorage if it exists
        const storedTheme = localStorage.getItem("colorMode");
        if (storedTheme === "light" || storedTheme === "dark") {
            setTheme(storedTheme);
            return;
        }

        // Fallback to system preference
        prefersDarkMode
            ? document.documentElement.classList.add("dark")
            : document.documentElement.classList.remove("dark");
    }, []);

    // Update CSS class and localStorage based on theme change
    useEffect(() => {
        if (theme !== "media") {
            if (theme === "light") {
                document.documentElement.classList.remove("dark");
                localStorage.setItem("colorMode", "light");
            } else {
                document.documentElement.classList.add("dark");
                localStorage.setItem("colorMode", "dark");
            }
        } else {
            localStorage.removeItem("colorMode");
            prefersDarkMode
                ? document.documentElement.classList.add("dark")
                : document.documentElement.classList.remove("dark");
        }
    }, [theme]);


  return { theme, toggleTheme };
};

export default useTheme;
