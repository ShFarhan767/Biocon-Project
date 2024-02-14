<script setup>
$(document).ready(function () {

    $(".filter-button").click(function () {
        var value = $(this).attr('data-filter');

        if (value == "all") {
            //$('.filter').removeClass('hidden');
            $('.filter').show('1000');
        }
        else {
            //            $('.filter[filter-item="'+value+'"]').removeClass('hidden');
            //            $(".filter").not('.filter[filter-item="'+value+'"]').addClass('hidden');
            $(".filter").not('.' + value).hide('3000');
            $('.filter').filter('.' + value).show('3000');

        }
    });

    if ($(".filter-button").removeClass("active")) {
        $(this).removeClass("active");
    }
    $(this).addClass("active");

});
</script>

<template>

    <div class="fh5co-page-title">
		<div class="overlay"></div>
			<div class="container">
				<div class="row">
					<div class="col-md-12 animate-box">
					<h1><span class="colored">Project</span> </h1>
				</div>
			</div>
		</div>
	</div>

        <div class="container">
            <div class="row">
                <div align="center">
                    <button class="btn btn-default filter-button" data-filter="all">All</button>
                    <button class="btn btn-default filter-button" data-filter="hdpe">3 Katha</button>
                    <button class="btn btn-default filter-button" data-filter="sprinkle">5 katha</button>
                    <button class="btn btn-default filter-button" data-filter="7-katha">7 katha</button>
                    <button class="btn btn-default filter-button" data-filter="10-katha">10 katha</button>
                </div>
                <br />

                <div class="gallery_product col-lg-4 col-md-4 col-sm-4 col-xs-6 filter hdpe">
                    <img src="../../image/467a95003f075cd56e06ce6d20720b51.jpg" class="img-responsive">
                </div>

                <div class="gallery_product col-lg-4 col-md-4 col-sm-4 col-xs-6 filter 10-katha">
                    <img src="../../image/0192020_3-katha-land-for-sale-in-gazipur.jpeg" class="img-responsive">
                </div>

                <div class="gallery_product col-lg-4 col-md-4 col-sm-4 col-xs-6 filter 7-katha">
                    <img src="../../image/sunvalley-abashon-photo-gallery-thumb-16.jpg" class="img-responsive">
                </div>
                <div class="gallery_product col-lg-4 col-md-4 col-sm-4 col-xs-6 filter sprinkle">
                    <img src="../../image/593f0f83ae52b75663d9c88ae96787d4.jpg" class="img-responsive">
                </div>

                <div class="gallery_product col-lg-4 col-md-4 col-sm-4 col-xs-6 filter 7-katha">
                    <img src="../../image/professional-management.jpg" class="img-responsive">
                </div>
                <div class="gallery_product col-lg-4 col-md-4 col-sm-4 col-xs-6 filter hdpe">
                    <img src="../../image/b.jpg" class="img-responsive">
                </div>

                <div class="gallery_product col-lg-4 col-md-4 col-sm-4 col-xs-6 filter 7-katha">
                    <img src="../../image/1803ac738b3f2f0691bdd7b550b4743f.jpeg" class="img-responsive">
                </div>

                <div class="gallery_product col-lg-4 col-md-4 col-sm-4 col-xs-6 filter hdpe">
                    <img src="../../image/e4461bd84991eff58199618793570ffe.jpg" class="img-responsive">
                </div>

                <div class="gallery_product col-lg-4 col-md-4 col-sm-4 col-xs-6 filter 10-katha">
                    <img src="../../image/0190837_plot-at-purbachal-land-project-navana-highland.jpeg" class="img-responsive">
                </div>

                <div class="gallery_product col-lg-4 col-md-4 col-sm-4 col-xs-6 filter 7-katha">
                    <img src="../../image/sunvalley-abashon-photo-gallery-7.jpg"
                        class="img-responsive">
                </div>
                <div class="gallery_product col-lg-4 col-md-4 col-sm-4 col-xs-6 filter hdpe">
                    <img src="../../image/cheap-price-plot-in-Bashundhara-Residential-Area-Red-Bricks-BD-525x328.jpg"
                        class="img-responsive">
                </div>
                <div class="gallery_product col-lg-4 col-md-4 col-sm-4 col-xs-6 filter 7-katha">
                    <img src="../../image/cheap-price-plot-in-Bashundhara-Residential-Area-Red-Bricks-BD-525x328.jpg"
                        class="img-responsive">
                </div>

                <div class="gallery_product col-lg-4 col-md-4 col-sm-4 col-xs-6 filter hdpe">
                    <img src="../../image/plot-price-in-baridhara-bashundhara-housing-project.webp" class="img-responsive">
                </div>

                <div class="gallery_product col-lg-4 col-md-4 col-sm-4 col-xs-6 filter sprinkle">
                    <img src="../../image/commercial-plots-in-purbachal.jpg" class="img-responsive">
                </div>
                <div class="gallery_product col-lg-4 col-md-4 col-sm-4 col-xs-6 filter 10-katha">
                    <img src="../../image/0181391_land-for-sale-at-purbachal-marine-city.jpeg" class="img-responsive">
                </div>

                <div class="gallery_product col-lg-4 col-md-4 col-sm-4 col-xs-6 filter sprinkle">
                    <img src="../../image/fff29f19c3215f9d2c1f0aef157a5369.jpg" class="img-responsive">
                </div>
                <div class="gallery_product col-lg-4 col-md-4 col-sm-4 col-xs-6 filter 10-katha">
                    <img src="../../image/415967680M-1680591782036.webp" class="img-responsive">
                </div>

                <div class="gallery_product col-lg-4 col-md-4 col-sm-4 col-xs-6 filter sprinkle">
                    <img src="../../image/7c134778-03be-4780-9cc6-38f4192b9abe-525x328.jpg" class="img-responsive">
                </div>

                <div class="gallery_product col-lg-4 col-md-4 col-sm-4 col-xs-6 filter hdpe">
                    <img src="../../image/project-bg.jpeg" class="img-responsive">
                </div>
                <div class="gallery_product col-lg-4 col-md-4 col-sm-4 col-xs-6 filter 10-katha">
                    <img src="../../image/321729931_712203493865186_1251311082900962360_n.jpg" class="img-responsive">
                </div>

                <div class="gallery_product col-lg-4 col-md-4 col-sm-4 col-xs-6 filter sprinkle">
                    <img src="../../image/e978864c48627c2dce53fc92e595ea09.jpg" class="img-responsive">
                </div>
                <div class="gallery_product col-lg-4 col-md-4 col-sm-4 col-xs-6 filter 7-katha">
                    <img src="../../image/76c52bf9b294c55a8f246d6d78f8facd.jpeg" class="img-responsive">
                </div>

                <div class="gallery_product col-lg-4 col-md-4 col-sm-4 col-xs-6 filter sprinkle">
                    <img src="../../image/9ffacc67bee7d7cc1cfa26d82aa89332.jpg" class="img-responsive">
                </div>
                <div class="gallery_product col-lg-4 col-md-4 col-sm-4 col-xs-6 filter 10-katha">
                    <img src="../../image/45588447_705082059869196_7815960551590199296_n.jpg" class="img-responsive">
                </div>
            </div>
        </div>
