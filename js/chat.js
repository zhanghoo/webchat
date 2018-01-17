$(function() {
  var mySwiper = new Swiper('.swiper-container',{
    direction: 'vertical',
    freeMode: true,
    autoHeight: true,
    roundLengths: true,
    observer: true,
    observeParents: true,
    scrollbar: {
      el: '.swiper-scrollbar',
      hide: true,
    },
  });
})
