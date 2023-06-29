// let books = ["HarryPotter1", "HarryPotter2", "HarryPotter3"]
// console.log(books)


// let user = ["Olha" , "Olala21", 26, "https://img.jpg", ["badminton", "piano", "design"]]


// let book = ["Мастер и маргарита", "Соц.драма", 1945]


// let numbers = [0, 1, 2, 3, 4]
// console.log(numbers),



// numbers.push(5)
// console.log(numbers),

// let nums = [100, 500]

// let num1 = +prompt ("1st number")
// let num2 = +prompt ("2st number")
// let num3 = +prompt ("3d number")

// nums.push(num1, num2, num3)
// console.log(nums)

// let nums = [10,20,30,40,50]

// for (let i = 0, i < nums.length, i++) {
//     console.log(nums[i])
// }

// for (let i = 0, i < 100, i++) {
// console.log(100)
// }

// for (let i = 0, i <= 100, i++){
//     if (i > 30) {
//         console.log ("Большe", i),
//     } else {
//     console.log(i),
// } }

// let arr = [32, 51, 60, 78, 105, 14, 10]

// for (let i = 0, i < arr.length, i++){
//     if (arr [i] > 50) 
//     {console.log (arr[i])}
// }

// ДЗ.1. Есть массив [-10, 50, 60, 0, -100, 125]. Вывести в консоль только положительные+ числа.
// ДЗ.2. Есть массив [11, 12, 15, 17, 18, 25, 26]. Вывести в консоль только четные числа. % - вычислить остаток от деления. 10 % 2 = 0. 11 % 2 = 1
// ДЗ.3  Есть массив [10, 20, 30 ,40 , 50, 60]. Найти сумму чисел в массиве и вывести их в консоль.let sum =  sum + arr[i]
// ДЗ.4. Есть массив [-10, 50, 60, 0, -100, 125]. Найти произведение отрицательных чисел  

// let arr = [-10, 50, 60, 0, -100, 125]

// for (let i=0, i < arr.length, i++) {
//     if (arr[i] > 0)
//     console.log (arr[i])
// }

// let arr1 = [11, 12, 15, 17, 18, 25, 28,]
// for (let i=0, i < arr1.length, i++) {
//     if (arr1[i] %2 === 0)
//     console.log (arr1[i])
// }


// ДЗ.3  Есть массив [10, 20, 30 ,40 , 50, 60]. Найти сумму чисел в массиве и вывести их в консоль.let sum =  sum + arr[i]  

// let arr3 = [10, 20, 30 ,40 , 50, 60]
// let sum = 0
// for(let i = 0, i < arr3.length, i++){
//     sum += arr3[i],
// }
// console.log(sum),


// let num = [-10, 50, 60, 0, -100, 125]
// let mult = 1,
// for (let i = 0, i < num.length, i++) 
//     if (num[i] < 0) {
//         mult *= num[i]
// }
// console.log(mult),

// Запросить 10 чисел. 
// let num1 = +prompt("enter num 1")
// let num2 = +prompt("enter num 2")
// let num3 = +prompt("enter num 3")
// let nums = [100, 500] // 700, 1000, 500 --> [100, 500, 700, 1000, 500]
// nums.push(num1, num2, num3)
// console.log(nums),
// */

// let nums = [100,500]

// for(let i=0, i<10, i++) {
//     let num = +prompt("enter a number")
//     nums.push(num)
// }
// console.log(nums)


// for(let i=0, i<10, i++) {
//    nums.push (+prompt("enter a number"))

// }
// console.log(nums)


// let laptop = {
//     color : "black",
//     mark : "Acer",
//     model : "4545G",
//     size : "15.6",
//     tech : {
//         OZU : "16gb",
//         processor : "Nvidia",
//         videocard : "Intel i7"
//     },
//     price : 50000

// }

// console.log(laptop.tech.processor)

// console.log(`<p>${laptop.color}</p>`)


// <div class="laptop">
// <h1>Model</h1>
// <p>Color</p>
// <p>Price</p>

// console.log(`<div>
//     <h1>${laptop.model}</h1>
//     <p>${laptop.color}</p>
//     <p>${laptop.price}</p>
//     </div>`),

// let laptops = [
//     {color : "black",
//     mark : "Acer",
//     model : "4545G",
//     size : "15.6",
//     tech : {
//         OZU : "16gb",
//         processor : "Nvidia",
//         videocard : "Intel i7"
//     },
//     price : 50000},
   
//     {color : "white",
//     mark : "Asus",
//     model : "EF",
//     size : "17",
//     tech : {
//         OZU : "8gb",
//         processor : "Nvidia",
//         videocard : "Intel i5"
//     },
//     price : 65000}

// ]

// console.log(`

// <div>
//     <h1>${laptops[0].mark}</p>
//     <p>${laptops[0].price}</p>
//     <p>${laptops[0].color}</p>
// </div>
// <div>
//     <h1>${laptops[1].mark}</p>
//     <p>${laptops[1].price}</p>
//     <p>${laptops[1].color}</p>
// </div>
// `)


// let instaposts = [
// {
//     title : "My 1st photo",
//     descr : "Photo was made in Berlin",
//     author : "olala",
//     likes : 100,
//     img : "https://img1"
// },
// {
//     title : "Super photo",
//     descr : "Photo was made in Africa",
//     author : "prer21",
//     likes : 1200,
//     img : "https://img2"
// },
// {
//     title : "Lovely photo",
//     descr : "Photo was made in Australia",
//     author : "lala32",
//     likes : 350,
//     img : "https://img2"
// },
// {
//     title : "Very nice photo",
//     descr : "Photo was made in Iceland",
//     author : "hallo32",
//     likes : 189,
//     img : "https://img2"
// },
// ]

