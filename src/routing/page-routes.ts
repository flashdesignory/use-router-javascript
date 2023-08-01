export type Route = {
    id: string;
    label: string;
    href: string;
    hideInNav?: boolean;
}

export type Routes = { [key: string]: Route }

export const routes: Routes = {
    home: {
        id: "home",
        label: "Home",
        href: "#/home"
    },
    about: {
        id: "about",
        label: "About",
        href: "#/about"
    },
}
