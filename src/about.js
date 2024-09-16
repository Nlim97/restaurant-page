import flippingBurger from "../assets/flipping-burger.jpg"

export const about = () => {
    const aboutDiv = document.createElement("div")
    const image = document.createElement("img")
    const header = document.createElement("h1")
    const paragraph = document.createElement("p")

    aboutDiv.classList.add("about-container")

    header.innerHTML = "About us"
    image.src = flippingBurger
    paragraph.innerHTML = "Lorem, ipsum dolor sit amet consectetur <span class=\"highlight\">adipisicingelit.</span> Cum consequuntur expedita, ratione aliquam, nulla voluptatem unde cumque quis, accusantium atque quo rerum sit quam"
    
    

    aboutDiv.appendChild(header)
    aboutDiv.appendChild(image)
    aboutDiv.appendChild(paragraph)

    return aboutDiv
}