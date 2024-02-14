<script setup>
</script>

<template>
    
    <div class="fh5co-page-title">
		<div class="overlay"></div>
			<div class="container">
				<div class="row">
					<div class="col-md-12 animate-box">
					<h1><span class="colored">Contact</span> Us</h1>
				</div>
			</div>
		</div>
	</div>

    <!-- Contact Section -->
        <section id="contact">
            <div class="container">
                <div class="row">
                    <div class="right-area col-md-7 ">
                        <div class="col-md-6 list-box">
                                <ul>
                                    <div class="col-md-6">
                                        <li><a href="#"><i class="fa-solid fa-phone"></i> </a> <span style="color: #4CB648; font-size: 22px;">Call Us</span> <br> <span style="margin-left: 35px;"> +880 222 331 0649 </span>
                                              <br>    <span style="margin-left: 35px;">01967 666 441</span> </li>
                                    </div>
                                    <div class="col-md-6">
                                        <li><a href="#"><i class="fa-solid fa-envelope"></i> </a> <span style="color: #4CB648; font-size: 22px;">Email </span> <br> <span style="margin-left: 35px;"> bioconbd2012@gmail.com</span>
                                            <br><span style="margin-left: 35px;">info@bioconbd.com</span> </li>
                                    </div>
                                    <div class="col-md-12">
                                        <li> <a href="#"><i class="fa-solid fa-location-dot"></i> </a> <span style="color: #4CB648; font-size: 22px;">Office Address </span> <br> <span style="margin-left: 35px;">  3/13 (1st Floor), Block# F, Lalmatia, Mohammadpur,Dhaka-1207</span></li>
                                    </div>
                                </ul>
                        </div>

                        <div class="col-md-7 map-area">
                            <iframe class="gmap_iframe" width="100%" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3652.246303264255!2d90.3155233753356!3d23.738594678678435!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755bfc005d6171d%3A0x52d247c0db1d4ac3!2z4Ka44Ka-4Kar4Ka-IOCml-CnjeCmsOCngOCmqCDgprjgpr_gpp_gpr8!5e0!3m2!1sbn!2sbd!4v1702105635782!5m2!1sbn!2sbd" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                        </div>

                    </div>

                    <div class="contactArea col-md-5">
                            <h2 class="Contact text-uppercase mt-3">contact Us</h2>

                            <hr style="width: 80%; border: 1px solid #4CB648;">

                            <form action="">
                            <div class="row">
                                <div class="col-lg-6">
                                    <div class="form-group">
                                        <input type="text" class="form-control mt-2" placeholder="First-Name" required>
                                    </div>
                                </div>
                                <div class="col-lg-6">
                                    <div class="form-group">
                                        <input type="text" class="form-control mt-2" placeholder="Last-Name" required>
                                    </div>
                                </div>
                                <div class="col-lg-6">
                                    <div class="form-group">
                                        <input type="email" class="form-control mt-2" placeholder="Email" required>
                                    </div>
                                </div>
                                <div class="col-lg-6">
                                    <div class="form-group">
                                        <input type="number" class="form-control mt-2" placeholder="Phone" required>
                                    </div>
                                </div>
                                <div class="col-12">
                                    <div class="form-group">
                                        <textarea class="form-control" id="exampleFormControlTextarea1" placeholder="Address" rows="3" required></textarea>
                                    </div>


                                </div>
                            </div>
                            </form>
                            <div class="icon text-white col-6">
                            </div>
                            <button type="btn btn">Send</button>
                    </div>
                         
                </div>
            </div>
        </section>
    <!-- Contact Section -->

</template>

