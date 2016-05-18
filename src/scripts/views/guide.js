var guideTpl = require('../tpl/guide.string');

SPA.defineView('guide',{
  html:guideTpl,

  // plugins:[
  //   'delegated'
  // ],

  bindEvents:{
    beforeShow:function () {
      // swiper  guide
      var bo = document.body;
      var mySwiper = new Swiper ('.swiper-container', {
        direction: 'horizontal',
        loop: false,
        width:$(bo).width(),
        height:$(bo).height(),
        // 如果需要分页器
        pagination: '.swiper-pagination',
      });
      // console.log(mySwiper.height);
    }
  }
});
