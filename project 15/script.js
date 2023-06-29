let form = document.querySelector(".product-form")
let productName = document.querySelector("input[name='product-name']")
let productPrice = document.querySelector("input[name='product-price']")
let productswrapper = document.querySelector(".products-wrapper")

let products = [
    {
        name: "Велосипед",
        price: 40000
    },
    {
        name: "Самокат",
        price: 40000
    },
    {
        name: "Лыжи",
        price: 40000
    },
    {
        name: "Сноуборд",
        price: 40000
    }
]


form.addEventListener("submit", function(event) {
event.preventDefault()
console.log (productName.value)
console.log (productPrice.value)
})


function renderProducts(arr){
arr.forEach(function(el) { 
   productswrapper.innerHTML += `
   <div class="product">
<p class="product-name">${el.name}</p>
<p class="product-price">${el.price}</p>
</div> 
   `
});
}

renderProducts(products)

