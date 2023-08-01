import { useRouter } from "../hooks/useRouter";
import { useEventsBroadcaster } from "../hooks/useEventsBroadcaster";

import { routes } from "./page-routes";

import { Home } from "../pages/home";
import { About } from "../pages/about";

type RouterState = {
    currentRoute: string | undefined;
    defaultRoute: string;
}

const router = useRouter();
const broadcaster = useEventsBroadcaster();

let contentRoot: HTMLElement | undefined = undefined;

const state: RouterState = {
    currentRoute: undefined,
    defaultRoute: "home"
}

const handleChange = (route: string) => {
    if (!contentRoot) return;

    const { defaultRoute, currentRoute } = state;
    const routeName = route.split("/")[1] || defaultRoute;
    if (currentRoute === routeName) return;

    contentRoot.replaceChildren();

    broadcaster.broadcast("navigation-begin", { currentRoute, nextRoute: routeName });

    switch (routeName) {
        case "about":
            contentRoot.appendChild(About(routes["about"]));
            break;
        default:
            contentRoot.appendChild(Home(routes["home"]));
    }

    const prevRoute = state.currentRoute;
    state.currentRoute = routeName;

    broadcaster.broadcast("navigation-end", { currentRoute: routeName, prevRoute });
}

export function init(ref: HTMLElement) {
    contentRoot = ref;
    router.initRouter(handleChange);
}
