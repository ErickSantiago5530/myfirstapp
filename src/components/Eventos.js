import React, { Component } from 'react';
import { eventos } from "./../eventos.json";



// subcomponents
class Eventos extends Component {
  constructor() {
    super();
    this.state = {
      eventos
    }
  }

  render() {
    const eventos = this.state.eventos.map((evento,i)=>{
      return (
        <div className="cbp-item identity design">
          <div className="u-block-hover g-parent">
            <img className="img-fluid g-transform-scale-1_1--parent-hover g-transition-0_5 g-transition--ease-in-out" src={"assets/img-temp/800x500/"+evento.img} alt={evento.alt} title={evento.alt}/>
            <div className="d-flex w-100 h-100 g-bg-black-opacity-0_6 opacity-0 g-opacity-1--parent-hover g-pos-abs g-top-0 g-left-0 g-transition-0_3 g-transition--ease-in u-block-hover__additional--fade u-block-hover__additional--fade-in g-pa-20">
              <div className="align-items-end flex-column mt-auto ml-auto">
                <a className="cbp-lightbox u-icon-v2 u-icon-size--sm g-brd-white g-color-black g-bg-white rounded-circle" href="assets/img-temp/800x500/{{ $imagen['img'] }}">
                  <i className="icon-communication-017 u-line-icon-pro"></i>
                </a>
              </div>
            </div>
          </div>
          </div>
      );
    })
    // RETURN THE COMPONENT
    return (
      <div className="Eventos">
        <div className="row justify-content-center text-center">
          <div className="col-lg-11">
            <h1 className="h2 g-color-black g-font-weight-600 ">Eventos</h1>
            <div className="d-inline-block g-width-20 g-height-2 g-bg-primary "></div>
          </div>
        </div>
        <section className="container g-py-100">
          <div className="cbp g-mb-50" data-controls="#filterControls1" data-animation="quicksand" data-x-gap="30" data-y-gap="30" data-media-queries='[{"width": 1500, "cols": 3}, {"width": 1100, "cols": 3}, {"width": 800, "cols": 3}, {"width": 480, "cols": 2}, {"width": 300, "cols": 1}]'>
            {eventos}
          </div>
        </section>
      </div>
    );
  }
}

export default Eventos;
