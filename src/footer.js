export const footer = () => {
    const footerDiv = document.createElement("div")
    const header = document.createElement("h1")
    const contactInfo = document.createElement("div")
    const contactNum = document.createElement("p")
    const contactEmail = document.createElement("p")

    footerDiv.classList.add("footer")
    contactInfo.classList.add("contacts")
    
    header.innerHTML = "Contact us"
    contactNum.innerHTML = "Phone: 123456789"
    contactEmail.innerHTML = "Enquires: burgers@example.com"

    
    contactInfo.appendChild(contactNum)
    contactInfo.appendChild(contactEmail)

    footerDiv.appendChild(header)
    footerDiv.appendChild(contactInfo)

    document.body.appendChild(footerDiv)
}