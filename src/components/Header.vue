<script setup>
</script>

<template>
    
    <header id="header">
        <nav id="main-nav" class="navbar navbar-default navbar-fixed-top" role="banner">
            <div class="container">
                <div class="navbar-header">
                    <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                        <span class="sr-only">Toggle navigation</span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                    </button>
                    <a class="navbar-brand" href="index-2.html"><img class="navbar-logo" src="../../image/logo.png" alt="logo"></a>
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
                            <RouterLink class="nav-link" to="/business-segment">Business Segment</RouterLink>
                        </li>
                        <li class="scroll">
                            <RouterLink class="nav-link" to="/corporate">Corporate</RouterLink>
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
        <!--/navbar section end/-->
    </header>

</template>