const product = [
    {
        id:0,
        image: "d1.jpg",
        title:" snacks",
        price: 120,
    },
    {
        id:1,
        image: "./dessert.jpg",
        title:" dessert",
        price: 150,
    },
    {
        id:2,
        image: "./food.jpg",
        title:"food",
        price: 100,
    },
    {
        id:3,
        image: "./cappucino.jpg",
        title:"coffee",
        price: 180,
    },
    {
        id:4,
        image: "d1.jpg",
        title:" snacks",
        price: 120,
    },
    {
        id:5,
        image: "./dessert.jpg",
        title:" dessert",
        price: 150,
    },
    {
        id:6,
        image: "./food.jpg",
        title:"food",
        price: 100,
    },
    {
        id:7,
        image: "./cappucino.jpg",
        title:"coffee",
        price: 180,
    },
    {
        id:8,
        image: "d1.jpg",
        title:" snacks",
        price: 120,
    },
    {
        id:9,
        image: "./dessert.jpg",
        title:" dessert",
        price: 150,
    },
    {
        id:10,
        image: "./food.jpg",
        title:"food",
        price: 100,
    },
    {
        id:11,
        image: "./cappucino.jpg",
        title:"coffee",
        price: 180,
    }
    
];
const categories = [...new Set(product.map((item)=>
    {return item}))]
    let i=0;
    document.getElementById("root").innerHTML = categories.map((item)=>
    {
        var{image, title, price}=item;
        return(
            `<div class="box">
                <div class="img-box">
                    <img class="images" src=${image}></img>
                </div>
            <div class="bottom">
            <p>${title}</p>
            <h2>Rs. ${price}.00</h2>`+
            "<button onclick='addtocart("+(i++)+")'><i class='fa-solid fa-bag-shopping'></i></button>"+
            `</div>
            </div>`
        )
    }).join('')

var cart=[];

function addtocart(a){
    cart.push({...categories[a]});
    displaycart();
}

function delElement(a){
    cart.splice(a,1);
    displaycart();
}

function displaycart(a){
    let j=0,total=0;
    document.getElementById("count").innerHTML=cart.length;
    document.getElementById("total").innerHTML="Rs. "+0+".00";
    if(cart.length==0){
        document.getElementById("cartItem").innerHTML = " Your cart is empty";
    }
    else{
        document.getElementById("cartItem").innerHTML = cart.map((items)=>
        {
            var{image,title,price}=items;
            total=total+price;
            document.getElementById("total").innerHTML="Rs. "+total+".00";
            return(
                `<div class= "cart-item">
                <div class="row-img">
                    <img class="rowimg" src=${image}>
                </div>
                <p id='food'>${title}</p>
                <h2 style ='font-size:15px;'>Rs. ${price}.00</h2>`+
                "<i class='fa-solid fa-trash' onclick='delElement("+(j++) +")'></i></div>"
            )
        }).join('');
    }
}