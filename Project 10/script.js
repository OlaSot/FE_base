/* 
    DOM-дерево. При загрузке index.html браузере, все теги превращаются в JS объекты 
    и образуют структуру.
*/

// однострочный комментарий
/*
    многострочный
    коммента-
    рий
*/

// console.log(document.body) // body 
// console.log(document.body.firstChild.childNodes) // дочерний элемент body - main
// console.log(document.body.lastChild) // последний элемент


// querySelector - метод выборки любого элемента из DOM-дерева. getElementById, getElementByClassName.
// document.getElementsByClassName(".item")
// console.log(document.querySelector("button")) // по тегу
// console.log(document.querySelector(".item")) // по классу
// console.log(document.querySelector("#green")) // по id. 
// console.log(document.querySelector("#red")) // id - red


/* 
    querySelector - если существует несколько элемнтов с заданным селектором - возвращается только 1й.
   В таких случаях, когда хотим выбрать несколько элементов, используем querySelectorAll() 
*/
// console.log(document.querySelectorAll("button")) // выбор всех тегов button
// console.log(document.querySelectorAll(".item")) // выбор всех элементов по классу .item

// let buttonRed = document.querySelector("#red")

// buttonRed.style.backgroundColor = "red"
 
// Задача. В js поменять цвет фона BODY на черный
// document.body.style.backgroundColor = "black" // рабочий

/*
    Все теги превращаются в объекты, у которых, есть свойство style(стили)
    С помощью обращения к свойству style мы можем поменять любое css свойство у элемента.
    Н-р для изменения цвета фона, нужно использовать свойство backgroundColor и задавть любое значение.
*/

/*
    background-color => backgroundColor
    kebab-case => camelCase
    buttonRed = {
        ...,
        style : {
            width: "",
            height: "",
            backgroundColor : ""
        }
    }
*/

// Задача. При нажатии на кнопку red, менять цвет фона body на красный
// Задача.При нажатии на кнопку red, менять цвет фона body на красный и в тег h1 добавлять название цвета

// let buttonRed = document.querySelector("#red")
// // console.log(buttonRed.innerText) // Red

// buttonRed.addEventListener("click", function() {
//     document.body.style.background = "red"
// })

// let buttonGreen = document.querySelector("#green")

// buttonGreen.addEventListener("click", function() {
//     document.body.style.background = "green"
// })

// let buttonImg = document.querySelector("#img")

// buttonImg.addEventListener("click", function() {
//     document.body.style.background = "url(./image.jpg)"
// })


/* 
ДЗ-------------------------------------ЛЮДМИЛА, ВОТ ТУТ 
// выбрать все кнопки
// в цикле каждой повесить слушатель
// при нажатию на каждую в консоли отображать "на меня кликнули"
*/

// Задача1. При нажатии на картинку, цвета фона не отрабатывают. Починить!
// Задача2. Создать кнопку <button class="item" id="random">Random</button> и
// при нажатии на кнопку Random нужно менять цвет фона body на какой-то из цветов массива
// let colors = ["OrangeRed", "SteelBlue", "MistyRose", "Brown", "SeaGreen"]
 
// Задача. При нажатии на кнопку button#img менять фон body на картинку

// Задача. При нажатии на кнопку green менять цвет фона body на зеленый

// console.log(document.body);
// console.log(document.body.firstChild);
// console.log(document.body.lastChild);

// console.log(document.querySelectorAll("button"))

// let buttonRed = document.querySelector("#red") 

// buttonRed.style.backgroundColor = "red"

// document.querySelector("body").style.backgroundColor = "black"

let buttonRed = document.querySelector("#red")
// console.log(buttonRed.innerText);
buttonRed.addEventListener("click", function() {
    document.body.style.background = "red"
})

let buttonGreen = document.querySelector("#green")

buttonGreen.addEventListener("click", function (){
    document.body.style.background = "green"
})

let buttonImg = document.querySelector("#img")

buttonImg.addEventListener("click", function () {

    document.body.style.background = "url(./image.jpg) no-repeat center"
    document.body.style.backgroundSize = "cover"
})

let buttons = document.querySelectorAll("main .item")
for(let i = 0; i < buttons.length; i++){
    buttons[i].addEventListener("click", function (){
        console.log("на меня кликнули")
    })
}




// let buttonRed = document.querySelector("#red")
// buttonRed.addEventListener("click", function () {
//     document.body.style.background = "red"
//     // console.log(buttonRed.innerText);
// })

// let buttonOrange = document.querySelector("#orange")
// buttonOrange.addEventListener("click", function () {
//     document.body.style.background = "orange"
// })


// let buttonImg = document.querySelector("#img")
// buttonImg.addEventListener("click", function () {
//     document.body.style.background = "url(./images/imgSmall.jpeg) no-repeat center center fixed"
// })

// let main = document.querySelector("main")

// console.log(main.innerText);

// let text = document.querySelector(".item-1 p")

// console.log(text.innerText);

// let h4 = document.querySelector(".item-1 h4")

// console.log(h4.innerText);

// let bb = document.querySelector(".item-1 a")

// console.log(bb.innerText);

