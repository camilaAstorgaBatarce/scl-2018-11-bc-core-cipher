window.cipher = {
  encode: (texto, offset) => {
    /* Acá va tu código */
    let result = '';
    offset = parseInt(offset);
    for (let i = 0; i < texto.length; i++) {
      if (texto[i] == ' '){
        result += ' ';
      } else if (texto[i] == "ñ") {
          result += "ñ";
        } else if (texto[i] == "Ñ") {
          result += "Ñ";
        continue;
    } else {
      let posicion_ascii = texto.charCodeAt(i);
      if (posicion_ascii>= 33 && posicion_ascii<=126){
      let nueva_posicion_ascii = (posicion_ascii - 33 + offset) % 93 + 33;
      result += String.fromCharCode(nueva_posicion_ascii);
    }
      }
    }
    return result;
  },
  decode: (texto, offset) => {
    /* Acá va tu código */
  let result_decodificar = '';
  offset = parseInt(offset);
    for (let i = 0; i < texto.length; i++) {
        if (texto[i] == ' '){
          result_decodificar += ' ';
        } else if (texto[i] == "ñ") {
            result_decodificar += "ñ";
          } else if (texto[i] == "Ñ") {
            result_decodificar += "Ñ";
          continue;
      } else {
      let posicion_ascii = texto.charCodeAt(i);
      if (posicion_ascii>= 33 && posicion_ascii<=126){
      let nueva_posicion_ascii = (posicion_ascii - 126 - offset) % 93 + 126;
      result_decodificar += String.fromCharCode(nueva_posicion_ascii)
    }
    }
  }
    return result_decodificar;
  }
};
