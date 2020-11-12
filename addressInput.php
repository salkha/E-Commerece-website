<?php
    require "header.php"
?>

<section class="container-address" >
    <h2>Please fill up the informations!!</h2>
    <br>
    <p>Please fill up your account details</p>
    <br>
    <ion-icon name="card-outline" size="large"></ion-icon>
    <br>
    <input type="text" placeholder="Name of card holder">
    <br>
    <input type="text" placeholder="Card Number">
    <br>
    <input type="text" placeholder="Validity">
    <br>
    <input type="text" placeholder="CVC">

    <br>
    <br>

    <div class="addressForm">
        <p>Please fill up the delivery address</p>
        <br>
        <ion-icon name="home-outline"  size="large"></ion-icon>
        <br>
        <input value= "" type="text" name="firstName" placeholder="First Name" class="firstName">
        <br>
        <input type="text" name="lastName" placeholder="Last Name" class="lastName">
        <br>
        <input type="text" name="telephone" placeholder="Telephone">
        <br>
        <input type="text" name="street" placeholder="Street" class="street">
        <br>
        <input type="text" name="houseNo" placeholder="House Number" class="houseNo">
        <br>
        <input type="text" name="postCode" placeholder="Post Code" class="postCode">
        <br>
        <input type="text" name="city" placeholder="City" class="city">
        <br>
        <input type="text" name="country" placeholder="Country" class="country">
        <br>
        <button class="buy-button">Confirm</button>
    </div>

    <p class="test">
    </p>

</section>



<footer>
            <div class="footer-element">
                <a href="impressum.php">Impressum</a>
                <a href="https://www.facebook.com/"><ion-icon name="logo-facebook"></ion-icon></a>
                <a href="https://twitter.com/?lang=en"><ion-icon name="logo-twitter"></ion-icon></a>
                <a href="https://www.instagram.com/"><ion-icon name="logo-instagram"></ion-icon></a>
                <a href="https://www.youtube.com/"><ion-icon name="logo-youtube"></ion-icon></a>
            </div>
            
        </footer>

        <script src="https://unpkg.com/ionicons@5.1.2/dist/ionicons.js"></script>
        <script src="addressInput.js"></script>
        
    </body>
</html>