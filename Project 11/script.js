/* 
    addEventListener() - метод, позволяющий повесить(добавить) слушатель события.
    addEventListener() - функция, но т.к она находится внутри объекта, то называется методом.
    Он принимает два аргумента. 
    1й - тип события - "click", "submit", "focus"
    2й - функция(коллбэк функция - функция обратного вызова) 
        - действие, которое должно произойти в ответ на событие
    анонимная функция - функция без названия
*/

/*
    Методы:
    querySelector() - выборка элемента
    querySelectorAll() - выборка нескольких элементов
    addEventListener() - вешаем слушатель события

    Свойства:
    firstChild - выбор первого дочернего элемента
    lastChild - выбор последнего дочернего элемента
    childNodes[] - выбор всех дочерних элементов
    innerText - текстовое содержимое элемента

    let user = {
        name : "Arsen",
        fn : function() {
            console.log("hello")
        }
    }
    user.name - свойство
    user.fn() - метод
 */

    // let main = document.querySelector("main")
// main.innerText - возвращает все текстовое содержимое внутри тега и его дочерних элементов
// innerText так же позволяет изменить текстовое содержимое элемента
// console.log(main.innerText) 

// Задача. в консоли поочередно вернуть текстовый контент каждого из трех элементов
/*
    let laptop = {
        marka : "Asus"
    }

  <div class="item">
        <p class="text">Hello World</p>
        <h4 class="title">Hello, Arsen</h4>
        <a href="">Hello Hello</a>
    </div>
*/
// let text1 = document.querySelector(".text")
// console.log(document.querySelector("p"))
// let text = document.querySelector(".item-1 p")
// console.log(text.innerText)

// let title = document.querySelector(".item-1 .title")
// console.log(title.innerText)

// let link = document.querySelector(".item-1 a")
// console.log(link.innerText)



// находим div, а потом внутри него другие элементы
// let item = document.querySelector(".item-1") // item = <div class="item-1"></div>
// let text1 = item.querySelector(".title")
// console.log(text1)

// let titles = document.querySelectorAll(".title")
// console.log(titles)




/* 
    Если хотим выбрать один элемент, то используем метод querySelector()
    Мы можем использовать такие же селекторы, как и в css


    1. Селектор по тегу - document.querySelector("tagName") - без точки, решетки и тд
    2. Селектор по классу - document.querySelector(".className") - с точкой
    3. Селектор по идентификатору(id) - document.querySelector("#id") - с решеткой

    
*/

// let text = document.querySelector (".text")
// text.innerText = "Привет мир 2"

// let text1 = document.querySelector (".item-1 .title")
// text1.innerText = "Привет, Оля"

// let titles = document.querySelectorAll(".title")
// console.log(titles)
// console.log (titles[0].innerText = "Hello Olya")
// console.log (titles[1].innerText = "Hello Olya")
// console.log (titles[2].innerText = "Hello Olya")
// console.log (titles[3].innerText = "Hello Olya")
// console.log (titles[4].innerText = "Hello Olya")

// for(let i = 0; i < titles.length; i++) {
//     titles[i].innerText = "Привет Оля"
// }

// let titles2 = document.querySelectorAll(".item-1 .text")
// console.log(titles2)

// for(let i = 0; i < titles2.length; i++) {
//     titles2[i].innerText = "Привет Hello"
// }

// let newTexts = document.querySelectorAll (".item-2 p")
// for(let i = 0; i < newTexts.length; i++){
//  newTexts[i].addEventListener("click",function() {
//     console.log("click")
//  })   
// }

// let text = document.querySelector(".text")
// text.innerText = "Привет мир 2"

// let text1 = document.querySelector(".item-1 h4")
// text1.innerText = "Hello Olha"

let titles = document.querySelectorAll(".title")
console.log(titles);
// console.log(titles[0].innerText = "Hi Hi");
// console.log(titles[1].innerText = "Hi Hi");
// console.log(titles[2].innerText = "Hi Hi");


for (let i = 0; i < titles.length; i++ ) {
    titles[i].innerText = "Hi Big World"
}

let titles2 = document.querySelectorAll(".item-1 .text")

for(let i = 0; i < titles2.length; i++) {
    titles2[i].innerText = "Hello my friend "
}

let newtexts = document.querySelectorAll(".item-2 p")
for(let i = 0; i < newtexts.length; i++) {
    newtexts[i].innerText = "Hello my bestie"
    newtexts[i].addEventListener("click", function() {
        console.log("click");
    })
}