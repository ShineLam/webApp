var indexTpl = require('../tpl/index.string');
// document.body.innerHTML += indexTpl;

SPA.defineView('index',{
  html:indexTpl,

  bindEvents:{
    beforeShow:function () {
      // swiper  banner
      var mySwiper = new Swiper ('.swiper-container', {
        direction: 'horizontal',
        loop: true,
        autoplay : 5000,
        // 如果需要分页器
        pagination: '.swiper-pagination',
      });
    }
  }
});
