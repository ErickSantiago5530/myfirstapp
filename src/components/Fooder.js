import React, { Component } from 'react';


// subcomponents
class Fooder extends Component {
  constructor() {
    super();
  }

  render() {
    // RETURN THE COMPONENT
    return (
      <div className="Fooder">
        <footer>
          <div className="container-fluid text-center g-color-gray-dark-v5 g-py-40">
          <a className="d-block g-width-140 mx-auto g-mb-20" href="/">
            <img className="img-fluid" src="/assets/img/logo/logo-viczza.webp" alt="Image description"/>
          </a>
          <p className="mb-0">
            © 2018 Todos los derechos reservados.
            <a className="g-color-primary" href="/">Viczza</a>.
          </p>
          <p>
            <a href="/eventos" target="_blank"><i className="fab fa-google-drive fa-2x"></i> Geleria</a>
            <a href="https://www.facebook.com/Viczza-helados-y-nieves-1059537264128773/" target="_blank"><i className="fab fa-facebook fa-2x"></i> facebook</a>
            <a href="https://bit.ly/2Vaf2Ea" target="_blank"><i className="fab fa-whatsapp fa-2x"></i> 2491194061</a>
          </p>
          </div>
        </footer>
      </div>
    );
  }
}

export default Fooder;
