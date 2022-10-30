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

if(prevButton){
  prevButton.onclick = function(){
    instance.prev();
  };
}

if(nextButton){
  nextButton.onclick = function(){
    instance.next();
  };
}



document.getElementById("wsnavtoggle").addEventListener("click", function () {
  document.getElementsByTagName("BODY")[0].classList.toggle("wsactive");
});
