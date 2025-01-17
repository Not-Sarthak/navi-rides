import React from "react";
import { createRoot } from "react-dom/client";

import reportWebVitals from "./reportWebVitals";
import App from "./App";

import "index.css";
import Footer from "components/common/Footer";

const container = document.getElementById("root") as HTMLElement;
const root = createRoot(container);

root.render(
    <React.StrictMode>
            <App />
            <Footer />
    </React.StrictMode>,
);

reportWebVitals();