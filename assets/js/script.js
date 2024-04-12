// slick
$('.review').slick({
      prevArrow: $('.un-review__prev'),
      nextArrow: $('.un-review__next'),

    centerMode: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 821,
        settings: {
          arrows: false,
          centerMode: true,
          slidesToShow: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: false,
          autoplay: true,
          autoplaySpeed: 2000,
          slidesToShow: 1
        }
      }
    ]
  });


// scroll-to-top
const toTop = document.querySelector(".un-scroll");

window.addEventListener("scroll", () => {
  if (window.pageYOffset  > 100) {
    toTop.classList.add("active");
  } else {
    toTop.classList.remove("active");
  }
})


// hero animation
var letters = document.querySelectorAll(".tab-pane.fade.show.active .un-hero-car .un-hero-car__container p");


for (var i = 0; i < letters.length; i++) {
  (function(index) {
    setTimeout(function() {
      letters[index].classList.add("blink");
      setTimeout(function() {
        letters[index].classList.remove("blink");
      }, 1000);
    }, 1000 * i);
  })(i);
}


// hide/show

const icons = document.querySelectorAll(".un-tile-h__add");
const tiles = document.querySelectorAll(".un-tile__wrap");

if (icons) {
  icons.forEach((icon, i) => {
    icon.addEventListener("click", () => {
      tiles[i].classList.toggle("show");
      icons[i].classList.toggle("up");
    });
  });
}




// // counter
// let valueDisplays = document.querySelectorAll(".un-counter__num");
// let interval = 4000;

// valueDisplays.forEach((valueDisplay) => {
//     let startValue = 0;
//     let endValue = parseInt(valueDisplay.getAttribute("data-val"));
//     let duration = Math.floor(interval / endValue);
//     let counter = setInterval(function () {
//         startValue += 1;
//         valueDisplay.textContent = startValue;
//         if (startValue == endValue) {
//             clearInterval(counter);
//         }
//     }, duration);
// });