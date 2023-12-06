<script>
import Swiper from '../../node_modules/swiper/swiper-bundle';


export default {
  mounted() {
    this.$nextTick(() => {
      // Initialize Swiper when the component is mounted
      this.swiper = new Swiper('.swiper-container', {
        slidesPerView: 1,
        autoplay: {
          delay: 8000,
          disableOnInteraction: false,
        },
        loop: true, // Enable continuous loop
      });
    });
  },
  beforeDestroy() {
    // Destroy Swiper when the component is destroyed to avoid memory leaks
    if (this.swiper) {
      this.swiper.destroy();
      this.swiper = null;
    }
  },
};
</script>

<template>
    
    <section id="main-slider">

        <div class="swiper-container">
            <div class="swiper-wrapper">
                <!-- Your slides go here -->
                <div class="swiper-slide">
                    
                    <div class="item">
                        <img src="../../image/slider/bg1.jpg">
                    </div><!-- item-->

                </div>
                <div class="swiper-slide">

                    <div class="item">
                        <img src="../../image/slider/bg2.jpg">
                    </div>
                    <!-- item -->

                </div>
                <div class="swiper-slide">

                    <div class="item">
                        <div class="video-container">
                            <video autoplay muted loop id="myVideo" style="background-size: cover !important;">
                                <source src="../../image/slider/Construction Company Website Template.mp4" type="video/mp4">
                            </video>
                        </div>
                    </div>
                    <!-- item -->

                </div>
                <!-- Add more slides as needed -->
            </div>

        </div>
    </section><!--/ main-slider section end/-->


</template>

<style scoped>
 @import '../../node_modules/swiper/swiper-bundle.css';
</style>