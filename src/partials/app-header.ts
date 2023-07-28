import "../styles/app-header.css";

export function AppHeader() {
    const header = document.createElement("header");
    header.classList.add("app-header");

    const title = document.createElement("h1");
    title.classList.add("app-header-title");
    title.textContent = "Hello useRouter";

    header.appendChild(title);
    return header;
}