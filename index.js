// window.onload
  // function save(){
  document.getElementById(`save`).addEventListener(`click`, (evento) => {
    evento.preventDefault();
    var primerElemento = document.getElementById(`NOM`).value;
    var segundoElemento = document.getElementById(`CON`).value;
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
      var frase_uno = document.getElementById('eltexto').value;
      var offset_uno = document.getElementById('eloffset').value;
      var elresultadofinal = cipher.encode(frase_uno, offset_uno);
      document.getElementById(`texto_entra`).value = elresultadofinal;
    });

    // var decodificar = () => {
    document.getElementById(`decodificar`).addEventListener(`click`, (evento) => {
      evento.preventDefault();
      var frase_dos = document.getElementById('eltexto').value;
      var offset_dos = document.getElementById('eloffset').value;
      var elresultadofinal = cipher.decode(frase_dos, offset_dos);
      document.getElementById(`texto_entra`).value = elresultadofinal;//Agregado
    });

  //   document.getElementById(`guardar`).addEventListener(`click`, (evento) => {
  //     evento.preventDefault();
  //     document.getElementById(`div_1`).style.display = `block`;
  //     document.getElementById(`div_2`).style.display = `none`;
  //   }
  // });
