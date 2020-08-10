let carts = document.getElementsByClassName('addtocart-btn')

let choker = [
    {
        name: 'Aerospace Choker',
        tag: 'aerospacechoker-m',
        size: 'M',
        price: 19,
        inCart: 0
    },
    {
        name: 'Aerospace Choker',
        tag: 'aerospacechoker-l',
        size: 'L',
        price: 22,
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
        else if (sizeValue == "medium") {
            cartNumbers(choker[0]);
            totalCost(choker[0]);
        }
        else if (sizeValue == "large") {
            cartNumbers(choker[1]);
            totalCost(choker[1]);
        }
    })
}


function onLoadCartNumbers() {
    let productNumber = localStorage.getItem('cartNumbers');

    if(productNumber){
        document.querySelector('.cartnum span').textContent = productNumber;
    }
}

function cartNumbers(choker) {
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

    setItem(choker);
}

function setItem(choker) {
    let cartItems = localStorage.getItem('productsInCart');
    cartItems = JSON.parse(cartItems);

    if(cartItems != null){
        if(cartItems[choker.tag] == undefined) {
            cartItems = {
                ...cartItems,
                [choker.tag]: choker
            }
        }
        cartItems[choker.tag].inCart += 1
    }
    else{
        choker.inCart = 1;
        cartItems = {
            [choker.tag]: choker
        }
    }
    localStorage.setItem("productsInCart", JSON.stringify(cartItems));
}

function totalCost(choker) {
    //console.log("The product price is: ", choker.price)
    let cartCost = localStorage.getItem('totalCost');
    
    console.log("My cartCost is:", cartCost);
    console.log(typeof cartCost);

    if(cartCost != null) {
        cartCost = parseInt(cartCost);
        localStorage.setItem("totalCost", cartCost + choker.price);
    }
    else{
        localStorage.setItem("totalCost", choker.price);
    }
}

onLoadCartNumbers();




