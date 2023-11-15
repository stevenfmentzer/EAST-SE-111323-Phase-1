const burgers = [
    {
        name: "Flatburger",
        image: "./assets/food/flatburger.jpeg",
        description: "Our signature Flatburger which is a super delicious cheeseburger that'll leave you wanting another Flatburger! It's too good to be true!"
    },
    {
        name: "Maple Bacon Burger",
        image: "./assets/food/maple-bacon-burger.jpeg",
        description: "A great option for a breakfast burger or a great option for brunch if you're hungry enough to eat 2 of these burgers!"
    },
    {
        name: "Mushroom Burger",
        image: "./assets/food/mushroom-burger.webp",
        description: "A mushroom burger with our exclusive Flatburger melted cheese!"
    },
    {
        name: "Avocado Bun Burger",
        image: "./assets/food/avocado-bun-burger.jpeg",
        description: "A healthier take on our signature Flatburger but with avocado buns!"
    },
    {
        name: "Ramen Burger",
        image: "./assets/food/ramen-burger.jpeg",
        description: "If you love ramen and burgers, what are you waiting for? Order our exclusive ramen burger now!"
    }
]

const otherFoods = [
    {
        name: "French Fries",
        image: "./assets/food/french-fries.jpeg",
        description: "The good old french fries made in Flatburger style!"
    },
    {
        name: "Burrito",
        image: "./assets/food/burrito.webp",
        description: "A Flatburger style burrito with our exclusive Flatburger melted cheese and any meat of your choosing in addition to your choice of additional ingredients!"
    },
    {
        name: "Taco",
        image: "./assets/food/taco.jpeg",
        description: "The Flatburger exclusive Taco! Get it while supplies last!"
    },
    {
        name: "Hot Dog",
        image: "./assets/food/hot-dog.jpeg",
        description: "The Flatburger exclusive Hot Dog! Get it while supplies last!"
    },
    {
        name: "Onion Rings",
        image: "./assets/food/onion-rings.jpeg",
        description: "The Flatburger exclusive Onion Rings! Get them while supplies last!"
    }
]

// write your code here

// .getElementById() - find 1 element by its ID 
// const restaurantMenu = document.getElementById('restaurant-menu')
// const h1 = document.createElement('h1')
// console.log(restaurantMenu)

// .querySelector() - finds 1 element
// const detailImage = document.querySelector('.detail-image')
// console.log(detailImage)

// // . querySelectorAll()
// const divElements = document.querySelectorAll('div')
// console.log(divElements)
// //  This returns a 'NodeList' that we can iterate through using a For Loop

//  // console.log(divElements[0])
//  for (let index = 0 ; index < divElements.length ; index++){
//     console.log(divElements[index])
//  }

// divElements.forEach((div) => {
// console.log(divElements)
//})

//  // .getElementsByClassName() 
// const nameElements = document.getElementsByClassName('name')[0] //Using [0] gets the first element it finds
// console.log(nameElements)

// for (let index = 0 ; index < nameElements.lenght ; index ++){
//     console.log(nameElements[index])
// }

// // For Loop for indexing all the burgers. This works but is redundant (SEE BELOW '.forEach')
// for ( let index = 0 ; index < burgers.length ; index ++){
//     console.log (burgers[index])
// }

// burgers.forEach((burger) => {
// console.log(`${burger.name}  :  ${burger.image}`)
// })

// // This .forEach is basicallly a for loop that will provide its own 'index' count
// burgers.forEach((burger, index) => {
//     console.log(index)
//     console.log(burger)
// })



//DELIVERABLES


//Deliverable 1 
const restaurantMenu = document.getElementById('restaurant-menu')

for (let index = 0 ; index < burgers.length ; index ++){
    const imgElement = document.createElement('img');
    imgElement.className = 'burger';
    imgElement.src = burgers[index].image;
    restaurantMenu.appendChild(imgElement);   
}

//Deliverable 2
otherFoods.forEach((food) => {
    const imgElement = document.createElement('img')
    imgElement.src = food.image
    restaurantMenu.appendChild(imgElement); 
})
//Deliverable 3 

const detailImage2 = document.querySelector('.detail-image')
detailImage2.src = burgers[0].image

//Deliverable 4 

const burgerName = document.querySelector('.name')
burgerName.textContent = burgers[0].name

//Deliverable 5

const description = document.querySelector('#description-display')
description.textContent = burgers[0].description

//Deliverable 6
const restMenuImg = document.getElementById("restaurant-menu").querySelectorAll("img")

restMenuImg.forEach((element) => {
    element.style.borderStyle = 'solid';
    element.style.borderColor = 'red';
    element.style.borderWidth = '3px';
})

//Deliverable 7
const burgerImg = document.getElementsByClassName("burger")

for (let index = 0 ; index < burgerImg.length ; index ++ ){
    burgerImg[index].style.borderColor = 'blue';
}



