'use strict'
// --------------------header language show box-----------------
let languageButton = document.querySelector('.language-button');
let flagDropdown = document.querySelector('.flag-dropdown');
languageButton.addEventListener('click',function(e){
    e.stopPropagation();
    if (flagDropdown.style.display === "none") {
        flagDropdown.style.display = "block";
      } else {
        flagDropdown.style.display = "none";
      }
})

document.addEventListener('click',function(){
    if (flagDropdown.style.display === "block") {
        flagDropdown.style.display = "none";
      }
})


// jquery codes

$(function(){
  //---------------- banner slide js-------------------
    $('.banner-slick').slick({
        prevArrow : '.arrow_prev',
        nextArrow : '.arrow_next',
        infinite: true,
        autoplay: true,
        autoplaySpeed: 2000,
        dots: false,
    });
  //---------------- Shop slide js-------------------
    $('.asxox-shop-row').slick({
      prevArrow : '.shop-slide-prev',
      nextArrow : '.shop-slide-next',
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 3,
      autoplay: false,
      autoplaySpeed: 2000,
      dots: false,
    });
    //---------------- add to cart header scroll disable-------------------
    $('.add-to-cart-item-scroll,.addToCartDropdown').bind('mousewheel DOMMouseScroll', function(e) {
      var scrollTo = null;
  
      if (e.type == 'mousewheel') {
          scrollTo = (e.originalEvent.wheelDelta * -1);
      }
      else if (e.type == 'DOMMouseScroll') {
          scrollTo = 40 * e.originalEvent.detail;
      }
      if (scrollTo) {
          e.preventDefault();
          $(this).scrollTop(scrollTo + $(this).scrollTop());
      }
    });

    // ----------------home banner backdrop jq----------------
    $('.banner-categories').mouseenter(function(){
      $('body').addClass('cateMask');
      $(this).addClass("zIndex");
    })
    $('.banner-categories').mouseleave(function(){
      $('body').removeClass('cateMask');
      $(this).removeClass("zIndex");
    })

    //---------------- Show topest button-------------------
    let screenHeight = $(window).height();
    $(window).scroll(function(){
      let scrollTop = $(this).scrollTop();
    console.log(scrollTop)
      if(scrollTop > screenHeight/4){
        $('.topest-button').addClass('topest-button-show');
      }else{
        $('.topest-button').removeClass('topest-button-show');
      }
    })


})


// Add To Cart Hover Body Scroll Hidden
// let preventScrollingEl = document.querySelector(".addToCartDropdown");
// preventScrollingEl.addEventListener('mousewheel', preventScrolling, {passive: false});
// preventScrollingEl.addEventListener('DOMMouseScroll', preventScrolling, {passive: false});

// function preventScrolling(event) {
//   var scrollTo = null;

//   if (event.type == 'mousewheel') {
//     scrollTo = (event.wheelDelta * -1);
//   } else if (event.type == 'DOMMouseScroll') {
//     scrollTo = 40 * event.detail;
//   }

//   if (scrollTo) {
//     event.preventDefault();
//     $(this).scrollTop(scrollTo + $(this).scrollTop());
//   }
// }