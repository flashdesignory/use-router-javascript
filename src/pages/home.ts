import { PageTitle } from "../components/page-title";

export function Home() {
    const content = document.createElement("div");
    content.classList.add("page-content");
    content.appendChild(PageTitle("Home"));
    return content;
}
