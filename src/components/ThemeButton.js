import { useTheme } from "next-themes";
import * as React from "react";
import { FiMoon, FiSun } from "react-icons/fi";

export default function ThemeButton({className }) {
	const { theme, setTheme } = useTheme();
	const [mounted, setMounted] = React.useState(false);

	React.useEffect(() => setMounted(true), []);

	return (
		<button
			className={`rounded-md p-2 focus:outline-none md:p-2.5
				border dark:border-primary-500/[.4] 
				hover:border-primary-500 hover:text-primary-500 dark:hover:border-primary-300 dark:hover:text-primary-300
				focus-visible:border-primary-300 focus-visible:text-primary-300 dark:focus-visible:border-primary-300 dark:focus-visible:text-primary-300
				text-lg ${className}`}
			
			onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
		>
			{mounted && (
				<>
					{theme === "light" ? (
						<FiSun className="text-primary-600" />
					) : (
						<FiMoon className="text-primary-500" />
					)}
				</>
			)}
		</button>
	);
}
