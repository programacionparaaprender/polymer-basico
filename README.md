# \<hola-codigofacilito\>

Muestra un mensaje de hola mundo

## Install the Polymer-CLI

First, make sure you have the [Polymer CLI](https://www.npmjs.com/package/polymer-cli) and npm (packaged with [Node.js](https://nodejs.org)) installed. Run `npm install` to install your element's dependencies, then run `polymer serve` to serve your element locally.

## Viewing Your Element

```
$ polymer serve
```

## Running Tests

```
$ polymer test
```

Your application is already set up to be tested via [web-component-tester](https://github.com/Polymer/web-component-tester). Run `polymer test` to run your application's test suite locally.

### curso
https://www.youtube.com/watch?v=ZIOKgM7YIXs&list=PLpOqH6AE0tNiplM2pFjhO51cEqQaI0R42&index=10


### crear proyecto
npm install -g bower
npm install -g polymer-cli
mkdir polymer
cd polymer
mkdir hola-codigofacilito
cd hola-codigofacilito
polymer init
 1) polymer-3-element - A simple Polymer 3.0 element template
2) polymer application
3) polymer started kit
7) Shop
seleccione opción 1

selccione opción 2 para más contenido

seleccione opción 7 para el ejemplo shop

luego
polymer serve


### importar html dentro de otro html
<link rel="import" href="../polymer/polymer.html">

### para cambiar la informacion de los properties desde el frontend
<hola-codigofacilito name="Nuevo nombre">

### Data binding
https://www.webcomponents.org/element/@polymer/paper-input

 en el package.json
 "paper-input":"PolymerElements/paper-input#^1.0.0"

luego bower install
si no funciona
npm install
si no funciona quitar la linea del package.json
luego ejecutar
npm install --save @polymer/paper-input

[[name]] sincronización a una vía
{{name}} sincronización a dos vías

### 7.- Curso Polymer - Data binding host child
se crea clase hijo
NombreCodigofacilito


localhost:8081