$(function(){
  $("#home").removeClass('active');
  $("#1").removeClass('ocultar');
  $(".ocultar").hide();
  cambiarSliderEventos(1);
  inicializaSliderEventos();
  var URLactual = window.location.pathname
  cambiamenu(URLactual);

});

function cambiarSliderEventos(evento){
  console.log(evento);
  if (evento==1) {
    $("#event1").addClass('active');
    $("#event2").removeClass('active');
    $("#event3").removeClass('active');
    $("#3").addClass('active');
    $("#2").addClass('active');
    $("#1").removeClass('active');
    inicializaCarrucel1();
  }else if(evento==2){
    $("#event1").removeClass('active');
    $("#event2").addClass('active');
    $("#event3").removeClass('active');
    $("#3").addClass('active');
    $("#1").addClass('active');
    $("#2").removeClass('active');
  }else if(evento==3){
    $("#event1").removeClass('active');
    $("#event2").removeClass('active');
    $("#event3").addClass('active');
    $("#1").addClass('active');
    $("#2").addClass('active');
    $("#3").removeClass('active');
  }
}

function inicializaSliderEventos(){
  sliderEvento1();
  sliderEvento2();
  sliderEvento3();
}

function sliderEvento1(){
  var slider_evento1 = new MasterSlider();
  slider_evento1.control('arrows', {
    autohide: true,
    overVideo: true
  });
  slider_evento1.control('thumblist', {
    autohide: false,
    overVideo: true,
    dir: 'v',
    speed: 17,
    inset: false,
    arrows: false,
    hover: false,
    customClass: '',
    align: 'right',
    type: 'thumbs',
    margin: 5,
    width: 100,
    height: 80,
    space: 5,
    fillMode: 'fill'
  });
  slider_evento1.control('scrollbar', {
    autohide: false,
    overVideo: true,
    dir: 'h',
    inset: true,
    align: 'top',
    color: '#3D3D3D',
    margin: 10,
    width: 4
  });
  slider_evento1.setup("Fiestadeniños", {
    width: 1000,
    height: 500,
    minHeight: 0,
    space: 0,
    start: 1,
    grabCursor: true,
    swipe: true,
    mouse: true,
    keyboard: false,
    layout: "boxed",
    wheel: false,
    autoplay: true,
    instantStartLayers: false,
    loop: false,
    shuffle: false,
    preload: 2,
    heightLimit: true,
    autoHeight: true,
    smoothHeight: true,
    endPause: false,
    overPause: true,
    fillMode: "fill",
    centerControls: false,
    startOnAppear: false,
    layersMode: "center",
    autofillTarget: "",
    hideLayers: false,
    fullscreenMargin: 0,
    speed: 20,
    dir: "h",
    parallaxMode: 'swipe',
    view: "scale"
  });
}

function sliderEvento2(){
  var slider_evento2 = new MasterSlider();
  slider_evento2.control('arrows', {
    autohide: true,
    overVideo: true
  });
  slider_evento2.control('thumblist', {
    autohide: false,
    overVideo: true,
    dir: 'v',
    speed: 17,
    inset: false,
    arrows: false,
    hover: false,
    customClass: '',
    align: 'right',
    type: 'thumbs',
    margin: 5,
    width: 100,
    height: 80,
    space: 5,
    fillMode: 'fill'
  });
  slider_evento2.control('scrollbar', {
    autohide: false,
    overVideo: true,
    dir: 'h',
    inset: true,
    align: 'top',
    color: '#3D3D3D',
    margin: 10,
    width: 4
  });
  slider_evento2.setup("Bodas", {
    width: 1000,
    height: 500,
    minHeight: 0,
    space: 0,
    start: 1,
    grabCursor: true,
    swipe: true,
    mouse: true,
    keyboard: false,
    layout: "boxed",
    wheel: false,
    autoplay: true,
    instantStartLayers: false,
    loop: false,
    shuffle: false,
    preload: 2,
    heightLimit: true,
    autoHeight: true,
    smoothHeight: true,
    endPause: false,
    overPause: true,
    fillMode: "fill",
    centerControls: false,
    startOnAppear: false,
    layersMode: "center",
    autofillTarget: "",
    hideLayers: false,
    fullscreenMargin: 0,
    speed: 20,
    dir: "h",
    parallaxMode: 'swipe',
    view: "scale"
  });
}

