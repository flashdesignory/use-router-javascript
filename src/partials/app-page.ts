import { AppFooter } from "./app-footer";
import { AppHeader } from "./app-header";
import { AppNavigation } from "./app-navigation";

import type { Router } from "../hooks/useRouter";
import { routes } from "../routes";

import "../styles/app-page.css";

export type PageProps = {
    router: Router;
    defaultRoute: string;
    content: any;
};

export function AppPage({ router, defaultRoute, content }: PageProps) {
    const activeRoute = router.getRoute() || defaultRoute;

    const page = document.createElement("div");
    page.classList.add("app-page");

    const main = document.createElement("main");
    main.classList.add("app-main");
    main.appendChild(content);

    page.appendChild(AppHeader());
    page.appendChild(AppNavigation({ routes, activeRoute }));
    page.appendChild(main);
    page.appendChild(AppFooter());

    return page;
}