
//Initiating Feather Icons
feather.replace()

//Initializing Owl Corousel
$('.clients-corousel').owlCarousel({
    loop:true,
    margin:50,
    autoplay:true,
    autoplayTimeout:8000,
    nav:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})


$('.testimonial-corousel').owlCarousel({
    loop:true,
    margin:30,
    autoplay:true,
    nav:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:3
        }
    }
})

