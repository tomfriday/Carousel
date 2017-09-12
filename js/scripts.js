var carouselList;

function changeOneSlide() {
    var carouselList = $('#carousel ul');
    carouselList.animate({
        marginLeft: -400
    }, 2000, 'swing', toFirstSlide);

}

function toFirstSlide() {
    var carouselList = $('#carousel ul');
    var firstSlide = carouselList.find('li:first');
    var lastSlide = carouselList.find('li:last');
    lastSlide.after(firstSlide);
    carouselList.css({
        marginLeft: 0
    });
    colorize();
}

function Left() {
    var carouselList = $('#carousel ul');
    carouselList.css({
        marginLeft: 0
    });
}

function toLeft() {
    var carouselList = $('#carousel ul');
    var firstSlide = carouselList.find('li:first');
    var lastSlide = carouselList.find('li:last');
    firstSlide.before(lastSlide);
    carouselList.css({
        marginLeft: -400
    });
    carouselList.animate({
        marginLeft: 0
    }, 2000, 'swing', Left);
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
    carouselList = $('#carousel ul li');
    colorize();
});



function colorize() {

    var firstSlide = $('#carousel ul li').eq(0);
    var circleList = $('#carousel i');

    for (var i = 0; i <= 4; i++) {
        if (carouselList.eq(i).is(firstSlide)) {
            circleList.eq(i).css('color', 'red').css('font-size', '0.9em');
            circleList.eq(i).css('margin-top', '-2px');

        } else {
            circleList.eq(i).css('color', 'lightgrey').css('font-size', '10px');
            circleList.eq(i).css('margin-top', '0');
        }
    }
};