<style scoped>
.fh5co-page-title{
	background-image: url(../../image/contact-bg.jpg);
	background-size: cover;
	top: -20px; 
	height: 150px;
}
button{
    border: 2px solid #97e5a9;
    border-radius: 50px;
    background: #92e049;
    color: #100d74;
    font-size: 20px;
    font-weight: 500;
    padding: 5px 50px;
    margin-left: 35%;
}
#contact{
    margin-top: -20px;
    background: #f6f9fe;
    padding: 10px 10px;
}
.list-box{
    width: 100%;
    border-radius: 5px;
    height: 210px;
    box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 16px;
    background: rgb(255, 255, 255);
}
.list-box ul{
    margin: 15px;
    list-style: none;
}
.list-box ul li{
    color: #100d74;
    margin-left: -60px;
    padding: 10px 18px;
    font-size: 16px;
    float: left;
}
.list-box ul li a i{
    background: linear-gradient(to right top, #abfcaa, #d1fe92, #ebfb89, #f9f97f, #f8e032);
    padding: 8px 8px;
    border: 1px solid #bec7fa;
    color: #185ab6;
    border-radius: 50px;
}
.list-box ul li a i:hover{
    color: #564fab;
}
.map-area{
    margin-top: 25px;
    width: 100%;
    height: 310px;
    border-radius: 10px;
    box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 16px;
    background: rgb(255, 255, 255);
}
.gmap_iframe{
    width: 100%;
    border-radius: 10px;
    margin-top: 12px;
    height: 285px;
}
.Contact{
    font-weight: 700;
}
.form-check-label{
    margin-left: -5px;
}
textarea.form-control{
    height: 65px;
    width: 85%;
    margin-left: 33px;
}
input[type="radio"], input[type="checkbox"] {
    margin: 10px 15px 0px;
}
.btn {
    margin-left: 15px;
}
.contactArea{
    z-index: 10;
    border-radius: 20px;
    width: 35%;
    margin-left: 40px;
    margin-top: -100px;
    height: 330px;
    padding: 5px 0px;
    background-image: linear-gradient(to right top, #ff726b, #ff8a5b, #ffa64e, #ffc248, #f4de4e);
}
.contactArea h2{
    color: #100d74;
    text-align: center;
    padding: 0px 10px;
}
.contactArea h2:hover{
    color: white;
    transition: 3s;
}
.form-control {
    margin-left: 17px;
    display: block;
    width: 81%;
    height: 34px;
    padding: 15px 5px;
    font-size: 14px;
    line-height: 1.42857143;
    color: black;
    font-size: 16px;
    border: 1px solid #fff !important;
    background-color: #fff;
    background: transparent;
    border: 1px solid #ccc;
    border-radius: 4px;
}
input::placeholder{
    color: #100d74;
    margin-left: 15px !important;
}
textarea::placeholder{
    color: #100d74;
}

@media all and (min-width: 320px) and (max-width: 780px) {
.list-box{
    width: 100%;
    border-radius: 5px;
    height: 320px;
    box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 16px;
    background: rgb(255, 255, 255);
}
.list-box ul li[data-v-ddc399f4] {
    color: #100d74;
    width: 101%;
    margin-left: -70px;
    padding: 0px 0px;
    font-size: 12px;
    float: left;
}
.map-area{
    margin-top: 25px;
    width: 100%;
    height: 310px;
    border-radius: 10px;
    box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 16px;
    background: rgb(255, 255, 255);
}
.contactArea{
    border-radius: 20px;
    width: 90%;
    margin-left: 20px;
    margin-top: 20px;
    height: 400px;
    padding: 0px 0px;
    background-image: linear-gradient(to right top, #ff726b, #ff8a5b, #ffa64e, #ffc248, #f4de4e);
}
.contactArea h2[data-v-ddc399f4] {
    color: #100d74;
    text-align: center;
    margin-top: 17px !important;
    padding: 0px 0px;
}
textarea.form-control{
    height: 65px;
    width: 75%;
    margin-left: 33px;
}
button[data-v-ddc399f4] {
    border: 2px solid #97e5a9;
    border-radius: 50px;
    background: #92e049;
    color: #100d74;
    font-size: 20px;
    font-weight: 500;
    padding: 5px 50px;
    margin-left: 27%;
}
} 
</style>
