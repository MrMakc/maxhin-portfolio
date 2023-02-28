let scrollText = $('.outline');
let posText = $('.outline').width();

$(window).scroll(function() {

    let pos = $(window).scrollTop();

    if(pos <= posText){
        scrollText.css('margin-left', `-${pos/2}px`);
    }

});
