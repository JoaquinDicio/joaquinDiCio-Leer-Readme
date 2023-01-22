Hola! espero que anden bien!

Esta es mi entrega de la prueba tecnica, les comento un poco como la hice y los detalles que inclui en ella:

- La construí en forma de aplicacion en base a componentes funcionales y dinámicos, lo único estatico es el HEADER y el FOOTER. Todo el contenido del MAIN se consigue gracias a la renderización de componentes. Es muy similar a como funciona React.

- El contenido del MAIN es modificable gracias a los componentes. Por ejemplo: si se desea agregar un banner nuevo o quitar uno viejo, basta con modificar  el array de banners que se envía al componente. Lo mismo si se desea cambiar el tipo de slider, basta con modificar la propiedad type.

- El selector de categorias del main, extrae las categorias directamente del listado de productos. Esto significa que si se carga un producto con una categoria nueva, puede visualizarse en el selector. Aunque, por cuestiones de respetar el MOCKUP solo se muestran los primeros seis elementos del array de categorias extraido.

- Posee una BARRA DE BUSQUEDA DINAMICA, en ella pueden buscar y previsualizar los resultados y coincidencias. Esta parte no entraba en el challenge, pero la hice de todas formas.

- Incluí el MENU RESPONSIVE con una pequeña animación de por medio.


COMO CORRER EL PROYECTO:

- El proyecto debe correr dentro de un entorno de servidor, ya que sino los modulos de ES6 no funcionan por cuestiones de JavaScript. Por suerte basta con 
  utilizar la extension de live-server. Esto se podria haber evitado utilizando webpack, pero no quise agregar mas complejidad al proyecto.


NOTA: No se si estaban esperando una Aplicación de JS o mas bien un simple maquetado HTML / CSS. Pero lo hice de esta forma porque en la segunda página
      del mockup de figma se mostraba la barra de búsqueda activa. Y como es un componente dinámico, directamente base toda la aplicación en componentes.
      Posteriormente me enteré que esa parte no entraba en el challenge, pero ya la había hecho. Espero que si no suma, al menos no reste. 


Eso es todo! les agradezco por leer y por darme la oportunidad. 

Saludos!