console.log('Main webpage')
$('.carousel').carousel({
    interval: 2000
  })
console.log('activated')

$(".item").click(function(){
    console.log('carousel clicked')
    $("#myCarousel").carousel(1);
  });

  // Enable Carousel Controls
$(".left").click(function(){
    console.log('previouscarousel clicked')
    $("#myCarousel").carousel("prev");
  });