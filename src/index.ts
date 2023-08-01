import "./styles/variables.css";
import "./styles/global.css";
import "./styles/button.css";

import { init } from "./routing/app-router";
import { AppLayout } from "./partials/app-layout";

const app = document.createElement("div");
app.classList.add("app");
document.body.appendChild(app);

const {layout, main} = AppLayout();
app.appendChild(layout);

init(main);
