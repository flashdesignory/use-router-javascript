import type { Route } from "../routes";

import "../styles/page-navbar.css";

export type PageNavbarProps = {
    routes: Route[];
    activeRoute?: string;
}

export function PageNavbar({ routes, activeRoute }: PageNavbarProps) {
    const navbar = document.createElement("div");
    navbar.classList.add("page-navbar");
    const content = document.createElement("div");
    content.classList.add("page-navbar-content");
    const list = document.createElement("ul");
    list.classList.add("page-navbar-list");

    routes.forEach( value => {
        
        if (value.hideInNav) return;
        const item = document.createElement("li");
        item.classList.add("page-navbar-list-item");
        const link = document.createElement("a");
        link.classList.add("page-navbar-list-item-link");
        link.href = value.href;
        link.textContent = value.label;
        item.appendChild(link);
        list.appendChild(item);

        if(value.label === activeRoute) {
            link.classList.add("active");
        }
    });

    content.appendChild(list);
    navbar.appendChild(content);
    return navbar;
}