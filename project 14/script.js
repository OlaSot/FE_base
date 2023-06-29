// let main = document.querySelector ("main")
// main.classname += "block"


// let button = document.querySelector (".add")
// button.addEventListener ("click", function () {
//     main.classList.add("active")
// })
// let button2 = document.querySelector (".remove")
// button2.addEventListener ("click", function () {
//     main.classList.remove("active")
// })

// let button = document.querySelector(".btn")
// button.addEventListener("click", function() {
//     main.classList.toggle("active")
// })

// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// numbers.forEach(function (num) {
//     main.innerHTML += `<p>${num}</p>`
// })

// let texts = document.querySelectorAll("p")
// texts.forEach(function(text) {
//     text.addEventListener ("click", function() {
//         text.classList.toggle("red")
//     })
// })
// p.addEventListener("click", function(num){
//     p.classList.toggle("active")
// })

// Есть массив объектов. Нужно отобразить разметку в html. Внутрь div, 
// положить тег p c текстом из этого массива объектов
/*
    <div>
        <p>{Вынести мусор}</p>
    </div>
      <div>
        <p>{Проверить лз}</p>
    </div>
      <div>
        <p>{Создать веб приложение}</p>
    </div>
    <div>
        <p>{Помыть посуду}</p>
    </div>
*/
let main = document.querySelector ("main")
let todos = [
    {
        name : "Вынести мусор"
    },
    {
        name : "Проверить ДЗ"
    },
    {
        name : "Создать веб-приложение"
    },
    {
        name : "Помыть посуду"
    }
]


 todos.forEach(function(todo) {
    main.innerHTML += `
    <div class="todo"> 
    <p>${todo.name}</p>
    </div>`
})

// при нажатии на тег div, добавлять класс line для тега p этого div
// children
// div.querySelector("p")

// element.children - список дочерних элементов(тегов) тега 
let items = document.querySelectorAll(".todo")
// console.log(items)
items.forEach(function(item) {
    item.addEventListener("click", function() {
        // console.log(item.children[0].classList.toggle("line"))
        console.log(item) // children - [p, button]

        // let text = item.querySelector("p")
        // text.classList.toggle("line")

        item.querySelector("p").classList.toggle("line")
    })
})
// todos.forEach(function(todo) {
//     // console.log(todo.name) // каждый элемент массива
//     main.innerHTML += `
//         <div class="todo">
//             <p>${todo.name}</p>
//             <button>Button</button>
//         </div>
//     `
// })



