import "./app-header.css";

export function AppHeader() {
    const header = document.createElement("header");
    header.classList.add("app-header");

    const title = document.createElement("h1");
    title.classList.add("app-header-title");
    title.textContent = "Routing Template"
    
    const link = document.createElement("a");
    link.classList.add("app-header-link");
    link.href = "#/home";

    link.appendChild(title);

    header.appendChild(link);
    return header;
}