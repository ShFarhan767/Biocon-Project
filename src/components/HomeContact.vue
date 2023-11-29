<script setup></script>

<template>
    
    <section id="contact-us">
        <div class="container">
            <div class="section-header">
                <h2 class="section-title text-center wow fadeInDown">Location</h2>
                <p class="text-center wow fadeInDown">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eget risus vitae massa <br> semper aliquam quis mattis quam.</p>
            </div>
        </div>

    </section><!--/#contact-us-->

    <div class="mapouter"><div class="gmap_canvas"><iframe class="gmap_iframe" width="100%" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=1258&amp;height=400&amp;hl=en&amp;q=Safa Green City&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe><a href="https://connectionsgame.org/">Connections NYT</a></div></div>

</template>

<style scoped>
.mapouter{
    position:relative;
    text-align:right;
    width:100%;
    height:400px;
}
.gmap_canvas {
    overflow:hidden;
    background:none!important;
    width:100%;
    height:400px;
}
.gmap_iframe {
    height:400px!important;
}
</style>