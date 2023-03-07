const header = document.getElementById('header')
// console.log(header)
header.innerHTML = `
<div class="header-part1">
    <nav class="navbar navbar-expand-md navbar-dark">
        <a href="home.html" class="navbar-brand brand-logo">
            <img class="brand-logo" src="Images/logo3.png" alt="logo">
        </a>
        <button class="btn btn-primary navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-expanded="false" aria-controls="navbarSupportedContent">
            <span class="navbar-toggler-icon"></span>
        </button>
        <!-- <a class="btn btn-primary" data-bs-toggle="collapse" href="#navbarSupportedContent" data-toggle="collapse" role="button" aria-controls="navbarSupportedContent" aria-expanded="false">
        </a> -->
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="nav nav-pills header-except-logo">
                <li class="nav-item header-seacrh-bar d-flex align-items-center">
                    <input class="header-seacrh-bar1" type="text" spellcheck="false" placeholder="Product name, Category name, etc">   
                    <button type="button" class="btn btn-primary header-search-button1" >search</button>   
                </li>
                <!-- <li class="nav-item header-search-button">
                    <button type="button" class="btn btn-primary header-search-button1" >search</button>   
                </li> -->
                <li class="nav-item header-login-button">
                <a href="login.html"><button type="button" class="btn btn-primary header-login-button1" >login</button><a>
                </li>
                <li class="nav-item cart-logo">
                    <a class="nav-link cart-logo1" href="cart.html" style="display: inline;"><i class="cart fa fa-shopping-cart fa-2x"></i> </a>
                </li>
            </ul>
        </div>

    </nav>
</div>
<div class="header-part2">
    <div class="menu">
        <ul class="nav nav-pills menu">
            <li class="nav-item">
                <a href="index.html" class="nav-link  a-text-color1 home-button">Home</a>
            </li>
            <li class="nav-item">
                <a href="AllProduct.html" class="nav-link a-text-color1">All Products</a>
            </li>
            <li class="nav-item dropdown">
                <a href="#" class="nav-item dropdown-toggle nav-link a-text-color1 dropdownbox-header" data-bs-toggle="dropdown">Women</a>
                <ul class="dropdown-menu">
                    <li><a href="WomenAll.html" class="dropdown-item a-text-color1">All products</a></li>
                    <li><a href="WomenDresses.html" class="dropdown-item a-text-color1">Dresses</a></li>
                    <li><a href="WomenPants.html" class="dropdown-item a-text-color1">Pants</a></li>
                    <li><a href="WomenSkirts.html" class="dropdown-item a-text-color1">Shirts</a></li>
                </ul>
            </li>
            <li class="nav-item dropdown">
                <a href="#" class="nav-item dropdown-toggle nav-link a-text-color1 dropdownbox-header" data-bs-toggle="dropdown">Men</a>
                <ul class="dropdown-menu">
                    <li><a href="MenAll.html" class="dropdown-item a-text-color1">All products</a></li>
                    <li><a href="MenShirts.html" class="dropdown-item a-text-color1">Shirts</a></li>
                    <li><a href="MenPants.html" class="dropdown-item a-text-color1">Pants</a></li>
                    <li><a href="MenHoodies.html" class="dropdown-item a-text-color1">Hoodies</a></li>
                </ul>
            </li>
            <li class="nav-item">
                <a href="kids.html" class="nav-link a-text-color1">Kids</a>
            </li>
            <li class="nav-item">
                <a href="contact.html" class="nav-link a-text-color1">Contact</a>
            </li>
        </ul>
    </div>
</div>
`



const footer = document.getElementById('footer')
footer.innerHTML = `
<div class="row">
<div class="col-sm-3">
    <div class="row">
        <a href="WomenAll.html" class="footer-heading"><b>Women</b></a>
    </div>
    <div class="row">
        <a href="WomenDresses.html">Dresses</a>
    </div>
    <div class="row">
        <a href="WomenPants.html">Pants</a>
    </div>
    <div class="row">
        <a href="WomenSkirts.html">Shirts</a>
    </div>
</div>
<div class="col-sm-3">
    <div class="row">
        <a href="MenAll.html" class="footer-heading"><b>Men</b></a>
    </div>
    <div class="row">
        <a href="MenShirts.html">Shirts</a>
    </div>
    <div class="row">
        <a href="MenPants.html">Pants</a>
    </div>
    <div class="row">
        <a href="MenHoodies.html">Hoodies</a>
    </div>
</div>
<div class="col-sm-3">
    <div class="row">
        <a href="kids.html" class="footer-heading"><b>Kids</b></a>
    </div>
</div>
<div class="col-sm-3">
    <div class="row">
        <a href="#" class="footer-heading"><b>Links</b></a>
    </div>
    <div class="row">
        <a href="index.html">Home</a>
    </div>
    <div class="row">
        <a href="login.html">Login</a>
    </div>
    <div class="row">
        <a href="contact.html">Contact</a>
    </div>
</div>
</div>
<hr class="line-divider">
<div class="copyright-section">
<p class="copyright-text">Copyright ©Ecommerce 2023-24</p>
</div> 
`