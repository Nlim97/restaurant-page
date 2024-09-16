import burger from "../assets/burger.jpg"
import chickenBurger from "../assets/chicken.jpg"

export const hero = () => {

    const container = document.createElement("div")
    const burgerContainer = document.createElement("div")
    const burgerDescription = document.createElement("div")
    const chickenBurgerContainer = document.createElement("div")
    const chickenBurgerDescription = document.createElement("div")
    const burgerHeader = document.createElement("h1")
    const chickenBurgerHeader = document.createElement("h1")
    const burgerImage = document.createElement("img")
    const chickenBurgerImage = document.createElement("img")
    const burgerParagraph = document.createElement("p")
    const chickenBurgerParagraph = document.createElement("p")
    const BurgerOrder = document.createElement("button")
    const ChickenOrder = document.createElement("button")

    burgerImage.src = burger
    chickenBurgerImage.src = chickenBurger

    container.classList.add("hero-container")
    burgerContainer.classList.add("burger-container")
    chickenBurgerContainer.classList.add("chicken-burger-container")
    burgerDescription.classList.add("description")
    chickenBurgerDescription.classList.add("description")
    burgerImage.classList.add("burger-image")
    chickenBurgerImage.classList.add("burger-image")
    BurgerOrder.classList.add("order")
    ChickenOrder.classList.add("order")

    const paragraphFiller = "Lorem, ipsum dolor sit amet consectetur <span class=\"highlight\">adipisicingelit.</span> Cum consequuntur expedita, ratione aliquam, nulla voluptatem unde cumque quis, accusantium atque quo rerum sit quam"
    
    burgerParagraph.innerHTML = paragraphFiller
    chickenBurgerParagraph.innerHTML = paragraphFiller
    burgerHeader.innerHTML = "Burger"
    chickenBurgerHeader.innerHTML = "Chicken Burger"
    BurgerOrder.innerHTML = "Order now"
    ChickenOrder.innerHTML = "Order now"


    burgerDescription.appendChild(burgerHeader)
    burgerDescription.appendChild(burgerParagraph)
    burgerDescription.appendChild(BurgerOrder)
    burgerContainer.appendChild(burgerDescription)
    burgerContainer.appendChild(burgerImage)

    chickenBurgerDescription.appendChild(chickenBurgerHeader)
    chickenBurgerDescription.appendChild(chickenBurgerParagraph)
    chickenBurgerDescription.appendChild(ChickenOrder)
    chickenBurgerContainer.appendChild(chickenBurgerImage)
    chickenBurgerContainer.appendChild(chickenBurgerDescription)

    container.appendChild(burgerContainer)
    container.appendChild(chickenBurgerContainer)

    return container
}