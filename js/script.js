function openModal() {
    document.getElementById("myModal").style.display = "block";
}

function closeModal() {
    document.getElementById("myModal").style.display = "none";
}

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    if (slides.length > 0) {
        slides[slideIndex - 1].style.display = "block";
    }
}

function plusSlidesKey(oKeyEvent) {
    console.log(oKeyEvent.keyCode);
    if (oKeyEvent.key === 'ArrowRight') {
        plusSlides(1);
    }
    else if (oKeyEvent.key === 'ArrowLeft') {
        plusSlides(-1);
    }
}

// Reviews slider
$(".reviews .owl-carousel").owlCarousel({
    autoplayTimeout: 3000,
    loop: true,
    margin: 0,
    nav: true,
    center: true,
    autoplay: true,
    dots: false,
    smartSpeed: 1200,
    navText: [
        '<i class="fa fa-angle-left"></i>',
        '<i class="fa fa-angle-right"></i>'
    ],
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 2
        },
        750: {
            items: 2
        },
        1980: {
            items: 3
        }
    }
});

$("section").addClass("wow fadeIn");

if (!(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent))) {
    new WOW().init();
}