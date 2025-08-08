import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { Moon, Sun } from "lucide-react";

const ThemeToggle = () => {
    const { theme, setTheme, systemTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => setMounted(true), []);

    if (!mounted) return null;

    const current = theme === "system" ? systemTheme : theme;
    const isDark = current === "dark";

    return (
        <Button
            variant="outline"
            size="icon"
            aria-label="Toggle theme"
            onClick={() => setTheme(isDark ? "light" : "dark")}
            title={isDark ? "Switch to light" : "Switch to dark"}
        >
            <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="h-4 w-4 absolute rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Toggle theme</span>
        </Button>
    );
};

export default ThemeToggle;
