$(function(){
    var $banner = $('.banner'), $window = $(window);
    var $topDefault = parseFloat( $banner.css('bottom'), 10 );
    $window.on('scroll', function(){
        var $top = $(this).scrollTop();
        $banner.stop().animate( { bottom: -( $top - $topDefault) }, 1000, 'easeOutBack' );
    });

    var $wiBanner = $banner.outerWidth() * 2;
    zindex($('#wrapper').outerWidth());
    $window.on('resize', function(){
        zindex($('#wrapper').outerWidth());
    });
    function zindex(maxWidth){
        if( $window.width() <= maxWidth + $wiBanner ) {
            $banner.addClass('zindex');
        }else{
            $banner.removeClass('zindex');
        }
    }
});
