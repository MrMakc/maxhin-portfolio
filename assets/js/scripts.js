let scrollText = $('.outline');
let posText = $('.outline').width();

$(window).scroll(function() {

    let pos = $(window).scrollTop();

    if(pos <= posText){
        scrollText.css('margin-left', `-${pos/1}px`);
    }

});

var splide = new Splide( '.splide', {
    type   : 'loop',
    padding: '10rem',
    autoplay: true
} );

splide.mount();
