let hide = (el) => {
    $(el).hide();
}

// let el_in_view = (el) => {
//     return $(window).scrollTop() < $(el).offset().top + $(el).height() ;
// };



let animated = ['.title','.mouse_scroll', '.update_block']

animated.forEach(el => {
    hide(el);
})

var no_shake = [];

$(document).ready(function () {
    $('.title').fadeIn(3000, () => {
    });
    $('.mouse_scroll').fadeIn(4000);
    $('.update_block').fadeIn();

    $(window).scroll(function(){
        // console.log($(window).scrollTop());
        if ($(window).scrollTop() > 0){
            $('.mouse_scroll').fadeOut();
        }
        if ($(window).scrollTop() == 0) {
            $('.mouse_scroll').fadeIn();
        }
        if ($(window).scrollTop() > 200){
            $('.title').fadeOut();
        }
        if ($(window).scrollTop() < 200) {
            $('.title').fadeIn();
        }
        // $(".important").each(function(i, el) {
        //     if (el_in_view(el)) {
        //         let may_shake = true;
        //         no_shake.forEach(element => {
        //             if (el == element) {
        //                 may_shake = false;
        //             }
        //         }) 
        //         console.log(may_shake);
        //         if (may_shake) {
        //             $(el).effect('shake', {distance: '10'});
        //             no_shake.push(el);
        //         }
        //     }
        // });
    });

    console.log('Client js loaded');
});