// console.log(`
// <div class="insta-post">
// <h1>${instaposts[0].title}</h1>
// <p>${instaposts[0].descr}</p>
// <p>${instaposts[0].author}</p>
// <p>${instaposts[0].likes}</p>
// <img src="${instaposts[0].img}" alt="photoinst">
// </div>

// <div class="insta-post">
// <h1>${instaposts[1].title}</h1>
// <p>${instaposts[1].descr}</p>
// <p>${instaposts[1].author}</p>
// <p>${instaposts[1].likes}</p>
// <img src="${instaposts[1].img}" alt="photoinst">
// </div>

// <div class="insta-post">
// <h1>${instaposts[2].title}</h1>
// <p>${instaposts[2].descr}</p>
// <p>${instaposts[2].author}</p>
// <p>${instaposts[2].likes}</p>
// <img src="${instaposts[2].img}" alt="photoinst">
// </div>
// `);

// for (let i = 0; i < instaposts.length; i++) {
//     if(instaposts[i].likes > 150)
//     console.log(`
//     <div class="insta-post">
//     <h1>${instaposts[i].title}</h1>
//     <p>${instaposts[i].descr}</p>
//     <p>${instaposts[i].author}</p>
//     <p>${instaposts[i].likes}</p>
//     <img src="${instaposts[i].img}" alt="photoinst">
//     </div>
//     `);
// }


// Задача 1. Вывести в консоли:
// а) все ноутбуки. лучше с разметкой HTML
// б) все ноутбуки, цена которых больше 40000.
// в) Посчитать сумму цен всех ноутбуков. Итого.


//_________________________________________________1
// let laptops = [
//   {
//       mark : "Acer",
//       price : 25000
//   },
//   {
//       mark : "Apple",
//       price : 37000
//   },
//   {
//       mark : "Asus",
//       price : 125500,
//   },
//   {
//       mark : "HP",
//       price : 42000
//   },
//   {
//       mark : "Samsung",
//       price : 52000
//   }
// ]

// for (let i=0; i < laptops.length; i++)
// {console.log(`<div class="laptops">
//     <h1>${laptops[i].mark}</h1>
//     <p>${laptops[i].price}</p>`);
// }

// for (let i=0; i < laptops.length; i++)
// {
//     if (laptops[i].price > 40000)
//     console.log(`<div class="laptops">
//     <h1>${laptops[i].mark}</h1>
//     <p>${laptops[i].price}</p>`);
// }

// let sum = 0
// for (let i=0; i < laptops.length; i++)
// { sum += laptops[i].price
// ;}
// console.log(sum)


//__________________________________________________2
// // Задача.2
// // а) Вывести все ноутбуки, у которых есть категория "laptop"
// // б) Вывести все ноутбуки, у которых категория "premium"
// // в) Вывести все ноутбуки, у которых категория "tech"

// let laptopsSecond = [
//   {
//       mark : "Acer",
//       category : ["laptop", "tech"],
//       price : 25000
//   },
//   {
//       mark : "Apple",
//       category : ["notebook", "tech"],
//       price : 37000
//   },
//   {
//       mark : "Asus",
//       category : ["computer", "premium"],
//       price : 125500,
//   },
//   {
//       mark : "HP",
//       category : ["computer", "tech"],
//       price : 42000
//   },
//   {
//       mark : "Samsung",
//       category : ["notebook", "premium"],
//       price : 52000
//   }
// ]

// for (let i=0; i <laptopsSecond.length; i++) {
//     if (laptopsSecond[i].category[i] == "laptop");

//     console.log(`${laptopsSecond[i].category[i]}`);
// }

// совсем не понимаю как добраться до объекта 






//________________________________________________________3
// Задача 3.
// Запрашивать у пользователя Марку и Цену ноутбука три раза.
// Марку и цену ноутбука объединять в объект и добавлять(push) в массив laptops=[]-пустой
// Итого будет массив из трех объектов.

// let laptopsThird = []

// for (let i = 0; i < 3; i++) {

//     mark = prompt("enter laptops mark")
//     price = +prompt("enter laptops price")

//     laptopsThird.push({ mark, price })

// }

// console.log(laptopsThird);

 
 // Задача 4. 
// У пользователя с prompta запрашивать марку/цену. // По его ответу в консоли ввыводить ноутбуки с разметкой.
// Какую марку вы бы хотели? -Acer. Выводим хар-ки ACer
// На какую цену вы рассчитываете? -50000. Выводить все ноутбуки, которые удовл-т(меньше) этой цене


// let laptopsFourth = [
//     {
//         mark: "acer",
//         category: ["laptop", "tech"],
//         price: 25000
//     },
//     {
//         mark: "acer",
//         category: ["laptop", "tech"],
//         price: 38000
//     },
//     {
//         mark: "apple",
//         category: ["notebook", "tech"],
//         price: 37000
//     },
//     {
//         mark: "asus",
//         category: ["computer", "premium"],
//         price: 125500,
//     },
//     {
//         mark: "asus",
//         category: ["computer", "tech"],
//         price: 42000
//     },
//     {
//         mark: "acer",
//         category: ["notebook", "premium"],
//         price: 49000
//     }
// ]


// mark = prompt("enter laptops mark")
// price = +prompt("enter laptops price")

// for (let i = 0; i < 6; i++) {

          
//             if (laptopsFourth[i].mark == mark) {
//                 console.log(laptopsFourth[i]);
//             };
        
//             if (laptopsFourth[i].price <= price) {
//                 console.log(laptopsFourth[i]);
//             }
//         };
    
