import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';


import '@polymer/paper-input/paper-input.js';


/**
 * `hola-codigofacilito`
 * Muestra un mensaje de hola mundo
 *
 * @customElement
 * @polymer
 * @demo demo/index.html
 */

 class NombreCodigofacilito extends PolymerElement {
  static get properties() {
    return {
      name:{
        type: String,
        value: 'Martin Gonzales',
        notify: true
      },
      edad:{
        type: Number
      }
    };
  }
  static get template() { return html`
  <style>
  :host{
      display: block;
  }
</style>
<paper-input label="Nombre" value="{{name}}"></paper-input>
<h1 id="titulo">Hola [[name]], tengo [[edad]]</h1>`
    }

    ready() {
      super.ready();
      console.log('el elemento se creo en nombre-codigo');
      console.log(this.$.titulo);
      setTimeout(()=>{
        this.name = "Uno nuevo"
        console.log("se cambio")
      }, 3000); 
      //this.$.name.textContent = this.tagName;
  
    }
}

window.customElements.define('nombre-codigofacilito', NombreCodigofacilito);

class HolaCodigofacilito extends PolymerElement {
  static get properties() {
    return {
      name:{
        type: String,
        value: 'Martin Gonzales'
      },
      edad:{
        type: Number
      },
      prop1: {
        type: String,
        value: 'Programación para aprender',
      },
    };
  }
  static get template() {
    return html`
      <style>
        :host {
          display: block;
          background-color:red;
          padding:1rem;
          margin:auto;
          font-style:italic;
          font-weight:bold;
          color:white;
          border: 1 #ccc solid;
        }
      </style>
      <nombre-codigofacilito name="{{name}}"></nombre-codigofacilito>
      <h2>Hello [[prop1]]!</h2>
    `;
  }
  static get properties() {
    return {
      name:{
        type: String,
        value: 'Martin Gonzales'
      },
      edad:{
        type: Number
      },
      prop1: {
        type: String,
        value: 'Programación para aprender',
      },
    };
  }
  //attached no funciona
  attached(){
    console.log('attached')
  }
  //pendiente probar
  detached(){
    console.log('detached')
  }
  //created no funciona
  created(){
    console.log('created')
  }
  attributeChanged(){
    console.log("attributeChanged")
  }
  //ready si funciona
  ready() {
    super.ready();
    //console.log('el elemento se creo');
    //console.log(this.$.titulo);
    /* setTimeout(()=>{
      this.name = "Uno nuevo"
      console.log("se cambio")
    }, 3000); */
    //this.$.name.textContent = this.tagName;

  }
}

window.customElements.define('hola-codigofacilito', HolaCodigofacilito);
