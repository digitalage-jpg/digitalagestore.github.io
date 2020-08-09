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
var sizeValue = size.options[size.selectedIndex].value;

for (var i=0; i < carts.length; i++) {
    carts[i].addEventListener('click', ()=> {
        if(size = "medium"){
            cartNumbers(choker[0]);
        }
        else if(size = "large") {
            cartNumbers(choker[1]);
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
    console.log("the product clicked is", choker)

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
}

onLoadCartNumbers();




