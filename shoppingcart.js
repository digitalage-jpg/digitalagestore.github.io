function displayCart() {
    let cartItems = localStorage.getItem("productsInCart");
    cartItems = JSON.parse(cartItems);
    let cartCost = localStorage.getItem('totalCost');

    let carttable = document.querySelector(".carttable");
    let totalprice = document.querySelector(".totalprice");

    if(cartItems && carttable || totalprice){
        carttable.innerHTML = '';
        Object.values(cartItems).map(item => {
            carttable.innerHTML += `
            <table class="carttable">
                <tr class="cartrow">
                    <th>${item.size}</th>
                    <th><img class="cartimg" src="producticon/${item.tag}.jpg"></th>
                    <th>${item.name}</th>
                    <th>$${item.price}.00</th>
                    <th><input class="cart-qty" type="number" value="${item.inCart}"></th>
                    <th>$${item.inCart * item.price}.00</th>
                    <th><button class="btn-danger">REMOVE</button></th>
                </tr>
            </table>
            `;
        });

        totalprice.innerHTML = `
        <div class="totalprice">
            <h2>TOTAL:$${cartCost}.00</h2>
        </div>
        `;
    }
}

displayCart();

var removeCartItemButtons = document.getElementsByClassName('btn-danger')

for(var i = 0; i < removeCartItemButtons.length; i++){
    var button = removeCartItemButtons[i]
    button.addEventListener('click', function(event) {
        var buttonClicked = event.target
        buttonClicked.parentElement.parentElement.remove()

    })
}
