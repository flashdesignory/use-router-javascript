export type Route = {
    label: string;
    href: string;
    hideInNav?: boolean;
}

export const routes: Route[] = [
    {
        label: "home",
        href: "#/home",
    }, 
    {
        label: "about",
        href: "#/about"
    },
];
