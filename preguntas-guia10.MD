# Puntos de reflexión
•	¿Qué elemento del DOM estás seleccionando? El campo de texto (#campotexto), el botón (#btnenviar) y el contenedor de mensajes (#mensajes).

•	¿Qué evento provoca el cambio en la página? El evento onclick del botón, que se ejecuta cuando el usuario hace clic.

•	¿Qué nuevo elemento se crea? Un párrafo (<p>) dinámico con el texto ingresado por el usuario.

•	¿Dónde se inserta ese elemento dentro del DOM? Dentro del <div id="mensajes">, que actúa como contenedor de todos los mensajes.

•	¿Qué ocurre en la página cada vez que repites la acción? Se agrega un nuevo párrafo con el mensaje escrito, modificando la estructura del DOM sin necesidad de recargar la página.

# Resultado esperado

•	La página responde a la acción del usuario (clic en el botón).

•	Se crean nuevos elementos dinámicamente.

•	El DOM cambia en tiempo real, mostrando los mensajes uno debajo del otro.

•	JavaScript controla la lógica: validación, creación de elementos y actualización de la interfaz.

