$(window).resize(function(){
    var width = $(window).width();
    var height = $(window).height();
    if(width<=1024 && width>768){
        $('.content__right-row--item').removeClass('col-xs');
        $('.content__right-row--item').removeClass('col-sm');
        $('.content__right-row--item').removeClass('col-md');
        $('.content__right-row--item').removeClass('col-lg');
    	$('.content__right-row--item').addClass('col-sm-5');

    }else{
        if(width<=768){
            $('.content__right-row--item').removeClass('col-xs');
            $('.content__right-row--item').removeClass('col-sm');
            $('.content__right-row--item').removeClass('col-md');
            $('.content__right-row--item').removeClass('col-lg');
            $('.content__right-row--item').addClass('col-sm-10');

            $('.footer__info-end--nav').removeClass('.d-flex');
        }
    }
});
