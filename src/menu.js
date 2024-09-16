import { itemImage } from "./menuItemImages"

export const menu = () => {
    const menuDiv = document.createElement("div")
    menuDiv.classList.add("menu-container")
    const itemArray = itemImage()
    const description = "Lorem, ipsum dolor sit amet consectetur <span class=\"highlight\">adipisicingelit.</span> Cum consequuntur expedita, ratione aliquam, nulla voluptatem unde cumque quis, accusantium atque quo rerum sit quam"

    const fragment = document.createDocumentFragment()
    itemArray.forEach(item => {
        const menuItem = createMenuItems(item.imageSource, item.foodName, description, "£10.99")
        fragment.appendChild(menuItem)
    })
    menuDiv.appendChild(fragment)
    return menuDiv
}

function createMenuItems(foodImage, foodName, description, price){
    const menuItem = document.createElement("div")
    const itemName = document.createElement("h1")
    const itemImage = document.createElement("img")
    const itemDescription = document.createElement("p")
    const itemPrice = document.createElement("p")
    const orderNow = document.createElement("button")

    menuItem.classList.add("menu-card")
    itemName.classList.add("food-name")
    itemImage.classList.add("food-image")
    orderNow.classList.add("order")


    itemName.innerHTML = foodName
    itemImage.src = foodImage
    itemDescription.innerHTML = description
    itemPrice.innerHTML = price
    orderNow.innerHTML= "Order now"

    menuItem.appendChild(itemImage)
    menuItem.appendChild(itemName)
    menuItem.appendChild(itemDescription)
    menuItem.appendChild(itemPrice)
    menuItem.appendChild(orderNow)

    return menuItem
}