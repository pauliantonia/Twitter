window.onload = function() { /*sirve para que cuando cargue la página, cargue todo lo demás*/
    var botonTweet = document.getElementsByName("enviar")[0];/*cada vez que es con class se pone un 0, porque le entrego una posicion que es 0, por defecto es la primera*/
    var thinkInput = document.getElementsByName("think")[0];
    var contPadre = document.getElementsByName("contPadre")[0];

  botonTweet.onclick = function() { //llamo a la funcion onclick, cuando hago click al boton
        if (thinkInput.value == "") {
            alert ("Ingrese texto");
        } else {
            var twitDiv = document.createElement("div"); //creo elemento div vacio
            var dateSpan = document.createElement("span"); //creo span donde ira la fecha
            var nameSpan = document.createElement("span"); // creo span donde ira el nombre del usuario
            var twitP = document.createElement("p"); //creo un parrafo
            twitDiv.appendChild(nameSpan); // digo que div creado (twitDiv) es padre de nameSpan
            twitDiv.appendChild(dateSpan); // digo que div creado (twitDiv) es padre de dateSpan
            twitDiv.appendChild(twitP); // digo que div creado (twitDiv) es padre de twitP
            twitDiv.className = "tweet"; // le doy nombre a mi twitDiv para llamarlo despues en css
            dateSpan.textContent = new Date; // digo que contenido de texto tendra = la hora exacta actualizada por cada tweet que se haga.
            nameSpan.textContent = "Paulina dice "; // dugo que contenido de texto tendra el nombre de usuario y dice. para simular que lo que escribe lo dice el usuario.
            twitP.textContent = thinkInput.value; // digo que el contenido de twitP sera el valor(contenido) en thinkinpu o lo que se escriba en el textarea. osea lo que se escriba le digo que sera un parrafo.

            contPadre.insertBefore(twitDiv, contPadre.children[0]); // digo que lo ultimo que se escriba quede arriba.
        }
    }

    thinkInput.onkeydown = function() {
          var maxCaracteres = 140;
          var cantidad1 = 120;
          var cantidad2 = 130;
          var textIngresado = thinkInput.value;
          var contador = document.getElementsByName("contadorTwit")[0];
          var largo = textIngresado.length;
          contador.innerHTML = maxCaracteres - largo;
          if (largo > maxCaracteres) {
            botonTweet.disabled = true;
          } else if (largo < maxCaracteres) {
            botonTweet.disabled = false;
          } else if (largo >= maxCaracteres) {
            contador.style.color="red";
          }
        }




}
