//--------------------Delivary Address-----------------------//

let buyButton =document.querySelector(".buy-button");


  let address = {
      firstName : "",
      lastName : "",
      street : "",
      houseNo : "",
      postCode : "",
      city : "",
      country : "",

  }



if (buyButton ) {
  buyButton.addEventListener("click", ()=>{

      if (document.querySelector(".firstName").value.length== 0 || 
          document.querySelector(".lastName").value==0 ||
          document.querySelector(".street").value==0 ||
          document.querySelector(".houseNo").value==0 ||
          document.querySelector(".postCode").value==0 ||
          document.querySelector(".city").value==0 ||
          document.querySelector(".country").value==0 ) {

          alert("Please fill all the Informations");

      } else {
          address.firstName = document.querySelector(".firstName").value;
          address.lastName =document.querySelector(".lastName").value;
          address.street =document.querySelector(".street").value;
          address.houseNo =document.querySelector(".houseNo").value;
          address.postCode =document.querySelector(".postCode").value;
          address.city =document.querySelector(".city").value;
          address.country =document.querySelector(".country").value;

          localStorage.setItem("address", JSON.stringify (address));
          
          window.location.href="ConfirmationPage.php"
        
      }
      
      
      
  })

}


