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
}());

// 見出し下線
$(window).on('scroll',function(){

  $(".JS_ScrollAnimationItem").each(function(){
    var position = $(this).offset().top;
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll > position - windowHeight + 140){
      $(this).addClass('isActive');
    }
  });
 });

//フェードイン
