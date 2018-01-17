// 对Date的扩展，将 Date 转化为指定格式的String
// 月(M)、日(d)、小时(h)、分(m)、秒(s)、季度(q) 可以用 1-2 个占位符， 
// 年(y)可以用 1-4 个占位符，毫秒(S)只能用 1 个占位符(是 1-3 位的数字) 
Date.prototype.Format = function (fmt) { //author: meizz 
  var o = {
    "M+": this.getMonth() + 1, //月份 
    "d+": this.getDate(), //日 
    "h+": this.getHours(), //小时 
    "m+": this.getMinutes(), //分 
    "s+": this.getSeconds(), //秒 
    "q+": Math.floor((this.getMonth() + 3) / 3), //季度 
    "S": this.getMilliseconds() //毫秒 
  };
  if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
  for (var k in o)
    if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
  return fmt;
}

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
  
  $('#btnSend').on('click', function() {
    const input = $('#inputText').val();
    const _date = (new Date()).Format("yyyy-MM-dd hh:mm:ss");
    const _html = `<li class="msg-item">
                    <div class="msg-box mine">
                      <div class="avatar"></div>
                      <div class="msg">
                        <p class="info">${_date}</p>
                        <div class="msg-bubble">${input}</div>
                      </div>
                    </div>
                  </li>`;
    $('#msgList').append(_html);
    mySwiper.scrollbar.updateSize();
    $('#inputText').val('');
  })
})
