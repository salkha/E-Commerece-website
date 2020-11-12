<?php 
    if(!isset($_SESSION)) {
        session_start();
    }        
?>


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Online Shop</title>
    <link rel="stylesheet" href="style.css">       
</head>

<!-- We have devided the whole index in to 2 parts, header and footer -->

<body>
<header>
    <nav>                
        <ul>
            <li><a href="index.php">Home</a></li>
            <li><a href="about.php">About</a></li>
            
        </ul>
    </nav>

    <h1> <span><a href="index.php#gallary" class="scrollIcon"><ion-icon size="large" style="zoom:1.0;" name="glasses-outline"></ion-icon></a></span> <a href="index.php">ONLINE SHOP</a></h1>
    

    <section class="login-section">
        <?php

            if (isset($_SESSION['userId'])) {
                echo '
                        <form action="includes/logout.inc.php" method="post">
                        <p class="loggedIn"> You are logged in !!</p>
                        <button type="submit" name="logout-submit">Logout</button>
                        </form>';                    
            }
            else {
                echo '<form action="includes/login.inc.php" method="post"> 
                        <!-- leads to a folder to check if the user is valid and use always post method to hide information, .inc is only for naming perposes -->
                        <input type="text" name="mailuid" placeholder="Username/E-mail...">
                        <input type="password" name="pwd" placeholder="Password">
                        <button type="submit" name="login-submit">Login</button>
                        </form>
                        <a href="signup.php">Signup</a>';                 
            }             
        ?>
    </section>            
</header>

<div class="confirmation">   
</div>

<div class="printIcon">
    <ion-icon name="print-outline" size="large" class="print"></ion-icon>
</div>


<h2 class="recieptTitle">Your Receipt</h2>

<div class="billingBottom">

    <div class="productTitle">
    </div>

    <div class="orderedProdect">
    </div>

    <div class="basket">  
    </div>
    
</div>







        <script src="https://unpkg.com/ionicons@5.1.2/dist/ionicons.js"></script>
        <script src="confirmation.js"></script>
    </body>
</html>