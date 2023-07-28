import { useRouter } from "./hooks/useRouter";

import { AppPage } from "./partials/app-page";
import { Home } from "./pages/home";
import { About } from "./pages/about";

import "./styles/variables.css";
import "./styles/global.css";

type AppState = {
    currentRoute: string | undefined;
    defaultRoute: string;
}

const router = useRouter();

const app = document.createElement("div");
app.classList.add("app");
document.body.appendChild(app);

const state: AppState = {
    currentRoute: undefined,
    defaultRoute: "home"
}

const handleChange = (route: string) => {    
    const { defaultRoute, currentRoute } = state;
    const routeName = route.split("/")[1] || defaultRoute;
    if (currentRoute === routeName) return;

    app.replaceChildren();

    switch(routeName) {
        case "about":
            app.appendChild(AppPage({ router, defaultRoute, content: About() }));
            break;
        default:
            app.appendChild(AppPage({ router, defaultRoute, content: Home() }));
    }
    state.currentRoute = routeName;
}

router.initRouter(handleChange);