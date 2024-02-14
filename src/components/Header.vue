<script setup>
</script>

<template>
    
    <header id="header">
        <nav id="main-nav" class="navbar navbar-default navbar-fixed-top" role="banner">
            <div class="container">
                <div class="navbar-header">
                    <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target=".navbar-collapse">
                      <span class="sr-only">Toggle navigation</span>
                      <span class="icon-bar"></span>
                      <span class="icon-bar"></span>
                      <span class="icon-bar"></span>
                    </button>
                    <a class="navbar-brand" href="/"><img class="navbar-logo" src="../../image/f34efc20-b144-402d-b81a-2101a75f0f8f.jpg" alt="logo"></a>
                </div>
				
                <div class="collapse navbar-collapse navbar-right">
                    <ul class="nav navbar-nav">
                        <li class="scroll active">
                            <RouterLink class="nav-link" to="/">Home</RouterLink>
                        </li> 
                        <li class="scroll">
                            <RouterLink class="nav-link" to="/about">About</RouterLink>
                        </li>
                        <li class="scroll">
                            <RouterLink class="nav-link" to="/project">Project</RouterLink>
                        </li>
                        <li class="scroll">
                            <RouterLink class="nav-link" to="/Gallery">Gallery</RouterLink>
                        </li>
                        <li class="scroll">
                            <RouterLink class="nav-link" to="/career">Career</RouterLink>
                        </li>
                        <li class="scroll">
                            <RouterLink class="nav-link" to="/contact">Contact</RouterLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        <!-- /navbar section end/ -->

    </header>
</template>

<style>
.container>.navbar-header, .container-fluid>.navbar-header, .container>.navbar-collapse, .container-fluid>.navbar-collapse {
    margin-right: -15px;
    margin-left: -15px;
    background: #fff;
}
 .navbar-header img{
    width: 100%;
 }
 #main-nav.navbar-default .navbar-nav>li>a {
    padding-bottom: 20px;
    font-size: 18px;
}
 @media all and (min-width: 320px) and (max-width: 780px) {
    .navbar-header img {
    width: 90%;
    margin-top: -5px;
}
 #main-nav.navbar-default .navbar-nav>li>a {
    padding-bottom: 20px;
    font-size: 21px;
}
.navbar-default .navbar-nav>li>a {
    color: #777;
    color: #2d3193;
    font-size: 0px;
}
 }
</style>