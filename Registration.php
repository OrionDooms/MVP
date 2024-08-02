<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>SwiftClean - Sign Up & Log In</title>
    <link rel="stylesheet" href="CSS/Reg.css">
    <link rel="stylesheet" href="CSS/price_layout.css">
</head>
<body>
    <?php 
    if (isset($_SESSION['error'])){
        echo $_SESSION['error'];
        unset($_SESSION['error']);
    };
    ?>
    <div class="container" id="container">
        <div class="form-container sign-up-container">
            <!--------Sign Up------->

            <a href="index.html">
                <h2>SwiftClean</h2>
            </a>
            <form action="PHP/connect.php" method="post">
                <h1>Create Account</h1>
                <span>or use your email for registration</span>
                <!--Username-->
                <input type="text" id="username" name="username" placeholder="Name" />
                <!--Email-->
                <input type="email" id="email" name="email" placeholder="Email" />
                <!--Password-->
                <input type="password" id="password" name="password" placeholder="Password" />
                <!--Submit button-->
                <button type="submit">Sign Up</button>
            </form>
        </div>
        <div class="form-container sign-in-container">
            <!--------Sign In-------->
            <a href="index.html"><h2>SwiftClean</h2></a>
            <form action="PHP/Login.php" method="post">
                <h1>Sign In</h1>
                <span>or use your account</span>
                <input type="email" name="email" placeholder="Email" />
                <input type="password" name="password" placeholder="Password" />
                <button type="submit">Sign In</button>
            </form>
        </div>
        <div class="overlay-container">
            <div class="overlay">
                <div class="overlay-panel overlay-left">
                    <h1>Welcome Back!</h1>
                    <p>To keep connected with us please log in with your personal info</p>
                    <button class="ghost" id="signIn">Sign In</button>
                </div>
                <div class="overlay-panel overlay-right">
                    <h1>Hello, Friend!</h1>
                    <p>Enter your personal details<br> and start journey with us</p>
                    <button class="ghost" id="signUp">Sign Up</button>
                </div>
            </div>
        </div>
    </div>
    <script src="JavaScript/Reg.js"></script>
</body>

</html>