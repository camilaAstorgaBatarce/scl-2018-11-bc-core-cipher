window.cipher = {
  encode: (frase, offset) => {
    /* Acá va tu código */
    var result = '';
    var texto = frase.toUpperCase();

    offset = parseInt(offset);
    for (var i = 0; i < texto.length; i++) {
      if (texto[i] == ' '){
        result += ' ';
    } else{
      var posicion_ascii = texto.charCodeAt(i);
      var nueva_posicion_ascii = (posicion_ascii - 65 + offset) % 26 + 65;
      result += String.fromCharCode(nueva_posicion_ascii);
      }
    }
    return result;
  },
  decode: (frase, offset) => {
    /* Acá va tu código */
  var result_decodificar = '';
  var texto = frase.toUpperCase();
  offset = parseInt(offset);
    for (var i = 0; i < texto.length; i++) {
        if (texto[i] == ' '){
          result_decodificar += ' ';
      } else{
      var posicion_ascii = texto.charCodeAt(i);
      var nueva_posicion_ascii = (posicion_ascii - 90 - offset) % 26 + 90;
      result_decodificar += String.fromCharCode(nueva_posicion_ascii)
    }
    }
    return result_decodificar;
  }
};
