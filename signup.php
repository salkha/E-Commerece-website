<?php
    require "header.php"
?>

<main id="Sign-up">
    <div class="wrapper-main">
        <section class="section-default">
            <h1>Sign Up</h1>
            
            <!-- Error Handling Messages-->
            <?php
                if (isset($_GET["error"])) {
                    if ($_GET['error'] == "emptyfields") {
                        echo '<p> Please fill in all fields !!</p>';
                    } 
                    else if ($_GET['error'] == "invalidmail") {
                        echo '<p> Invalid E-mail !!</p>';
                    } 
                    else if ($_GET['error'] == "invaliduid") {
                        echo '<p> Invalid Username !!</p>';
                    } 
                    else if ($_GET['error'] == "passwordcheck") {
                        echo '<p> Your passwords do not match !!</p>';
                    } 
                    else if ($_GET['error'] == "sqlerror") {
                        echo '<p> Connection Error !!</p>';
                    } 
                    else if ($_GET['error'] == "useroremailadresstaken") {
                        echo '<p> Username or E-mail address is already taken !!</p>';
                    } 
                                                          
                }
                else if (isset($_GET["signup"]) && $_GET['signup'] == "success") {
                    echo '<p> Sign Up Successful !!</p>';
                }
            ?>
            
            <form action="includes/signup.inc.php" method="post" class="sign-up">
                <input type="text" name="uid" placeholder="Username">
                <br>
                <input type="text" name="mail" placeholder="E-mail">
                <br>
                <input type="password" name="pwd" placeholder="Password">
                <br>
                <input type="password" name="pwd-repeat" placeholder="Repeat Password">
                <br>
                <button type="submit" name="signup-submit">Sign Up</button> 
            </form>
        </section>
    </div>
</main>

<?php
    require "footer.php"
?>