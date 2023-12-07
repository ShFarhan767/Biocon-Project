<script setup>
const footerData = {
    sections: [
        {
            title: "Company",
            link: "#",
            menuItems: [
                "About Us",
                "Contact Us",
                "Our Services",
                "Privacy Policy",
                "Terms & Condition",
            ],
        },
        {
            title: "Quick Links",
            link: "#",
            menuItems: [
                "About Us",
                "Contact Us",
                "Our Services",
                "Privacy Policy",
                "Terms & Condition",
            ],
        },
    ],
};


</script>

<template>
    
     <!-- Footer Start -->
    <div class="container-fluid bg-dark text-white-50 footer wow fadeIn" data-wow-delay="0.1s">
        <div class="container py-5">
            <div class="row g-5">
                <div v-for="menu , index in footerData.sections" :key="index" class="col-lg-3 col-md-6 footer-title">
                    <h5 class="text-white mb-4">{{ menu.title }}</h5>

                    <a v-for="(menuItem, itemIndex) in menu.menuItems" :key="itemIndex" class="btn btn-link text-white-50" :href="menu.link">
                        {{ menuItem }}
                    </a>
                </div>
        
                <div class="col-lg-3 col-md-6 footer-title">
                    <h5 class="text-white mb-4">Contact</h5>
                    <p class="mb-2"><i class="fa fa-map-marker-alt me-3"></i> South Banasree , Dhaka-1219</p>
                    <p class="mb-2"><i class="fa fa-phone-alt me-3"></i> +88028100024</p>
                    <p class="mb-2"><i class="fa fa-envelope me-3"></i> info@bioconbd.com</p>
                    <div class="d-flex pt-2">
                        <a class="btn btn-outline-light btn-social" href=""><i class="fab fa-twitter"></i></a>
                        <a class="btn btn-outline-light btn-social" href=""><i class="fab fa-facebook-f"></i></a>
                        <a class="btn btn-outline-light btn-social" href=""><i class="fab fa-youtube"></i></a>
                        <a class="btn btn-outline-light btn-social" href=""><i class="fab fa-linkedin-in"></i></a>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6 footer-title">
                    <h5 class="text-white mb-4">Our Project</h5>
                    <img src="../../image/25c50a6c-11ee-452b-a6a3-2b9fc3190df3.jpg" alt="">
                </div>
            </div>
        </div>
        <div class="container">
            <div class="copyright">
                <div class="row">
                    <div class="col-md-6 text-center text-md-start mb-3 mb-md-0">
                        &copy; <a class="border-bottom" href="#">doofazit.com</a>, All Right Reserved. 
                        
                        Designed By <a class="border-bottom" href="https://htmlcodex.com">Doofaz IT</a>
                    </div>
                    <div class="col-md-6 text-center text-md-end">
                        <div class="footer-menu">
                            <a href="">Home</a>
                            <a href="">Cookies</a>
                            <a href="">Help</a>
                            <a href="">FQAs</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- Footer End -->

</template>

<style>
.footer-title img{
    width: 100%;
    border: 3px solid #100d74;
    height: 200px;
}
</style>