</template>

<style scoped>
.animate-box span{
    color: #ffffff;
    text-transform: uppercase;
    font-weight: 600;
}
.fh5co-page-title{
	background-image: url(../../image/project-bg.jpeg);
	background-size: cover;
	top: -20px; 
	height: 150px;
}
.img-responsive {
    display: block;
    height: 200px;
    width: 100%;
}

.gallery-title {
    font-size: 36px;
    color: #42B32F;
    text-align: center;
    font-weight: 500;
    margin-bottom: 70px;
}

.gallery-title:after {
    content: "";
    position: absolute;
    width: 7.5%;
    left: 46.5%;
    height: 45px;
    border-bottom: 1px solid #5e5e5e;
}

.filter-button {
    font-size: 18px;
    border: 1px solid #42B32F;
    border-radius: 5px;
    text-align: center;
    color: #42B32F;
    margin-bottom: 30px;

}

.filter-button:hover {
    font-size: 18px;
    border: 1px solid #42B32F;
    border-radius: 5px;
    text-align: center;
    color: #ffffff;
    background-color: #42B32F;

}

.btn-default:active .filter-button:active {
    background-color: #42B32F;
    color: white;
}

.port-image {
    width: 100%;
}

.gallery_product {
    margin-bottom: 15px;
    margin: -7px;
    margin-bottom: 20px;
}
.row {
    margin-right: -15px;
    margin-left: 25px;
}
</style>