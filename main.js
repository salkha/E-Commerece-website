let carts = document.querySelectorAll(".add-cart");

let products = [
    
    {
        name: "Ray-Ban",
        tag: "glass1",
        price: 131 ,
        inCart:0,
        totalPrice:0
    },

    {
        name: "Ray-Ban",
        tag: "glass2",
        price: 121,
        inCart:0,
        totalPrice:0
    },

    {
        name: "Ray-Ban",
        tag: "glass3",
        price: 149,
        inCart:0,
        totalPrice:0
    },

    {
        name: "Escada",
        tag: "glass4",
        price: 174,
        inCart:0,
        totalPrice:0
    },

    {
        name: "Ray-Ban",
        tag: "glass5",
        price: 143 ,
        inCart:0,
        totalPrice:0
    },

    {
        name: "Ray-Ban",
        tag: "glass6",
        price: 156,
        inCart:0,
        totalPrice:0
    },

    {
        name: "Ray-Ban",
        tag: "glass7",
        price: 141,
        inCart:0,
        totalPrice:0
    },

    {
        name: "Ray-Ban",
        tag: "glass8",
        price: 145,
        inCart:0,
        totalPrice:0
    },

    {
        name: "Ashley",
        tag: "glass9",
        price: 78 ,
        inCart:0,
        totalPrice:0
    },

    {
        name: "Ashley",
        tag: "glass10",
        price: 89,
        inCart:0,
        totalPrice:0
    },

    {
        name: "Ashley",
        tag: "glass11",
        price: 95,
        inCart:0,
        totalPrice:0
    },

    {
        name: "Ashley",
        tag: "glass12",
        price: 110,
        inCart:0,
        totalPrice:0
    }
    
    

    

];

for (let i=0;i<carts.length;i++) {
    carts[i].addEventListener("click", (e) => {
        e.preventDefault();
        setItems(products[i]);
        totalCost(products[i]);
    })
}


//Function to show product number in cart

function onLoadCartNumbers () {
    let productNumbers = localStorage.getItem("cartNumbers");

    if (productNumbers) {
        document.querySelector(".cart span").textContent = productNumbers;
    }
}


//Function for
function cartNumbers () {
    
    let counter =0;
    let cartItems = JSON.parse(localStorage.getItem("productsInCart"));
        
        if (cartItems != null) {
            Object.values(cartItems).map(item => {
                counter += item.inCart;
            })
            
        }

        document.querySelector(".cart span").textContent = counter;
        
    
}

//function set items

function setItems (product) {
    
    let cartItems = localStorage.getItem("productsInCart");
    cartItems= JSON.parse(cartItems);

    if (cartItems != null) {

        if(cartItems[product.tag] == undefined) {
            cartItems = {
                ...cartItems,
                [product.tag] : product
            }
        }
        cartItems[product.tag].inCart += 1;
    } else {
        product.inCart =1;

        cartItems= {
            [product.tag] : product
        }
    }
    localStorage.setItem("productsInCart" , JSON.stringify (cartItems));

    cartNumbers();
    totalCost();
}

function totalCost () {

  //do something
    let totalProductPrice = 0;
    let cartItems = localStorage.getItem("productsInCart");
    cartItems= JSON.parse(cartItems);
    
    if(cartItems != null) {
        //console.log(cartItems);
        Object.values(cartItems).map(item => {
            totalProductPrice= (item.inCart * item.price);
            item.totalCost=totalProductPrice;
        })

    }
    localStorage.setItem("productsInCart" , JSON.stringify (cartItems));
};



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
    
    let productContainer = document.querySelector(".products");




    if(cartItems && productContainer ) {
        productContainer.innerHTML = '';
        Object.values(cartItems).map(item => {

            

            productContainer.innerHTML += `
            <div class="product-wrapper">

                <div class ="product">
                    <img src="./images/${item.tag}.jpg">
                    <span>${item.name}</span>
                </div>     
                    
                <div class="price">${item.price},00 €</div>
                
                <div class="quantity">
                    <button class="deleteItemButton" data-item="${item.tag}"> << </button>
                    <span>${item.inCart}</span>
                    <button class="addItemButton" data-item="${item.tag}"> >> </button>
                </div>

                <div class="delete-icon"><button class="removeButton" data-item="${item.tag}"> <span><ion-icon size="large" name="trash-outline"></ion-icon></span></button></div>
                
                <div class="total">
                    <b>${item.inCart * item.price},00 €</b>
                </div>
            </div>
           
            `;
        }); 

        let cartCost = basketTotal();

        productContainer.innerHTML += `<div class="basketTotalContainer">
                                            <h4 class="basketTotalTitle"> Basket Total </h4> 
                                            <div class="totalWrapper">
                                                <h4 class="basketTotal"> ${cartCost},00 € </h4>
                                                <button class="buy-button"> Buy Now </button>                                                
                                            </div> 
                                        </div>
                                        `;
        //-------------------Buy now button--------------------//

        document.querySelector(".buy-button").addEventListener("click", ()=> {
            const isLoggedIn = document.querySelector(".loggedIn") ? true : false ;
             if (isLoggedIn) {
                 window.location.href= "addressInput.php";
             } else {
                 alert("Please login first");
             }
        })

        
       


        let cartRemoveButton = document.querySelectorAll(".removeButton");
        let removeBtnArray = Array.prototype.slice.call(cartRemoveButton);

        
        removeBtnArray.forEach(btn => {
            btn.addEventListener("click", ()=> {
                //console.log(btn.dataset.item);
                const objKey = btn.dataset.item;
                
                delete cartItems[objKey];
                localStorage.setItem("productsInCart" , JSON.stringify (cartItems));
                displayCart();
                cartNumbers();
                
                
                
            })
        });


        //--------------------add Button------------------

        let addButton = document.querySelectorAll(".addItemButton");
        let addButtonArray = Array.prototype.slice.call(addButton);

        addButtonArray.forEach(btn => {
            btn.addEventListener("click", ()=> {
                

                const objKey = btn.dataset.item;

                let productQuantity= cartItems[objKey].inCart;
                cartItems[objKey].inCart = productQuantity +1 ;


                localStorage.setItem("productsInCart" , JSON.stringify (cartItems));

                basketTotal();
                totalCost();
                cartNumbers();
                displayCart();
                onLoadCartNumbers ();
                
            })
        });

        //--------------------delete item button --------------
        let deleteButton = document.querySelectorAll(".deleteItemButton");
        let deleteButtonArray = Array.prototype.slice.call(deleteButton);

        deleteButtonArray.forEach(btn => {
            btn.addEventListener("click", ()=> {
                

                const objKey = btn.dataset.item;
                let productQuantity= cartItems[objKey].inCart;
                 if (productQuantity>1) {
                    cartItems[objKey].inCart = productQuantity - 1 ; 
                 }

                    localStorage.setItem("productsInCart" , JSON.stringify (cartItems));

                    basketTotal();
                    totalCost();
                    cartNumbers();
                    displayCart();
                    onLoadCartNumbers ();
                
            })
        });


    }
}



basketTotal();
totalCost();
cartNumbers();
displayCart();
onLoadCartNumbers (); //to load products to cart from localstorage