function sliderEvento3(){
  var slider_evento3 = new MasterSlider();
  slider_evento3.control('arrows', {
    autohide: true,
    overVideo: true
  });
  slider_evento3.control('thumblist', {
    autohide: false,
    overVideo: true,
    dir: 'v',
    speed: 17,
    inset: false,
    arrows: false,
    hover: false,
    customClass: '',
    align: 'right',
    type: 'thumbs',
    margin: 5,
    width: 100,
    height: 80,
    space: 5,
    fillMode: 'fill'
  });
  slider_evento3.control('scrollbar', {
    autohide: false,
    overVideo: true,
    dir: 'h',
    inset: true,
    align: 'top',
    color: '#3D3D3D',
    margin: 10,
    width: 4
  });
  slider_evento3.setup("Bautizos", {
    width: 1000,
    height: 500,
    minHeight: 0,
    space: 0,
    start: 1,
    grabCursor: true,
    swipe: true,
    mouse: true,
    keyboard: false,
    layout: "boxed",
    wheel: false,
    autoplay: true,
    instantStartLayers: false,
    loop: false,
    shuffle: false,
    preload: 2,
    heightLimit: true,
    autoHeight: true,
    smoothHeight: true,
    endPause: false,
    overPause: true,
    fillMode: "fill",
    centerControls: false,
    startOnAppear: false,
    layersMode: "center",
    autofillTarget: "",
    hideLayers: false,
    fullscreenMargin: 0,
    speed: 20,
    dir: "h",
    parallaxMode: 'swipe',
    view: "scale"
  });
}

function inicializaCarrucel1(){
  var carrucel1 = new MasterSlider();

  carrucel1.control('arrows', {
    autohide: true,
    overVideo: true
  });
  carrucel1.control('slideinfo', {
    autohide: false,
    overVideo: true,
    dir: 'h',
    align: 'bottom',
    inset: false,
    margin: 10
  });
  carrucel1.setup("Fiestadeniños_c", {
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

function inicializaCarrucel2(){
  var carrucel2 = new MasterSlider();

  carrucel2.control('arrows', {
    autohide: true,
    overVideo: true
  });
  carrucel2.control('slideinfo', {
    autohide: false,
    overVideo: true,
    dir: 'h',
    align: 'bottom',
    inset: false,
    margin: 10
  });
  carrucel2.setup("Bodas_c", {
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

function inicializaCarrucel3(){
  var carrucel3 = new MasterSlider();

  carrucel3.control('arrows', {
    autohide: true,
    overVideo: true
  });
  carrucel3.control('slideinfo', {
    autohide: false,
    overVideo: true,
    dir: 'h',
    align: 'bottom',
    inset: false,
    margin: 10
  });
  carrucel3.setup("Bautizos_c", {
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

function cambiamenu(menu){
  console.log('entro a cambia menu');
  switch (menu) {
    case '/home':
      $("#galeria").removeClass('active');
      $("#mega-menu-home").removeClass('active');
      $("#about").removeClass('active');
      $("#contactanos").removeClass('active');
      $("#home").addClass('active');
      break;
    case '/galeria':
      $("#home").removeClass('active');
      $("#mega-menu-home").removeClass('active');
      $("#about").removeClass('active');
      $("#contactanos").removeClass('active');
      $("#galeria").addClass('active');
      break;
    case '/eventos':
      $("#home").removeClass('active');
      $("#galeria").removeClass('active');
      $("#mega-menu-home").addClass('active');
      $("#contactanos").removeClass('active');
      $("#about").removeClass('active');
      break;
    case '/about':
      $("#home").removeClass('active');
      $("#galeria").removeClass('active');
      $("#mega-menu-home").removeClass('active');
      $("#contactanos").removeClass('active');
      $("#about").addClass('active');
      break;
    case '/contactanos':
      $("#home").removeClass('active');
      $("#galeria").removeClass('active');
      $("#mega-menu-home").removeClass('active');
      $("#about").removeClass('active');
      $("#contactanos").addClass('active');
      break;
    default:
      // $("#galeria").removeClass('active');
      // $("#mega-menu-home").removeClass('active');
      // $("#about").removeClass('active');
      // $("#contactanos").removeClass('active');
      // $("#home").addClass('active');
  }
}
