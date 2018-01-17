$(function() {
  var mySwiper = new Swiper('.swiper-container',{
    direction: 'vertical',
    freeMode: true,
    autoHeight: false,
    roundLengths: true,
    observer: true,
    observeParents: true,
    scrollbar: {
      el: '.swiper-scrollbar',
      hide: true,
    },
  });
})
