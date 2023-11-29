<script setup>

$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
        items: 1,
        loop: true,
        autoplay: true,
        autoplayTimeout: 8000, // Set the autoplay speed in milliseconds
        autoplayHoverPause: true // Pause autoplay when hovering over the carousel
        // Add more options as needed
    });
});


</script>

<template>
    
    <section id="main-slider">
        <div class="owl-carousel">
            <div class="item">
                <div class="video-container">
                    <video autoplay muted loop id="myVideo" style="background-size: cover !important;">
                        <source src="../../image/slider/Construction Company Website Template.mp4" type="video/mp4">
                    </video>
                </div>
                <div class="slider-inner">
                    <div class="container">
                        <div class="row">
                            <div class="col-sm-6">
                                <div class="carousel-content">
                                    <h2><span>Lively</span> Ambience</h2>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div><!-- /.item -->
            <div class="item" style="background-image: url(../../image/slider/bg1.jpg);">
                <div class="slider-inner">
                    <div class="container">
                        <div class="row">
                            <div class="col-sm-6">
                                <div class="carousel-content">
                                    <h2><span>Simply</span> Amazing Theme</h2>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div><!-- item-->
            <div class="item"  style="background-image: url(../../image/slider/bg2.jpg);">
                <div class="slider-inner">
                    <div class="container">
                        <div class="row">
                            <div class="col-sm-6">
                                <div class="carousel-content">
                                    <h2><span>Simply</span> Amazing Theme</h2>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- item -->

        </div><!--/ carousel -->
    </section><!--/ main-slider section end/-->


</template>
