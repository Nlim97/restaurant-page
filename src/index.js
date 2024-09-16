import { header } from "./header";
import { hero } from "./hero";
import { location } from "./location";
import { footer } from "./footer";
import { menu } from "./menu";
import "./styles.css"

document.addEventListener("DOMContentLoaded", () => {
    const content = hero()
    header();
    document.body.appendChild(content)
    location();
    footer();

})
