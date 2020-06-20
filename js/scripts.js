
$('carousel')({ interval: 2000 });
$('.carousel').carousel({
    interval: 0
});
$('.btn-next').click(function () {
    $('.carousel').carousel('next');
});


