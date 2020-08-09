let carts = document.getElementsByClassName('addtocart-btn');

let bracelet = [
    {
        name: 'Impulse Braclet',
        tag: 'impulsebraclet-s',
        size: 'S',
        price: 25,
        inCart: 0
    },
    {
        name: 'Impulse Braclet',
        tag: 'impulsebraclet-m',
        size: 'M',
        price: 25,
        inCart: 0
    },
    {
        name: 'Impulse Braclet',
        tag: 'impulsebraclet-l',
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
        }
        else if (sizeValue == "medium") {
            cartNumbers(bracelet[1]);
        }
        else if (sizeValue == "large") {
            cartNumbers(bracelet[2]);
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
    console.log("the product clicked is", bracelet)

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




