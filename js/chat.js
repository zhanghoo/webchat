$(function() {
  var mySwiper = new Swiper('.swiper-container',{
    direction: 'vertical',
    slidesPerView: 'auto',
    freeMode: true,
    mousewheel: true,
    roundLengths: true,
    observer: true,
    observeParents: true,
    scrollbar: {
      el: '.swiper-scrollbar',
      hide: true,
    },
  });
})
