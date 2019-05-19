import React, { Component } from 'react';
import { contacto } from "./../contacto.json";



// subcomponents
class Contacto extends Component {
  constructor() {
    super();
    this.state = {
      contacto
    };
  }

  render() {
    const contacto = this.state.contacto.map((contact,i)=>{
      return (
        <tr>
          <td className="align-middle text-nowrap">
            <h4 className="h6 g-mb-2">{contact.sucursal}</h4>
            <div className="js-rating g-font-size-12 g-color-primary" data-rating="2"></div>
          </td>
          <td className="align-middle">
            <div className="d-flex">
              <i className="icon-location-pin g-font-size-18 g-color-gray-dark-v5 g-pos-rel g-top-5 g-mr-7"></i>
              <span>{contact.direccion}</span>
            </div>
          </td>
          <td className="align-middle">
            <a className="btn btn-block u-btn-cyan g-rounded-50 g-py-5" href={contact.mapa} target="_blank">
              <i className="icon-location-pin g-mr-5"></i> Cómo llegar
            </a>
          </td>
        </tr>
      );
    })
    // RETURN THE COMPONENT
    return (
      <div className="Contacto">
          <section id="contactos" className="g-theme-bg-gray-light-v4 g-py-50">
            <div className="card border-0">
              <div className="card-header d-flex align-items-center justify-content-between g-bg-gray-light-v5 border-0 g-mb-15">
                <h3 className="h6 mb-0">
                  <i className="icon-directions g-pos-rel g-top-1 g-mr-5"></i> Sucursales
                </h3>
              </div>

              <div className="card-block g-pa-0">
                <div className="table-responsive">
                  <table className="table table-bordered u-table--v2">
                    <thead className="text-uppercase g-letter-spacing-1">
                      <tr>
                        <th className="g-font-weight-300 g-color-black">Puntos de venta</th>
                        <th className="g-font-weight-300 g-color-black g-min-width-200">Dirección</th>
                        <th className="g-font-weight-300 g-color-black">Mapa</th>
                      </tr>
                    </thead>

                    <tbody>
                      {contacto}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            </section>
      </div>
    );
  }
}

export default Contacto;
