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
                <img src="../../image/slider/bg1.jpg" alt="Image 1">
            </div>

            <div class="item">
                <img src="../../image/slider/bg2.jpg" alt="Image 2">
            </div>

            <div class="item">
                <div class="video-container">
                    <video autoplay muted loop id="myVideo" style="background-size: cover;">
                        <source src="../../image/slider/Construction Company Website Template.mp4" type="video/mp4">
                    </video>
                </div>
            </div>
        </div>

    </section><!--/ main-slider section end/-->


</template>
