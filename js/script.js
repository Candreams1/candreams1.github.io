var options = {
    full_width: false,
    interval:6000,
    transition:1000,
    draggable: false,
    indicators: false,
}
var elem = document.querySelector('.slider');
var instance = M.Slider.init(elem, options);
var prevButton = document.querySelector('.slide-prev');
var nextButton = document.querySelector('.slide-next');

prevButton.onclick = function(){
  instance.prev();
};

nextButton.onclick = function(){
  instance.next();
};
