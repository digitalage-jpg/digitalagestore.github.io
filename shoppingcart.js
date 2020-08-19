function displayCart() {
    let cartItems = localStorage.getItem("productsInCart");
    cartItems = JSON.parse(cartItems);
    let cartCost = localStorage.getItem('totalCost');

    let carttable = document.querySelector(".carttable");
    let totalprice = document.querySelector(".totalprice");
    let carttablewrapper = document.querySelector(".carttablewrapper");

    if(cartItems == null) {
        carttablewrapper.innerHTML = '<br><h2 style="text-align: center;">YOUR CART IS EMPTY</h2><br>';
    }

    else if(cartItems && carttable || totalprice){
        carttable.innerHTML = '';
        Object.values(cartItems).map(item => {
            carttable.innerHTML += `
            <table class="carttable">
                <tr class="cartrow">
                    <th class="itemsize">${item.size}</th>
                    <th><img class="cartimg" src="producticon/${item.tag}.jpg"></th>
                    <th class="productname">${item.name}</th>
                    <th class="cart-price">$${item.price}.00</th>
                    <th><input class="cart-qty" type="number" value="${item.inCart}"></th>
                    <th class="subtotal">$${item.inCart * item.price}.00</th>
                    <th><button class="btn-danger">REMOVE</button></th>
                </tr>
            </table>
            `;
        });

        totalprice.innerHTML = `
        <div class="totalprice">
            <h2>TOTAL: $${cartCost}.00</h2>
        </div>
        `;
    }
}

displayCart();
onLoadCartNumbers();

/*-----------UPDATES NUMBER OF ITEMS IN CART-----------*/
function onLoadCartNumbers() {
    let productNumber = localStorage.getItem('cartNumbers');

    if(productNumber){
        document.querySelector('.cartnum span').textContent = productNumber;
    }
} //cart icon number

function cartNumbers() {
    let cartItems = localStorage.getItem("productsInCart");
    cartItems = JSON.parse(cartItems);

    Object.values(cartItems).map(item => {
        var newInCart = item.inCart
        localStorage.setItem('cartNumbers', newInCart);
    });
}//local storage count w/ key "cartNumbers"


/*-----------UPDATES TOTAL IN CART-----------*/
function totalCost() {
    let cartItems = localStorage.getItem("productsInCart");
    cartItems = JSON.parse(cartItems);

    let cartCost = localStorage.getItem("totalCost")
    cartCost = parseInt(cartCost);

    Object.values(cartItems).map(item => {
        var price = item.price
        localStorage.setItem('totalCost', price * item.inCart);
    });
}//local storage count w/ key "totalCost"


/*-----------UPDATE QUANTITY IN CART -----------*/
/*-----------needs fix - updating the qty of one item changes all items -----------*/
var updateQuantity = document.getElementsByClassName("cart-qty");
for (var i = 0; i < updateQuantity.length; i++){
    var input = updateQuantity[i];
    input.addEventListener("input", function(event) {

        console.log("Customer input-qty:", event.target.value);

        let cartItems = localStorage.getItem("productsInCart");
        cartItems = JSON.parse(cartItems);

        Object.values(cartItems).map(item => {
            item.inCart = event.target.value;
            console.log(item.inCart);
            localStorage.setItem("productsInCart", JSON.stringify(cartItems));

            if(event.target.value == 0){ //removes item from cart
                //localStorage.removeItem("productsInCart") 
            }
            
            cartNumbers(); //update the no. of items in cart
            onLoadCartNumbers(); //update the cart icon
            totalCost(); //update the total cost

        });

        location.reload(); //update the html view
    });
}


/*-----------REMOVE INDIVIDUAL ITEMS IN CART-----------*/
/*-----------needs fix-----------*/
var removeCartItemButtons = document.getElementsByClassName('btn-danger')
for(var i = 0; i < removeCartItemButtons.length; i++){
    var button = removeCartItemButtons[i];
    button.addEventListener('click', function(event) {
        //var buttonClicked = event.target

        var cartItems = localStorage.getItem("productsInCart")
        var cartItems = JSON.parse(cartItems);

        let index = cartItems.indexOf(i)
        cartItems.splice(index,1);
        localStorage.setItem("productsInCart", JSON.stringify(cartItems));


        // Object.values(cartItems).map(item => {
        //     item.inCart = 0;
            
        //     cartNumbers(); //updates the no. of items in cart
        //     onLoadCartNumbers(); //updates the cart icon
        //     totalCost(); //updates the total cost
        // });

        //buttonClicked.parentElement.parentElement.remove();
        //location.reload()
    })
}


/*-----------TO CHECKOUT PAGE (nothing in cart or something)-----------*/
var checkoutButton = document.getElementsByClassName('checkout')
for(var i = 0; i < checkoutButton.length; i++){
    var button = checkoutButton[i];
    button.addEventListener('click', ()=> {

        let itemsInCart = localStorage.getItem("cartNumbers");
        console.log(typeof itemsInCart);
        console.log(itemsInCart);
        if(itemsInCart == "null"){
            alert("Nothing in Cart");
        }
        else {
            console.log("CHECKOUT PRESSED");
            //window.location.href = "checkout.html"
        }

    });
}
