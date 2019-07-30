$(document).ready(function(){
    $(".collapse.show").each(function(){
        $(this).prev(".card-header").find(".far").addClass("fa-chevron-up").removeClass("fa-chevron-down");
    });
    $(".collapse").on('show.bs.collapse', function(){
           $(this).prev(".card-header").find(".far").removeClass("fa-chevron-down").addClass("fa-chevron-up");
       }).on('hide.bs.collapse', function(){
           $(this).prev(".card-header").find(".far").removeClass("fa-chevron-up").addClass("fa-chevron-down");
       });

      $('#owl-about').owlCarousel({
          margin:20,
          nav:true,
          dots: true,
          responsive:{
              0:{
                  items:1,
                  nav:true
              },
              500:{
                  items:2,
                  nav:true
              },
              800:{
                  items:3,
                  nav:true
              },
              1350:{
                  items:4,
                  nav:true
              }
          }
      });
  $( "#owl-about .owl-prev").html('<img src="/static/homecare/images/arrow.png">');
  $( "#owl-about .owl-next").html('<img src="/static/homecare/images/arrow2.png">');

  $('#owl-awards').owlCarousel({
      margin:10,
      dots:true,
      responsive:{
          0:{
              items:1
          },
          600:{
              items:2
          },
          1000: {
              items:3
          }
      }
  });
  $('.sidebarmenu').click(function(){
      $(".st-container").animate({"right":"0px"}, "slow");
  });
  $('.close').click(function(){
      $(".st-container").animate({"right":"-450px"}, "slow");
  });
});
