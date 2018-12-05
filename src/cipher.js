window.cipher = {
  encode: (offset , frase) => {
    /* Acá va tu código */
    var result = '';
    frase = frase.toUpperCase();
    offset = parseInt(offset);
    for (var i = 0; i < frase.length; i++) {
      if (frase[i] == ' '){
        result += ' ';
    } else{
      var posicion_ascii = frase.charCodeAt(i);
      var nueva_posicion_ascii = (posicion_ascii - 33 + offset) % 93 + 33;
      result += String.fromCharCode(nueva_posicion_ascii);
      }
    }
    return result;
  },
  decode: (offset, frase) => {
    /* Acá va tu código */
  var result_decodificar = '';
  frase = frase.toUpperCase();
  offset = parseInt(offset);
    for (var i = 0; i < frase.length; i++) {
        if (frase[i] == ' '){
          result_decodificar += ' ';
      } else{
      var posicion_ascii = frase.charCodeAt(i);
      var nueva_posicion_ascii = (posicion_ascii - 126 - offset) % 93 + 126;
      result_decodificar += String.fromCharCode(nueva_posicion_ascii)
    }
    }
    return result_decodificar;
  }
};
