window.onload
function save(){
  var primerElemento = document.getElementById(`NOM`).value;
  var segundoElemento = document.getElementById(`CON`).value;
  if (primerElemento == "" || segundoElemento == ""){
    alert(`Ingrese un usuario y una contraseña valida`)
  }else{
    document.getElementById(`comienza_div`).style.display = `none`;
    document.getElementById(`nombre_jugador`).innerHTML = `¡Hola  ${primerElemento}!<br>`;
    document.getElementById(`div_1`).style.display = `block`;
  }
}
//acción para codificar y ver su resultado
  var codificar = () => {
    var frase_uno = document.getElementById('eltexto').value;
    var offset_uno = document.getElementById('eloffset').value;
    var elresultadofinal = cipher.encode(offset_uno, frase_uno);
    console.log(elresultadofinal);
    document.getElementById(`texto_entra`).value = elresultadofinal;
  }

  var decodificar = () => {
    var frase_dos = document.getElementById('eltexto').value;
    var offset_dos = document.getElementById('eloffset').value;
    var elresultadofinal = cipher.decode(offset_dos, frase_dos);
    document.getElementById(`texto_entra`).value = elresultadofinal;//Agregado
  }


// function codificar(){
// let cod = document.getElementById(`texto_entra`).value;
// document.getElementById(`texto_sale`).innerHTML= `${cod}<br>`;
