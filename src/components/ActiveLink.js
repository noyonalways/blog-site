import { useRouter } from "next/router";

export default function ActiveLink({ children, href }) {
    const router = useRouter();

    const handleClick = (e) => {
        e.preventDefault();
        router.push(href);
    };

    const isActive = router.pathname === href;

    return (
        <a
            href={href}
            onClick={handleClick}
            className={`${
                isActive
                    ? "bg-primary-500/[.9] text-white dark:text-white"
                    : ""
            } block md:inline-block hover:text-white dark:hover:text-gray-100 py-2 px-2 md:px-4 w-full hover:bg-primary-600/[.9] rounded`}
        >
            {children}
        </a>
    );
}