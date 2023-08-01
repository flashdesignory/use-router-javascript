import { PageNavbar } from "../../components/page-navbar";

import "./app-navigation.css";

export function AppNavigation() {
    const navigation = document.createElement("nav");
    navigation.classList.add("app-navigation");

    const row = document.createElement("div");
    row.classList.add("app-navigation-row");

    const column = document.createElement("div");
    column.classList.add("app-navigation-column-left");

    column.appendChild(PageNavbar());
    row.appendChild(column);
    navigation.appendChild(row);
    return navigation;
}
