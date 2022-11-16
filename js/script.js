$(function() {
    $('.text').not('active').hide();
    $('.list ul li').click(function(even) {
        even.preventDefault();
        $('.list ul li').removeClass('active').eq($(this).index()).addClass('active');
        $('.dots').removeClass('active').eq($(this).index()).addClass('active');
        $('.text').removeClass('active').hide().eq($(this).index()).addClass('active').fadeIn(2000);
    })
})