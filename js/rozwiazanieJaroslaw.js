function changeOneSlide(tempo) {
    var carouselList = $('#carousel ul');
    carouselList.animate({
        marginLeft: -400
    }, tempo, 'swing', toFirstSlide);
}


function toFirstSlide() {
    var carouselList = $('#carousel ul');
    var firstSlide = carouselList.find('li:first');
    var lastSlide = carouselList.find('li:last');
    lastSlide.after(firstSlide);
    carouselList.css({
        marginLeft: 0
    });
    colorCircles();
}

function colorCircles() {
    var iList = $('#carousel i');
    var carouselList = $('#carousel ul');
    var firstSlide = carouselList.find('li:first');
    for (i = 0; i < liList.length; i++) {
        if (liList.eq(i).is(firstSlide)) {
            iList.eq(i).css("color", "red");
        } else {
            iList.eq(i).css("color", "lightgrey");
        }
    }
}

function changeLeft(tempo) {
    var carouselList = $('#carousel ul');
    var firstSlide = carouselList.find('li:first');
    var lastSlide = carouselList.find('li:last');
    firstSlide.before(lastSlide);
    carouselList.css({
        marginLeft: -400
    });
    carouselList.animate({
        marginLeft: 0
    }, tempo, 'swing', toFirstSlidek);
}

function toFirstSlidek() {
    var carouselList = $('#carousel ul');
    carouselList.css({
        marginLeft: 0
    });
    colorCircles();
}

$(function () {
    carouselList = $('#carousel ul');
    liList = carouselList.find('li');
    colorCircles();
    setInterval(changeOneSlide(2000), 10000);
    $('.fa').css('cursor', 'pointer');
    $('.fa-arrow-right').click(function () {
        if (!$('#carousel ul').is(':animated')) {
            changeOneSlide(2000);
        }
    });
    $('.fa-arrow-left').click(function () {
        if (!$('#carousel ul').is(':animated')) {
            changeLeft(2000);
        }
    });

    iListner(0);
    iListner(1);
    iListner(2);
    iListner(3);
    iListner(4);

})

function iListner(index) {
    var iList = $('#carousel i');
    iList.eq(index).click(function () {
        if (!$('#carousel ul').is(':animated')) {
            swift(index);
        }
    });
}

function swift(index) {
    var carouselList = $('#carousel ul');
    var firstSlide = carouselList.find('li:first');
    var sum;
    for (i = 0; i < liList.length; i++) {
        if (liList.eq(i).is(firstSlide)) {
            sum = index - i;
        }
    }
    console.log(sum);
    for (i = 0; i < sum; i++) {
        changeOneSlide(50);
    }
    if (sum < 0) {
        for (i = 0; i < Math.abs(sum); i++) {
            changeLeft(200);
        }
    }

}
