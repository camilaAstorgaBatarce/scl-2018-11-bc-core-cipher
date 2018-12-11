// window.onload
  // function save(){
  document.getElementById(`save`).addEventListener(`click`, (evento) => {
    evento.preventDefault();
    let primerElemento = document.getElementById(`NOM`).value;
    let segundoElemento = document.getElementById(`CON`).value;
    if (primerElemento == "" || segundoElemento == ""){
      alert(`Ingrese un usuario y una contraseña valida`)
    }else{
      document.getElementById(`comienza_div`).style.display = `none`;
      document.getElementById(`nombre_jugador`).innerHTML = `¡Hola  ${primerElemento}!<br>`;
      document.getElementById(`div_1`).style.display = `block`;
    }
  });
  //acción para codificar y ver su resultado
    // var codificar = () => {
    document.getElementById(`codificar`).addEventListener(`click`, (evento) => {
      evento.preventDefault();
      let frase_uno = document.getElementById('eltexto').value;
      let offset_uno = document.getElementById('eloffset').value;
      let elresultadofinal = cipher.encode(frase_uno, offset_uno);
      document.getElementById(`texto_entra`).value = elresultadofinal;
    });

    // var decodificar = () => {
    document.getElementById(`decodificar`).addEventListener(`click`, (evento) => {
      evento.preventDefault();
      let frase_dos = document.getElementById('eltexto').value;
      let offset_dos = document.getElementById('eloffset').value;
      let elresultadofinal = cipher.decode(frase_dos, offset_dos);
      document.getElementById(`texto_entra`).value = elresultadofinal;//Agregado
    });

    document.getElementById(`guardar`).addEventListener(`click`, (evento) => {
      evento.preventDefault();
      document.getElementById(`comienza_div`).style.display = `block`;
      document.getElementById(`div_2`).style.display = `none`;
  });

// elemento para rerescar la página
// document.getElementById('refreshPage').addEventListener(`click`, (evento) => {
//   evento.preventDefault();
//   document.getElementById('eloffset').value = "";
//   document.getElementById('eltext').value = "";
//   document.getElementById('texto_entra').value = "";
// });
