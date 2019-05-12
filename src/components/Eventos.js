import React, { Component } from 'react';


// subcomponents
class Eventos extends Component {
  constructor() {
    super();
  }

  render() {
    // RETURN THE COMPONENT
    return (
      <div className="Eventos">
        <section id="events" className="g-theme-bg-gray-light-v4 g-py-50">
          <div className="container g-max-width-780 text-center g-mb-10">
            <div className="text-center text-uppercase u-heading-v5-3 u-heading-v5-color-primary u-heading-v5-rounded-50x g-mb-20">
              <h1 className="h2 g-color-black g-font-weight-600 mb-2">Eventos</h1>
              <div className="d-inline-block g-width-20 g-height-2 g-bg-primary mb-2"></div>
              <p>Contáctanos para tus eventos sociales y disfruta de un rico helado viczza en tu increíble día,
                contamos con sabores que pueden satisfacer tus necesidades y las necesidades de tus amigos y familiares.</p>

            </div>
            <nav className="nav nav-pills nav-justified">
              <a className="nav-item nav-link active" href="#" id="event1" onclick="cambiarSliderEventos(1)">Fiesta de niños</a>
              <a className="nav-item nav-link" href="#" id="event2" onclick="cambiarSliderEventos(2)">Bodas</a>
              <a className="nav-item nav-link" href="#" id="event3" onclick="cambiarSliderEventos(3)">Bautizos</a>
            </nav>
            <br/>
            <div id="1" className="ocultar">
                <div id="Fiestadeniños" className="master-slider ms-skin-light-3">
                <div className="ms-slide" data-delay="3" data-fill-mode="fill">
                  <img src="assets/img/img_eventos/blank.gif" alt="" title="" data-src="assets/img/img_eventos/evento1.jpg" />
                  <img className="ms-thumb" src="assets/img/img_eventos/evento1.jpg" alt="" />
                </div>
                <div className="ms-slide" data-delay="3" data-fill-mode="fill">
                  <img src="assets/img/img_eventos/blank.gif" alt="" title="" data-src="assets/img/img_eventos/evento2.jpg" />
                  <img className="ms-thumb" src="assets/img/img_eventos/evento2.jpg" alt="" />
                </div>
                <div className="ms-slide" data-delay="3" data-fill-mode="fill">
                  <img src="assets/img/img_eventos/blank.gif" alt="" title="" data-src="assets/img/img_eventos/evento3.jpg" />
                  <img className="ms-thumb" src="assets/img/img_eventos/evento3.jpg" alt="" />
                </div>
              </div>

                <div className="ms-staff-carousel g-mt-50">
                  <div id="Fiestadeniños_c" className="master-slider ms-skin-default">
                    <div className="ms-slide" data-delay="3" data-fill-mode="fill">
                      <img src="../assets/img/blank.gif" alt=""  title="" data-src="../assets/img-temp/240x240/1.jpg"/>
                      <div className="ms-info">
                        <h3 className="center-eventos">
                          Chicle búbalo
                        </h3>
                        <div className="center-eventos">
                          es un increíble sabor que es el indicado para el paladar del niño,
                          <br/>consiste en una preparación de helado de chicle con trozos de chicle búbalo
                        </div>
                      </div>
                    </div>
                    <div className="ms-slide" data-delay="3" data-fill-mode="fill">
                      <img src="../assets/img/blank.gif" alt="" title="" data-src="../assets/img-temp/240x240/2.jpg" />
                      <div className="ms-info">
                        <h3 className="center-eventos">
                          Galleta oreo
                        </h3>
                        <div className="center-eventos">
                          es un maravilloso helado que es llamativo para el paladar de los niños,
                          <br/>consiste en base de helado de leche con trozos de galleta oreo,
                          un sabor inigualable para el paladar de nuestros pequeños.
                        </div>
                      </div>
                    </div>
                    <div className="ms-slide" data-delay="3" data-fill-mode="fill">
                      <img src="../assets/img/blank.gif" alt="" title="" data-src="../assets/img-temp/240x240/3.jpg" />
                      <div className="ms-info">
                        <h3 className="center-eventos">
                          Nieve de limón
                        </h3>
                        <div className="center-eventos">
                          este es un sabor que nuestros pequeños jamas podrán olvidar es un sabor que <br/>refresca totalmente al niño.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
            </div>

            <div id="2" className="ocultar">
                <div id="Bodas" className="master-slider ms-skin-light-3">
                <div className="ms-slide" data-delay="3" data-fill-mode="fill">
                  <img src="assets/img/img_eventos/blank.gif" alt="" title="" data-src="assets/img/img_eventos/evento1.jpg" />
                  <img className="ms-thumb" src="assets/img/img_eventos/evento1.jpg" alt="" />
                </div>
                <div className="ms-slide" data-delay="3" data-fill-mode="fill">
                  <img src="assets/img/img_eventos/blank.gif" alt="" title="" data-src="assets/img/img_eventos/evento2.jpg" />
                  <img className="ms-thumb" src="assets/img/img_eventos/evento2.jpg" alt="" />
                </div>
                <div className="ms-slide" data-delay="3" data-fill-mode="fill">
                  <img src="assets/img/img_eventos/blank.gif" alt="" title="" data-src="assets/img/img_eventos/evento3.jpg" />
                  <img className="ms-thumb" src="assets/img/img_eventos/evento3.jpg" alt="" />
                </div>
              </div>

                <div className="ms-staff-carousel g-mt-50">
                  <div id="Bodas_c" className="master-slider ms-skin-default">
                    <div className="ms-slide" data-delay="3" data-fill-mode="fill">
                      <img src="../assets/img/blank.gif" alt=""  title="" data-src="../assets/img-temp/240x240/1.jpg"/>
                      <div className="ms-info">
                        <h3 className="center-eventos">
                          Chicle búbalo
                        </h3>
                        <div className="center-eventos">
                          es un increíble sabor que es el indicado para el paladar del niño,
                          <br/>consiste en una preparación de helado de chicle con trozos de chicle búbalo
                        </div>
                      </div>
                    </div>
                    <div className="ms-slide" data-delay="3" data-fill-mode="fill">
                      <img src="../assets/img/blank.gif" alt="" title="" data-src="../assets/img-temp/240x240/2.jpg" />
                      <div className="ms-info">
                        <h3 className="center-eventos">
                          Galleta oreo
                        </h3>
                        <div className="center-eventos">
                          es un maravilloso helado que es llamativo para el paladar de los niños,
                          <br/>consiste en base de helado de leche con trozos de galleta oreo,
                          un sabor inigualable para el paladar de nuestros pequeños.
                        </div>
                      </div>
                    </div>
                    <div className="ms-slide" data-delay="3" data-fill-mode="fill">
                      <img src="../assets/img/blank.gif" alt="" title="" data-src="../assets/img-temp/240x240/3.jpg" />
                      <div className="ms-info">
                        <h3 className="center-eventos">
                          Nieve de limón
                        </h3>
                        <div className="center-eventos">
                          este es un sabor que nuestros pequeños jamas podrán olvidar es un sabor que <br/>refresca totalmente al niño.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
            </div>

            <div id="3" className="ocultar">

              <div id="Bautizos" className="master-slider ms-skin-light-3">
                <div className="ms-slide" data-delay="3" data-fill-mode="fill">
                  <img src="assets/img/img_eventos/blank.gif" alt="" title="" data-src="assets/img/img_eventos/evento1.jpg" />
                  <img className="ms-thumb" src="assets/img/img_eventos/evento1.jpg" alt="" />
                </div>
                <div className="ms-slide" data-delay="3" data-fill-mode="fill">
                  <img src="assets/img/img_eventos/blank.gif" alt="" title="" data-src="assets/img/img_eventos/evento2.jpg" />
                  <img className="ms-thumb" src="assets/img/img_eventos/evento2.jpg" alt="" />
                </div>
                <div className="ms-slide" data-delay="3" data-fill-mode="fill">
                  <img src="assets/img/img_eventos/blank.gif" alt="" title="" data-src="assets/img/img_eventos/evento3.jpg" />
                  <img className="ms-thumb" src="assets/img/img_eventos/evento3.jpg" alt="" />
                </div>
              </div>

              <div className="ms-staff-carousel g-mt-50">
                <div id="Bautizos_c" className="master-slider ms-skin-default">
                  <div className="ms-slide" data-delay="3" data-fill-mode="fill">
                    <img src="../assets/img/blank.gif" alt=""  title="" data-src="../assets/img-temp/240x240/1.jpg"/>
                    <div className="ms-info">
                      <h3>
                        Chicle búbalo
                      </h3>
                      <div className="center-eventos">
                        es un increíble sabor que es el indicado para el paladar del niño,
                        <br/>consiste en una preparación de helado de chicle con trozos de chicle búbalo
                      </div>
                    </div>
                  </div>
                  <div className="ms-slide" data-delay="3" data-fill-mode="fill">
                    <img src="../assets/img/blank.gif" alt="" title="" data-src="../assets/img-temp/240x240/2.jpg" />
                    <div className="ms-info">
                      <h3 className="center-eventos">
                        Galleta oreo
                      </h3>
                      <div className="center-eventos">
                        es un maravilloso helado que es llamativo para el paladar de los niños,
                        <br/>consiste en base de helado de leche con trozos de galleta oreo,
                        un sabor inigualable para el paladar de nuestros pequeños.
                      </div>
                    </div>
                  </div>
                  <div className="ms-slide" data-delay="3" data-fill-mode="fill">
                    <img src="../assets/img/blank.gif" alt="" title="" data-src="../assets/img-temp/240x240/3.jpg" />
                    <div className="ms-info">
                      <h3 className="center-eventos">
                        Nieve de limón
                      </h3>
                      <div className="center-eventos">
                        este es un sabor que nuestros pequeños jamas podrán olvidar es un sabor que <br/>refresca totalmente al niño.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>


          </div>

        </section>
      </div>
    );
  }
}

export default Eventos;
