import restaurant from "../assets/burger-restaurant.jpg"

export const location = () => {
    
    const container = document.createElement("div")
    const locationContainer = document.createElement("div")
    const restaurantPic = document.createElement("img")
    const header = document.createElement("h1")
    const openTimes = document.createElement("div")
    const timeHeader = document.createElement("h1")

    container.classList.add("container2")
    locationContainer.classList.add("locations")
    openTimes.classList.add("times")

    restaurantPic.src = restaurant

    header.innerHTML = "Locations"
    locationContainer.appendChild(header)

    for(let i = 1; i < 5; i++){
        const location = document.createElement("p")
        location.innerHTML = `location${i}`
        locationContainer.appendChild(location)
    }

    timeHeader.innerHTML = "Opening times"
    openTimes.appendChild(timeHeader)

    for(let i = 0; i < 4; i++){
        const time = document.createElement("p")
        time.innerHTML = "Mon - Fri 9am to 5pm | Sat - Sun 10am to 4pm"
        openTimes.appendChild(time)
    }
    
    container.appendChild(restaurantPic)
    container.appendChild(locationContainer)
    container.appendChild(openTimes)

    document.body.appendChild(container)
}