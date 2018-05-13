$('.carousel').carousel({
  interval: 2000
})

  
  $(window).scroll(function() {
    $(".slideanim").each(function(){
      var pos = $(this).offset().top;
  
      var winTop = $(window).scrollTop();
      if (pos < winTop + 600) {
        $(this).addClass("slide");
      }
    });
  }); 


$(window).scroll(function() {
  $(".slideanim-right").each(function(){
    var pos = $(this).offset().top;

    var winTop = $(window).scrollTop();
    if (pos < winTop + 600) {
      $(this).addClass("slide-right");
    }
  });
});

var sendBg = $("#send-button").mouseover(function(){
  $(this).addClass("send-bg");
  $("#send-button").mouseleave(function(){
    $(this).removeClass("send-bg");
    });
});


$(window).scroll(function() {
  $("background-article, .social-button").each(function(){
    var pos = $(this).offset().top;

    var winTop = $(window).scrollTop();
    if (pos < winTop + 600) {
      $(this).addClass("affix");
    }

    if (pos > winTop + 600)
     $(this).removeClass("affix");
    
    
  });
});


window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
}


// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  
  function goToTop(){
  var goToTop = document.getElementById("myBtn").style.transition = 1.5;}
}
  
  // function animateScroll () { 
  // document.documentElement.scrollTop.style.transition = 0.5;
  // }
  

