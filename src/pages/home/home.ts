import { routes } from "../../routing/page-routes";
import type { Route } from "../../routing/page-routes";

import "./home.css";

export function Home(route: Route) {
    const content = document.createElement("div");
    content.classList.add("page-content", "flex-center");

    const row = document.createElement("div");
    row.classList.add("page-row");

    const column = document.createElement("div");
    column.classList.add("page-column");

    const { about } = routes;

    const aboutLink = document.createElement("a");
    aboutLink.classList.add("button", "secondary-button", "dark");
    aboutLink.style.width = "200px";
    aboutLink.href = about.href;
    aboutLink.textContent = about.label;
    column.appendChild(aboutLink);

    row.appendChild(column);
    content.appendChild(row);

    return content;
}
