// script.js

document.addEventListener("DOMContentLoaded", function() {
  // Initialize ScrollMagic controller
  var controller = new ScrollMagic.Controller();

  // Create a scene for each photo
  document.querySelectorAll('.photo').forEach(function(photo) {
    // Create a Draggable instance for each photo
    var draggable = Draggable.create(photo, {
      type: "x,y",
      edgeResistance: 0.65,
      bounds: "#portfolio", // Adjust the bounds based on your layout
    });

    // Create a scene for the draggable photo
    new ScrollMagic.Scene({
      triggerElement: photo,
      triggerHook: 0.5, // Adjust triggerHook based on when you want the draggable effect to start
      duration: "100%", // Adjust duration based on how far you want the photo to be draggable
    })
    .setTween(gsap.to(photo, { x: "+=300", y: "+=100" })) // Adjust the values for the desired movement
    .addTo(controller);
  });
});

// script.js

// script.js

var slideIndex1 = 0;
var slideIndex2 = 0;

function showNextSlide(slideshowIndex) {
    var slides;

    if (slideshowIndex === 1) {
        slides = document.getElementById("slideshow1").getElementsByClassName("mySlides");
        slideIndex1++;

        if (slideIndex1 >= slides.length) {
            slideIndex1 = 0;
        }

        for (var i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }

        slides[slideIndex1].style.display = "block";
    } else if (slideshowIndex === 2) {
        slides = document.getElementById("slideshow2").getElementsByClassName("mySlides");
        slideIndex2++;

        if (slideIndex2 >= slides.length) {
            slideIndex2 = 0;
        }

        for (var j = 0; j < slides.length; j++) {
            slides[j].style.display = "none";
        }

        slides[slideIndex2].style.display = "block";
    }
}


                    // JavaScript to handle the popup gallery
                    document.getElementById('photo9').addEventListener('click', function () {
                        document.getElementById('popup-gallery').classList.add('active');
                    });

                    document.getElementById('popup-gallery').addEventListener('click', function (e) {
                        if (e.target.classList.contains('popup-gallery')) {
                            this.classList.remove('active');
                        }
                    });
