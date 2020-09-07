
    $(document).ready(function(){
  //  Counterplugin
        $('.counter').counterUp({
            delay: 10,
            time: 1000
        });
      
        // Lightbox plugin
        $(document).on('click', '[data-toggle="lightbox"]', function(event) {
            event.preventDefault();
            $(this).ekkoLightbox();
        }); 

  var swiper = new Swiper('.swiper-container', {
      effect: 'coverflow',
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: 'auto',
      coverflowEffect: {
        rotate: 60,
        stretch: 0,
        depth: 0,
        modifier: 1,
        slideShadows: true,
      },
      pagination: {
        el: '.swiper-pagination',
      },
    });


// ScroollFunction
        $('.to-top a').click(function(){
          $('html, body').animate({'scrollTop': 0},1000);
          return false;
        });
        $(window).scroll(function(){
          if($(window).scrollTop() > 200){

            $('.to-top a').fadeIn(3000);

          }else{

            $('.to-top a').fadeOut(1000);
          }

        });



        // MixITUP
        var mixer = mixitup('.gallery'); 



        wow = new WOW(
          {
            animateClass: 'animated',
            offset:       100,
            callback:     function(box) {
              console.log("WOW: animating <" + box.tagName.toLowerCase() + ">")
            }
          }
        );
        wow.init();
        document.getElementById('moar').onclick = function() {
          var section = document.createElement('section');
          section.className = 'section--purple wow fadeInDown';
          this.parentNode.insertBefore(section, this);
        };


        
    }); 
    
   
    
