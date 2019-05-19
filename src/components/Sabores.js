import React, { Component } from 'react';
import Parser from 'html-react-parser';
import { sabores } from "./../sabores.json";


// subcomponents
class Sabores extends Component {
  constructor() {
    super();
    this.state = {
      sabores
    };
  }


  render() {
    const sabores = this.state.sabores.map((sabor,i)=>{
      return (
        <div className="ms-slide" data-delay="3" data-fill-mode="fill">
        <img src="../assets/img/blank.gif" alt={sabor.alt}  title={sabor.alt} data-src={"../assets/img-temp/240x240/"+sabor.img}/>
        <div className="ms-info">
          <h2 className="center-eventos">
            <strong>{sabor.titulo}</strong>
          </h2>
          <h3 className="center-eventos">
            {Parser(sabor.texto)}
          </h3>
        </div>
      </div>
      );
    })
    // RETURN THE COMPONENT
    return (
      <div className="Sabores">
        <div className="ms-staff-carousel g-mt-50">
          <div id="masterslider_" className="master-slider ms-skin-default">
          {sabores}
          </div>
        </div>
      </div>
    );
  }
}

export default Sabores;
