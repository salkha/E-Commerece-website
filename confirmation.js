function showConfirmation() {
  
    const confirmMessage=document.querySelector(".confirmation");
    const adressFromLocalstorage = JSON.parse(localStorage.getItem("address"));
  
    confirmMessage.innerHTML = `<p class="headingConfirmation"> Thannk You for your purchase. </p><br>
                                <p>Your product has been sent to the following address </p><br>
                                <p>${adressFromLocalstorage.firstName} ${adressFromLocalstorage.lastName}</p><br>
                                <p>${adressFromLocalstorage.street} ${adressFromLocalstorage.houseNo}</p><br>
                                <p>${adressFromLocalstorage.postCode} ${adressFromLocalstorage.city}</p><br>
                                <p>${adressFromLocalstorage.country}</p><br>
                                <p><ion-icon class="thumbs-up" size="large" name="thumbs-up-outline"></ion-icon></p>`
        
    setTimeout(function(){ 
        delete localStorage["address"];
        delete localStorage["productsInCart"];
    }, 5000);

  }



function initConfirmationPage (){

    const addressExist = JSON.parse(localStorage.getItem("address"));

    if (addressExist) {
    showConfirmation();
    } else {
    window.location.href="index.php";
    }
    
}

//-----------------------------------//
function basketTotal () {

    let cartItems = localStorage.getItem("productsInCart");
    cartItems= JSON.parse(cartItems);
    let cartCost = 0;
    
    if(cartItems != null) {
        //console.log(cartItems);
        Object.values(cartItems).map(item => {
            cartCost += item.totalCost;
        })

    }

    return cartCost;
}


function displayCart(){

    let cartItems = localStorage.getItem("productsInCart");

    cartItems= JSON.parse(cartItems);
    
    let productContainer = document.querySelector(".orderedProdect");
    let basketPrice = document.querySelector(".basket");
    let productTitle = document.querySelector(".productTitle")
    let cartCost = basketTotal(); 



    if(cartItems && productContainer && basketPrice ) {
        productContainer.innerHTML = '';
        Object.values(cartItems).map(item => {

            productTitle.innerHTML = `
            <div class="product-wrapper">
                <div class= "billingTitle"> Product </div>
                <div class= "billingTitle"> Product Price </div>
                <div class= "billingTitle"> Quantity </div>
                <div class= "billingTitle"> Total Price </div>                                
            </div>`;

            productContainer.innerHTML += `
            <div class="product-wrapper">

                <div class ="product">
                    <img src="./images/${item.tag}.jpg">
                    <span>${item.name}</span>
                </div>     
                    
                <div class="price">${item.price},00 €</div>
                
                <div class="quantity">    
                    <span>${item.inCart}</span>                    
                </div>                
                <div class="total">
                    <b>${item.inCart * item.price},00 €</b>
                </div>
            </div>`;

            basketPrice.innerHTML = `<div class= "billingBasketTotal"><h4 class="basketTotal"> Total amount paid = ${cartCost},00 € </h4></div>`;
        }); 
    }
}   

document.querySelector(".print").addEventListener("click", ()=>{
    window.print();
})


 
displayCart();
initConfirmationPage();

 