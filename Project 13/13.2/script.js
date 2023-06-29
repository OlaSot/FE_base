// let item = document.querySelector("main")

// console.log(item.innerHTML)
// console.log(item.innerText)

// item.innerHTML += "<h2>Hello</h2>"

// let num = 10
// num = 10 + 5
// num += 5


// let greeting = "Hello"
// greeting += "Olha"

let main = document.querySelector("main")
// let name = "Olha"

// main.innerHTML += `<p>${name}</p>`

// for(let i = 0; i < 5; i++) {
//     main.innerHTML += "<p>Hello</p>"
// }

// for(let i = 0; i < 5; i++) {
//     main.innerHTML += `<p>Hello ${i + 1}</p>`
// }

// let link = "https://google.com"
// let linkname = "google"

// main.innerHTML += `<a href= "${link}">${linkname}</a>`

// let laptop = {
//     mark : "Acer",
//     model : "G444M",
//     price : 15000
// }

// main.innerHTML += `
//             <div>
//             <h1>${laptop.mark}</h1>
//             <p>${laptop.model}</p>
//             <p>${laptop.price}</p>
//             </div>`

// let book = {
//     name : "Captains daughter",
//     author : "Pushkin A.S.",
//     count : 700
// }

// main.innerHTML += `
//             <div>
//             <h1>${book.name}</h1>
//             <p>${book.author}</p>
//             <p>${book.count}</p>
//             </div>
//             `


let laptops = [
    {
        mark : "Acer",
        model : "G444M",
        price : 18000
    },
    {
        mark : "Apple",
        model : "Air",
        price : 50000
    },
    {
        mark : "Asus",
        model : "E323",
        price : 25000
    },
]
 
// for(let i = 0; i < laptops.length; i++) {
// main.innerHTML += `
//              <div class="laptop">
//              <h1>${laptops[i].mark}</h1>
//              <p class="model">${laptops[i].model}</p>
//             <p class="price">${laptops[i].price}</p>
//              </div>`
// }

// laptops.forEach(function(laptop) {
//     main.innerHTML += `
//     <div class="laptop">
//     <h1>${laptop.mark}</h1>
//     <p class="model">${laptop.model}</p>
//     <p class="price">${laptop.price}</p>
//     </div>`
    
// })


let arr = [2, 4, 6, 8, 10]

arr.forEach(function(num){
    console.log(num+2);
})

console.log(arr);

let names = ["Arsen", "Olha", "Luida", "Grisha"]

names.forEach(function(name) {
    console.log ("Hello " + name);
})