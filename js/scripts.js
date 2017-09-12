var liList;
var carouselList = $('#carousel ul');

function changeOneSlide() {
    carouselList.animate({
        marginLeft: -400
    }, 2000, 'swing', toFirstSlide);

}
function toFirstSlide() {
    var firstSlide = carouselList.find('li:first');
    var lastSlide = carouselList.find('li:last');
    lastSlide.after(firstSlide);
    carouselList.css({
        marginLeft: 0
    });
    colorize();
}

function left() {
   carouselList.css({
        marginLeft: 0
    });
}

function toLeft() {
    var firstSlide = carouselList.find('li:first');
    var lastSlide = carouselList.find('li:last');
    firstSlide.before(lastSlide);
    carouselList.css({
        marginLeft: -400
    });
    carouselList.animate({
        marginLeft: 0
    }, 2000, 'swing', left);
    colorize();
}
$(function () {

    $('.fa').css('cursor', 'pointer');
    $('.fa-arrow-right').click(function () {
        if (!$('#carousel ul').is(':animated')) {
            changeOneSlide();
        }
    });
    $('.fa-arrow-left').click(function () {
        if (!$('#carousel ul').is(':animated')) {
            toLeft();
        }
    })
    setInterval(changeOneSlide, 6000);
liList = $('#carousel ul li');
    colorize();
});



function colorize() {
 
    var firstSlide = $('#carousel ul li').eq(0);
    var circleList = $('#carousel i');

    for (var i = 0; i <= 4; i++) {
        if (liList.eq(i).is(firstSlide)) {
            circleList.eq(i).css('color', 'red')
                .css('font-size', '0.9em')
                .css('margin-top', '-2px');

        } else {
            circleList.eq(i).css('color', 'lightgrey')
                .css('font-size', '10px')
                .css('margin-top', '0');
        }
    }
};
