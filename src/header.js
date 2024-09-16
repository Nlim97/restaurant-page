import logoImage from "../assets/logo.jpg"
import { menu } from "./menu"
import { hero } from "./hero"
import { about } from "./about"



export const header = () => {
    const navBar = document.createElement("div")
    const links = document.createElement("div")
    const home = document.createElement("button")
    const menuBtn = document.createElement("button")
    const aboutBtn = document.createElement("button")
    const logo = document.createElement("img")


    navBar.classList.add("nav-bar")
    links.classList.add("links")
    home.classList.add("nav-link")
    menuBtn.classList.add("nav-link")
    aboutBtn.classList.add("nav-link")
    logo.classList.add("logo")

    menuBtn.addEventListener("click", () => {
        const currentContent = document.body.children[2]
        const content = menu()
        currentContent.replaceWith(content)
    })

    home.addEventListener("click", () => {
        const currentContent = document.body.children[2]
        const content = hero()
        currentContent.replaceWith(content)
    })

    aboutBtn.addEventListener("click", () => {
        const currentContent = document.body.children[2]
        const content = about()
        currentContent.replaceWith(content)
    })


    home.innerHTML = "Home"
    menuBtn.innerHTML = "Menu"
    aboutBtn.innerHTML = "About"
    logo.src = logoImage




    links.appendChild(home)
    links.appendChild(menuBtn)
    links.appendChild(aboutBtn)
    navBar.appendChild(logo)
    navBar.appendChild(links)
    document.body.appendChild(navBar)

}
