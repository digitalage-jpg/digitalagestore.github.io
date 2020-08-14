let carts = document.getElementsByClassName('addtocart-btn');

let bracelet = [
    {
        name: 'Impulse Bracelet',
        tag: 'impulsebracelet-s',
        size: 'S',
        price: 25,
        inCart: 0
    },
    {
        name: 'Impulse Bracelet',
        tag: 'impulsebracelet-m',
        size: 'M',
        price: 25,
        inCart: 0
    },
    {
        name: 'Impulse Bracelet',
        tag: 'impulsebracelet-l',
        size: 'L',
        price: 25,
        inCart: 0
    }
]

let size = document.getElementById('size');

function getSize(size) {
    sizeValue = size.options[size.selectedIndex].value;
    return sizeValue;
}

for (var i=0; i < carts.length; i++) {
    carts[i].addEventListener('click', ()=> {
        getSize(size);
        if(sizeValue == "null"){
            alert("Please select a size");
        }
        else if (sizeValue == "small"){
            cartNumbers(bracelet[0]);
            totalCost(bracelet[0]);
        }
        else if (sizeValue == "medium") {
            cartNumbers(bracelet[1]);
            totalCost(bracelet[1]);
        }
        else if (sizeValue == "large") {
            cartNumbers(bracelet[2]);
            totalCost(bracelet[2]);
        }
    })
}

function onLoadCartNumbers() {
    let productNumber = localStorage.getItem('cartNumbers');

    if(productNumber){
        document.querySelector('.cartnum span').textContent = productNumber;
    }
}

function cartNumbers(bracelet) {

    let productNumber = localStorage.getItem('cartNumbers');

    productNumber = parseInt(productNumber);

    if(productNumber){
        localStorage.setItem('cartNumbers', productNumber  + 1);
        document.querySelector('.cartnum span').textContent = productNumber + 1;
    }
    else {
        localStorage.setItem('cartNumbers', 1);
        document.querySelector('.cartnum span').textContent = 1;
    }

    setItem(bracelet);
}

function setItem(bracelet) {
    let cartItems = localStorage.getItem('productsInCart');
    cartItems = JSON.parse(cartItems);

    if(cartItems != null){
        if(cartItems[bracelet.tag] == undefined) {
            cartItems = {
                ...cartItems,
                [bracelet.tag]: bracelet
            }
        }
        cartItems[bracelet.tag].inCart += 1
    }
    else{
        bracelet.inCart = 1;
        cartItems = {
            [bracelet.tag]: bracelet
        }
    }
    localStorage.setItem("productsInCart", JSON.stringify(cartItems));
}

function totalCost(bracelet) {
    let cartCost = localStorage.getItem('totalCost');

    if(cartCost != null) {
        cartCost = parseInt(cartCost);
        localStorage.setItem("totalCost", cartCost + bracelet.price);
    }
    else{
        localStorage.setItem("totalCost", bracelet.price);
    }
}

onLoadCartNumbers();




