// メニュー表示
// (function($) {
//     $(function () {
//         $('#nav-toggle').on('click', function() {
//             $('body').toggleClass('open');
//         });
//     });
// })(jQuery);

$(function(){
  $('#nav-toggle').on('click', function(){
    $('.wrap').toggleClass('open');
  });
  $('#gloval-nav a').on('click', function() {
        $('.wrap').removeClass('open');
    });
}());

// 見出し下線
$(window).on('scroll',function(){
  $(".scrollanimation").each(function(){
    var position = $(this).offset().top;
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll > position - windowHeight + 180){
      $(this).addClass('isActive');
    }
  });
 });

//フェードイン
