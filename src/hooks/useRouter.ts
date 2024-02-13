export type RouterCallback = (hash: string) => void;

export type Router = {
    initRouter: (callback: RouterCallback) => void;
    getRoute: () => string;
    disableRouter: () => void;
}

export function useRouter(callback?: RouterCallback): Router {
    let onChange = callback;
    let current = "";

    function handleChange() {
        current = document.location.hash;
        onChange?.(document.location.hash);
    }

    function initRouter(callback: RouterCallback) {
        onChange = callback;
        window.addEventListener("hashchange", handleChange);
        window.addEventListener("load", handleChange);
    }

    function disableRouter () {
        window.removeEventListener("hashchange", handleChange);
        window.removeEventListener("load", handleChange);
    }

    function getRoute() {
        return current.split("/").slice(-1)[0];
    }

    return { initRouter, getRoute, disableRouter };
};
