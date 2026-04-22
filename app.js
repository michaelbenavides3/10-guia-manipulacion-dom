// const boton = document.querySelector("#btn-saludar");

// boton.onclick = () => {
//   boton.textContent = "Hola Soy GOKU!";
// };

const campotexto = document.querySelector("#campotexto");
const enviar = document.querySelector("#btnenviar");
const mensajecontenedor = document.querySelector("#mensajes");

//evento para el boton
enviar.onclick = () => {
  //validamos que el espacio no este vacio 
  const texto = campotexto.value.trim();
  console.log(texto);
  
  if (texto == "") {
    alert("el campo no debe estar vacio....");
    return;
  }


//crear el nuevo mensaje para la caja
  const mensajenuevo = document.createElement("p");
  console.log(mensajenuevo);
  

//agregar el mensaje nuevo
mensajenuevo.textContent = texto;
mensajenuevo.classList.add("mensaje");

mensajecontenedor.appendChild(mensajenuevo);

  campotexto.value = ""; 
  console.log(campotexto);
  
};