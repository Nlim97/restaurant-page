import logoImage from "../assets/logo.jpg"

export const header = (heroElement, menuElement) => {
    const navBar = document.createElement("div")
    const links = document.createElement("div")
    const home = document.createElement("button")
    const menu = document.createElement("button")
    const about = document.createElement("button")
    const logo = document.createElement("img")


    home.addEventListener("click", () => navigateToHome(heroElement, menuElement))
    menu.addEventListener("click", () => navigateToMenu(heroElement, menuElement))

    navBar.classList.add("nav-bar")
    links.classList.add("links")
    home.classList.add("nav-link")
    menu.classList.add("nav-link")
    about.classList.add("nav-link")
    logo.classList.add("logo")



    home.innerHTML = "Home"
    menu.innerHTML = "Menu"
    about.innerHTML = "About"
    logo.src = logoImage


    links.appendChild(home)
    links.appendChild(menu)
    links.appendChild(about)
    navBar.appendChild(logo)
    navBar.appendChild(links)
    document.body.appendChild(navBar)

}

function navigateToMenu(heroElement, menuElement){
    heroElement.replaceWith(menuElement)
}

function navigateToHome(heroElement, menuElement){
    menuElement.replaceWith(heroElement)
}