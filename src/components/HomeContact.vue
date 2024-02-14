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

    <div class="mapouter"><div class="gmap_canvas"> <iframe class="gmap_iframe" width="100%" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3652.246303264255!2d90.3155233753356!3d23.738594678678435!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755bfc005d6171d%3A0x52d247c0db1d4ac3!2z4Ka44Ka-4Kar4Ka-IOCml-CnjeCmsOCngOCmqCDgprjgpr_gpp_gpr8!5e0!3m2!1sbn!2sbd!4v1702105635782!5m2!1sbn!2sbd" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe><a href="https://connectionsgame.org/">Connections NYT</a></div></div>

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
#contact-us{
    padding: 45px 0 50px;
    background: #02a89c;
    color: black;
    font-size: 18px;
}
#contact-us h2 {
    color: #303093;
    font-size: 50px;
    font-weight: 600;
}
.section-header .section-title:before {
    content: "";
    position: absolute;
    width: 235px;
    bottom: 0;
    left: 46%;
    margin-left: -70px;
    height: 3px;
    background: #fff;
}
</style>