import { AppFooter } from "../app-footer";
import { AppHeader } from "../app-header";
import { AppNavigation } from "../app-navigation";

import "./app-layout.css";

export function AppLayout() {
    const layout = document.createElement("div");
    layout.classList.add("app-layout");

    layout.appendChild(AppHeader());
    layout.appendChild(AppNavigation());
    const main = document.createElement("main");
    main.classList.add("app-main");
    layout.appendChild(main);
    layout.appendChild(AppFooter());

    return ({ layout, main })
}
