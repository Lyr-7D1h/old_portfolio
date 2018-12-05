let images = [2,3,4,7,10,11,12,13,14,15,16,17,18,20,21,23,24];
let overlay_num = 1;
function slideshow() {
    if(overlay_num === 1 ){
        
        let overlay = $('.overlay');
        rand = images[Math.round(Math.random() * (images.length))].toString();
        overlay.css('background-image', `url('./img/background/${rand}.jpg')`);
        $('.overlay2').fadeOut(2000);
        overlay.fadeIn(2000);

        overlay_num = 2;
    } else {
        
        let overlay = $('.overlay2');
        rand = images[Math.round(Math.random() * images.length)].toString();
        overlay.css('background-image', `url('./img/background/${rand}.jpg')`);
        $('.overlay').fadeOut(2000);
        overlay.fadeIn(2000);
        overlay_num = 1;
    }
}

$(document).ready(function () {
    slideshow();
    setInterval(slideshow,6000);

    setTimeout(() => {
        $('#nav').css('top', '-50px');
    }, 1000);

    $('#nav').on({
        'mouseenter':function(){
            $('#nav').css('top', '0');
        },'mouseleave':function(){
      
            $('#nav').css('top', '-50px');
        }
    });
    $('#title_server').fadeIn(2000);

});
