import { routes } from "../../routing/page-routes";
import { useEventsBroadcaster } from "../../hooks/useEventsBroadcaster";

import "./page-navbar.css";

export function PageNavbar() {
    const broadcaster = useEventsBroadcaster();

    const links: HTMLElement[] = [];

    function handleNavigationBegin({currentRoute, nextRoute}: {currentRoute: string, nextRoute: string}) {
        links.forEach(link => {

            if (link.id === currentRoute) {
                link.classList.remove("active");
                return;
            }

            if (link.id === nextRoute) {
                link.classList.add("active");
                return;
            }
        });
    }

    broadcaster.subscribe('navigation-begin', handleNavigationBegin);

    const navbar = document.createElement("div");
    navbar.classList.add("page-navbar");
    const content = document.createElement("div");
    content.classList.add("page-navbar-content");
    const list = document.createElement("ul");
    list.classList.add("page-navbar-list");

    Object.keys(routes).forEach( key => {
        const value = routes[key];
        if (value.hideInNav) return;
        const item = document.createElement("li");
        item.classList.add("page-navbar-list-item");
        const link = document.createElement("a");
        link.classList.add("page-navbar-list-item-link");
        link.href = value.href;
        link.textContent = value.label;
        link.id = key;
        item.appendChild(link);
        list.appendChild(item);

        links.push(link);
    });

    content.appendChild(list);
    navbar.appendChild(content);
    return navbar;
}
