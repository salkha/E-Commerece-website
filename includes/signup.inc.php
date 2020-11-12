<!-- no closing tag needed, because we dont write any html here-->

<?php 

if (isset ($_POST['signup-submit'])) {

    require 'dbh.inc.php';

    $username = $_POST['uid'];
    $email = $_POST['mail'];
    $password = $_POST['pwd'];
    $passwordRepeat = $_POST['pwd-repeat'];

    //error handlers

    if (empty($username) || empty($email) || empty($password) || empty($passwordRepeat) ) {
        header("Location: ../signup.php?error=emptyfields&uid=".$username."&mail".$email);  // to put back given informations in the fields again
        exit();
    } 

    else if (!filter_var($email, FILTER_VALIDATE_EMAIL) && !preg_match("/^[a-zA-Z0-9]*$/", $username)) {
        header("Location: ../signup.php?error=invalidmail&uid");  // for both we dont give any information back
        exit();
    }

    else if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {                    //filter_var a function takes two parameters, the email given by users, and a filter to check if its valid
        header("Location: ../signup.php?error=invalidmail&uid=".$username);   //if email is wrong , we dont need to put the email address back again
        exit();
    }

    else if (!preg_match("/^[a-zA-Z0-9]*$/", $username)) {  //Preg_match is a function takes to parameters, to limit user with perticular letters and numbers
        header("Location: ../signup.php?error=invaliduid&uid=".$email); // here is other way around
        exit();
    }
    else if ($password !== $passwordRepeat) {
        header("Location: ../signup.php?error=passwordcheck&uid=".$username."&mail".$email);
        exit();
    }
    else {
        $sql = "SELECT uidUsers FROM users WHERE uidUsers=? OR emailUsers=?"; //prepared statesments using ? mark
        $stmt = mysqli_stmt_init($conn); //conn as parameter

        if (!mysqli_stmt_prepare($stmt, $sql)) {  //if it fails
            header("Location: ../signup.php?error=sqlerror");
            exit();
        }
        else {
            mysqli_stmt_bind_param($stmt, "ss", $username, $email); // s refers to datatype, if there is 1 3rd parameter then 1 s , if more than more s
            mysqli_stmt_execute($stmt);
            mysqli_stmt_store_result($stmt); // to compare if a username already exist
            $resultcheck = mysqli_stmt_num_rows($stmt); //we get back rows thats why

            if ($resultcheck>0) {
                header("Location: ../signup.php?error=useroremailadresstaken");
                exit();
            }
            else {
                $sql = "INSERT INTO users (uidUsers, emailUsers, pwdUsers) VALUES (?,?,?)"; //prepared statesment
                
                $stmt = mysqli_stmt_init($conn); //conn as parameter

                if (!mysqli_stmt_prepare($stmt, $sql)) {  //if it fails
                    header("Location: ../signup.php?error=sqlerror");
                    exit();
                }
                else {
                    $hashedPwd = password_hash($password, PASSWORD_DEFAULT);

                    mysqli_stmt_bind_param($stmt, "sss", $username , $email , $hashedPwd); // password hashed and s refers to datatype, if there is 1 3rd parameter then 1 s , if more than more s
                    mysqli_stmt_execute($stmt);
                
                    header("Location: ../signup.php?signup=success");
                    exit();

                }
            
            }
        }
    

    }   
    mysqli_stmt_close($stmt);
    mysqli_close($conn);
}
