$(function(){
  sliderEventoCarrusel();
});

function sliderEventoCarrusel(){
  var slider_ = new MasterSlider();

  slider_.control('arrows', {
    autohide: true,
    overVideo: true
  });
  slider_.control('slideinfo', {
    autohide: false,
    overVideo: true,
    dir: 'h',
    align: 'bottom',
    inset: false,
    margin: 10
  });
  slider_.setup("masterslider_", {
    width: 240,
    height: 240,
    minHeight: 0,
    space: 45,
    start: 1,
    grabCursor: true,
    swipe: true,
    mouse: true,
    keyboard: false,
    layout: "partialview",
    wheel: false,
    autoplay: false,
    instantStartLayers: false,
    loop: true,
    shuffle: false,
    preload: 3,
    heightLimit: true,
    autoHeight: false,
    smoothHeight: true,
    endPause: false,
    overPause: true,
    fillMode: "fill",
    centerControls: true,
    startOnAppear: false,
    layersMode: "center",
    autofillTarget: "",
    hideLayers: false,
    fullscreenMargin: 0,
    speed: 20,
    dir: "h",
    parallaxMode: 'swipe',
    view: "fadeBasic"
  });
}
