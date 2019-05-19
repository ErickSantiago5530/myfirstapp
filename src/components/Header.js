import React, { Component } from 'react';

import { todos } from './../todos.json';
import logo from './../logo.svg';
// import logo_viczza from '/assets/img/logo/logo-viczza.jpg';

// subcomponents
class Header extends Component {
  constructor() {
    super();
  }

  render() {
    // RETURN THE COMPONENT
    return (
      <div className="Header">

          <header id="js-header" className="u-header u-header--static">
            <div className="u-header__section u-header__section--light g-bg-white g-transition-0_3 g-py-10">
              <nav className="js-mega-menu navbar navbar-expand-lg hs-menu-initialized hs-menu-horizontal">
                <div className="container">

                  <button className="navbar-toggler navbar-toggler-right btn g-line-height-1 g-brd-none g-pa-0 g-pos-abs g-top-3 g-right-0" type="button" aria-label="Toggle navigation" aria-expanded="false" aria-controls="navBar" data-toggle="collapse" data-target="#navBar">
                    <span className="hamburger hamburger--slider">
                  <span className="hamburger-box">
                    <span className="hamburger-inner"></span>
                    </span>
                    </span>
                  </button>



                  <a href="/home" className="navbar-brand">

                    <img src='/assets/img/logo/logo-viczza.webp' alt="Image Description" width="150" height="50"/>
                  </a>

                  <div className="collapse navbar-collapse align-items-center flex-sm-row g-pt-10 g-pt-5--lg g-mr-40--lg" id="navBar">
                    <ul className="navbar-nav text-uppercase g-pos-rel g-font-weight-600 ml-auto">

                      <li className="active nav-item  g-mx-10--lg g-mx-15--xl">
                        <a href="/home" id='home'  className="nav-link g-py-7 g-px-0">Inicio</a>
                      </li>

                      <li className="nav-item  g-mx-10--lg g-mx-15--xl">
                        <a href="/sabores" id='sabores'  className="nav-link g-py-7 g-px-0">Helados</a>
                      </li>
                      <li className="nav-item  g-mx-10--lg g-mx-15--xl">
                        <a href="/eventos" id='eventos' className="nav-link g-py-7 g-px-0">Eventos</a>
                      </li>


                      <li className="nav-item  g-mx-10--lg g-mx-15--xl">
                        <a href="/about" id='about'  className="nav-link g-py-7 g-px-0">Acerca de</a>
                      </li>

                      <li className="nav-item  g-mx-10--lg g-mx-15--xl">
                        <a href="/contactanos" id='contactanos' className="nav-link g-py-7 g-px-0">Contactanos</a>
                      </li>
                    </ul>
                  </div>


                </div>
              </nav>
            </div>
          </header>
      </div>
    );
  }
}

export default Header;
