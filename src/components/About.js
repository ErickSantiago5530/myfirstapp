import React, { Component } from 'react';


// subcomponents
class About extends Component {
  constructor() {
    super();
  }

  render() {
    // RETURN THE COMPONENT
    return (
      <div className="About">
        <section id="about" className="container g-pt-40 g-pb-30">

          <div className="row justify-content-center text-center g-mb-50">
            <div className="col-lg-11">
              <h1 className="h2 g-color-black g-font-weight-600 mb-2">Historia</h1>
              <div className="d-inline-block g-width-20 g-height-2 g-bg-primary mb-2"></div>
              <p className="lead mb-0">
                La empresa inicia con la tradición del abuelo Rafael Zamora Jiménez  quien le enseño a elaborar helado y nieve quien ahora es el dueño el señor Víctor Zenón Zamora Vázquez en los años 1968 donde años después se vendía el helado y la nieve cada año en la temporada de semana santa, debido a que los abuelos se dedicaban a vender gorditas de frijol y se acompañaba con una nieve y un helado, con el paso del tiempo la gente preguntaba donde vendían los helados y la respuesta era que solo se hacían cada año.
                Debido a que la gente lo pedía más seguido se decidió vender los helados y las nieves día a día, donde empezamos a distribuir nuestro producto en Tecamachalco, el pueblo de santa rosa, san mateo, tochtepec y en los juegos de baseball.
                En el año 2008 se le dio el nombre de viczza como una marca registrada, el nombre de nuestra empresa es el nombre del fundador quien es Víctor Zenón Zamora es por eso que se le pone el nombre de viczza de acuerdo a las iniciales de su nombre.

              </p>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-4 g-mb-30">
              <div className="media g-mb-15">
                <div className="d-flex mr-4">
                  <span className="g-color-primary g-font-size-30">
                      <i className="icon-education-087 u-line-icon-pro"></i>
                    </span>
                </div>
                <div className="media-body">
                  <h3 className="h5 g-color-black g-font-weight-600 mb-20">Visión</h3>
                  <p className="g-color-gray-dark-v4">
                  Llegar a ser la primera empresa franquiciada en el municipio de Tecamachalco,
                  para lograr ser líderes en el mercado a nivel nacional, sin descuidar la calidad y
                  el sabor de nuestros productos siempre comprometidos con los clientes nunca dejando los valores que nos caracterizan.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-4 g-mb-30">
              <div className="media g-mb-15">
                <div className="d-flex mr-4">
                  <span className="g-color-primary g-font-size-30">
                      <i className="icon-education-035 u-line-icon-pro"></i>
                    </span>
                </div>
                <div className="media-body">
                  <h3 className="h5 g-color-black g-font-weight-600 mb-20">Misión</h3>
                  <p className="g-color-gray-dark-v4">
                    VICZZA es una empresa dedicada a la producción de helados y nieves a base de ingredientes naturales, siempre comprometidos con la calidad e higiene sin descuidar
                    la variedad y servicios ofrecidos a nuestros clientes para satisfacer su paladar.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-4 g-mb-30">
              <div className="media g-mb-15">
                <div className="d-flex mr-4">
                  <span className="g-color-primary g-font-size-30">
                      <i className="icon-education-141 u-line-icon-pro"></i>
                    </span>
                </div>
                <div className="media-body">
                  <h3 className="h5 g-color-black g-font-weight-600 mb-20">Valores</h3>
                  <p className="g-color-gray-dark-v4">
                    <ul>
                      <li>Unión
                      </li>
                      <li>Respeto
                      </li>
                      <li>Alegría
                      </li>
                      <li>Honestidad
                      </li>
                      <li>Lealtad
                      </li>
                      <li>Gratitud
                      </li>
                    </ul>
                  </p>

                </div>
              </div>
            </div>
          </div>
          </section>
      </div>
    );
  }
}

export default About;
