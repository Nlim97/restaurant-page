import burger from "../assets/burger.jpg"
import chickenBurger from "../assets/chicken-burger.jpg"
import fries from "../assets/fries.jpg"
import pasta from "../assets/pasta.webp"
import pizza from "../assets/pizza.webp"
import sandwich from "../assets/sandwich.webp"

export function itemImage(){
    return [
        {
            foodName: "Burger",
            imageSource: burger
        },
        {
            foodName: "Chicken Burger",
            imageSource: chickenBurger
        },
        {
            foodName: "Fries",
            imageSource: fries
        },
        {
            foodName: "Pasta",
            imageSource: pasta
        },
        {
            foodName: "Pizza",
            imageSource: pizza
        },
        {
            foodName: "Sandwich",
            imageSource: sandwich
        }
    ]
}