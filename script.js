$(document).ready(function()
{
    $(window).scroll(function(){
        if(this.scrollY>20)
        {
            $('.navbar').addClass("sticky");
        }
        else{
            $('.navbar').removeClass("sticky");
        }
    });

    $('.navbar .menu li a').click(function(){
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });

    //toggle navbar
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active")
        //$('.menu-btn i').toggleClass("active")
    });

    ///typing animate
    var typed = new Typed(".typing",{
        strings: ["Teacher","Web Developer","Web Designer","Software Tester","Photographer"],
        typeSpeed:100,
        backSpeed:60,
        loop:true


    });

    var typed = new Typed(".typing-2", {
        strings: ["Teacher","Web Developer","Web Designer","Software Tester","Photographer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    //carousel
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive:{
            0:{
                items:1,
                nav:false
            },
            600:{
                items:2,
                nav:false
            },
            1000:{
                items:3,
                nav:false
            }
        }
    });
});
