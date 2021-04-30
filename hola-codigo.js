import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';


import '@polymer/paper-input/paper-input.js';
import '@polymer/paper-button/paper-button.js';
import '@polymer/paper-card/paper-card.js';
/**
 * `hola-codigo`
 * Muestra un mensaje de hola mundo
 *
 * @customElement
 * @polymer
 * @demo demo/index.html
 */

//hijo
 class NombreCodigo extends PolymerElement {
  static get properties() {
    return {
      clickHijo: Function,
        
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
    <button type="button" on-click="clickHijo">Boton hijo</button>
    <paper-input label="Nombre" value="{{name}}" on-click="clickio"></paper-input>
    <h1 id="titulo">Hola [[name]], tengo [[edad]]</h1>`
  }

  clickio(){
    
  }

  ready() {
      super.ready();
      //console.log('el elemento se creo en nombre-codigo');
      //console.log(this.$.titulo);
      


      /* setTimeout(()=>{
        this.name = "Uno nuevo"
        console.log("se cambio")
      }, 3000);  */

      //this.$.name.textContent = this.tagName;
  
  }
}

window.customElements.define('nombre-codigo', NombreCodigo);

//padre
class HolaCodigo extends PolymerElement {
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
        paper-button{
          background-color: var(--paper-red-500);
          color:white;
        }
      </style>
      <paper-card heading="Crear Cuenta" image="" elevation="1" animated-shadow="false">
        <div class="card-content">
          <nombre-codigo id="componenteHijo" name="{{name}}" clickHijo="clickHijo"></nombre-codigo>
          <h2>Hello [[prop1]]!</h2>
        </div>
        <div class="card-actions">
          <paper-button  raised on-click="click"> Boton </paper-button>
        </div>
      </paper-card>
      
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
  clickHijo(){
    alert("Dio clic en el hijo")
  }
  /* static get listeners(){
    namechanged:"click"
  } */
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
    this.$.componenteHijo.addEventListener("namechanged",()=>this.click());
    //document.querySelector('nombre-codigo').addEventListener('namechange',()=>this.click());
    //this.$$("nombre-codigo").addEventListener("namechange",()=>this.click());
    

    //this.$.boton.addEventListener("click",()=>this.click());
    
    //this.$$("paper-button").addEventListener("click",()=>this.click());
    
    //console.log('el elemento se creo');
    //console.log(this.$.titulo);
    /* setTimeout(()=>{
      this.name = "Uno nuevo"
      console.log("se cambio")
    }, 3000); */
    //this.$.name.textContent = this.tagName;

  }
  click(){
    this.name = "Hubo un clic";
  }
}

window.customElements.define('hola-codigo', HolaCodigo);
