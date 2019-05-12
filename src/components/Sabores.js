import React, { Component } from 'react';
import { sabores } from "./../sabores.json";


// subcomponents
class Sabores extends Component {
  constructor() {
    super();
  }

  render() {
    // RETURN THE COMPONENT
    var sabores = this.state.sabores.map(
      function iterator( sabor ) {
          return(
              <p
                  key={ sabor.id }
                  friend={ sabor }
                  isSelected={ this.isSelected( sabor ) }
                  toggleSelection={ this.toggleSelection }>
              </p>
          );
      },
      this
    );

    return (
      <div className="Sabores">
        <div class="ms-staff-carousel g-mt-50">
          <div id="masterslider_" class="master-slider ms-skin-default">
            @foreach ($products as $product)
            <div class="ms-slide" data-delay="3" data-fill-mode="fill">
              <img src="../assets/img/blank.gif" alt='{{ $product['alt'] }}'  title='{{ $product['alt'] }}' data-src="../assets/img-temp/240x240/{{ $product['img'] }}"/>
              <div class="ms-info">
                <h2 style="text-align: center;">
                  {{-- {{ $product['titulo'] }} --}}
                  <strong>{!! $product['titulo'] !!}</strong>
                </h2>
                <h3 style="text-align: center;">
                  {!! $product['texto'] !!}
                </h3>
              </div>
            </div>
          @endforeach
          </div>
        </div>
      </div>
    );
  }
}

export default Sabores;
