import { header } from "./header";
import { hero } from "./hero";
import { location } from "./location";
import { footer } from "./footer";
import { menu } from "./menu";
import "./styles.css"

document.addEventListener("DOMContentLoaded", () => {
const heroElement = hero()
const menuElement = menu()
header(heroElement, menuElement);
document.body.appendChild(heroElement)
location();
footer();

})
