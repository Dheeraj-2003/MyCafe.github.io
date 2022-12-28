const bar = document.getElementById('bar')
const close = document.getElementById('close')
const nav = document.getElementById('nav')

if (bar) {
    bar.addEventListener('click', () => {
        nav.classList.toggle('active');
    })
}
if (close) {
    close.addEventListener('click', () => {
        nav.classList.remove('active');
    })
}

const crt = document.getElementById('crt')
const cartbox = document.getElementById('cartbox')

if (crt) {
    crt.addEventListener('click', () => {
        cartbox.classList.toggle('active');
    })
}



// hold up
let carts = document.querySelectorAll('.add-cart');

let products = [
    {
        name: 'cappucino',
        tag: 'cappucino',
        price: 15,
        inCart: 0
    },
    {
        name: 'dessert',
        tag: 'dessert',
        price: 20,
        inCart: 0
    },
    {
        name: 'd1',
        tag: 'd1',
        price: 10,
        inCart: 0
    },
    {
        name: 'food',
        tag: 'food',
        price: 25,
        inCart: 0
    }
]

for (let i = 0; i < carts.length; i++) {
    carts[i].addEventListener('click', () => {
        cartNumbers(products[i]);
        totalCost(products[i]);
    })
}
function onLoadCartNumbers() {
    let productNumbers = localStorage.getItem('cartNumbers');
    if (productNumbers) {
        document.querySelector('.cart span').textContent = productNumbers;
    }
}

function cartNumbers(products) {

    let productNumbers = localStorage.getItem('cartNumbers');

    productNumbers = parseInt(productNumbers);

    if (productNumbers) {
        localStorage.setItem('cartNumbers', productNumbers + 1);
        document.querySelector('.cart span').textContent = productNumbers + 1;
    }
    else {
        localStorage.setItem('cartNumbers', 1);
        document.querySelector('.cart span').textContent = 1;
    }

    setItems(products);
}
function setItems(products) {

    let cartItems = localStorage.getItem("productsInCart")

    cartItems = JSON.parse(cartItems);

    if (cartItems == null) {
        products.inCart = 1;
        cartItems = {
            [products.tag]: products

        }

    }
    else {
        if (cartItems[products.tag] == undefined) {
            cartItems = {
                ...cartItems,
                [products.tag]: products
            }
        }

        cartItems[products.tag].inCart = cartItems[products.tag].inCart + 1;

    }

    localStorage.setItem("productsInCart", JSON.stringify(cartItems));
}
function totalCost(products) {
    // console.log("prdoucts prize is",products.price);
    let cartCost = localStorage.getItem("totalCost");

    if(cartCost != null){
        cartCost =parseInt(cartCost); 
        localStorage.setItem("totalCost", cartCost+products.price);
    }
    else{
    localStorage.setItem("totalCost",products.price);
    }
}
function displaycart(){
    let cartItems = localStorage.getItem("productsInCart");
    cartItems=JSON.parse(cartItems);
    let productscontainer = document.querySelector(".products")
    console.log(cartItems);
    if(cartItems){
        console.log("running");
        productscontainer.innerHTML = ''; 
        Object.values(cartItems).map(item =>{
            productscontainer.innerHTML += `
            <div class="product">
                <i class="fa-solid fa-trash"></i>
                <img src="./${item.tag}.jpg">
                <span>${item.name}</span>
            
            <span class="price">${item.price}</span>
            </div>
        `    
        })

    }
}

onLoadCartNumbers();
displaycart();