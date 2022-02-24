
 // ========================================================================= //
// Scroll to Top Script
// ========================================================================= //
$(document).ready(function () {
  $(window).scroll(function () {
      if ($(this).scrollTop() > 100) {
          $('#scroll').fadeIn();
      } else {
          $('#scroll').fadeOut();
      }
  });
  $('#scroll').click(function () {
      $("html, body").animate({
          scrollTop: 0
      }, 600);
      return false;
  });
});

// $(document).ready(function(){
//     function topFunction() {
//       document.body.scrollTop = 0;
//       document.documentElement.scrollTop = 0;
//     }
  
//     let menu = document.getElementById("menu")
//     let content = document.getElementById("content")
//     let nav = document.getElementById("nav")
//     menu.addEventListener("click", () => {
//         menu.classList.toggle("rotate")
//         content.classList.toggle("contentActive")
//         // 
//         nav.classList.toggle("shadow")
//         content.classList.toggle("shadow")
//     })
// });
 
  // (function() {


  //   gsap.registerPlugin(ScrollTrigger);
  
  //   let revealContainers = document.querySelectorAll(".reveal");
  
  //   revealContainers.forEach((container) => {
  //     let image = container.querySelector("video");
  //     let tl = gsap.timeline({
  //     scrollTrigger: {
  //       trigger: container,
  //       toggleActions: "restart none none reset",
  //     },
  //     });
  
  //     tl.set(container, { autoAlpha: 1 });
  //     tl.from(container, 1.5, {
  //     xPercent: -100,
  //     ease: Power2.out,
  //     });
  //     tl.from(image, 1.5, {
  //     xPercent: 100,
  //     scale: 1.3,
  //     delay: -1.5,
  //     ease: Power2.out,
  //     });
  //   });
  // }());
  
  
  // (function (){
  //   function animateFrom(elem, direction) {
  //     direction = direction || 1;
  //     var x = 0,
  //       y = direction * 100;
  //     if(elem.classList.contains("gs_reveal_fromLeft")) {
  //       x = -100;
  //       y = 0;
  //     } else if (elem.classList.contains("gs_reveal_fromRight")) {
  //       x = 100;
  //       y = 0;
  //     }
  //     elem.style.transform = "translate(" + x + "px, " + y + "px)";
  //     elem.style.opacity = "0";
  //     gsap.fromTo(elem, {x: x, y: y, autoAlpha: 0}, {
  //       duration: 1.25, 
  //       x: 0,
  //       y: 0, 
  //       autoAlpha: 1, 
  //       ease: "expo", 
  //       overwrite: "auto"
  //     });
  //     }
      
  //     function hide(elem) {
  //     gsap.set(elem, {autoAlpha: 0});
  //     }
      
  //     document.addEventListener("DOMContentLoaded", function() {
  //     gsap.registerPlugin(ScrollTrigger);
      
  //     gsap.utils.toArray(".gs_reveal").forEach(function(elem) {
  //       hide(elem); // assure that the element is hidden when scrolled into view
        
  //       ScrollTrigger.create({
  //       trigger: elem,
  //       onEnter: function() { animateFrom(elem) }, 
  //       onEnterBack: function() { animateFrom(elem, -1) },
  //       onLeave: function() { hide(elem) } // assure that the element is hidden when scrolled into view
  //       });
  //     });
  //     });
      
  // }());


 