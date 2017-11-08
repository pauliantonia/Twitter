window.onload = function() { /*sirve para que cuando cargue la página, cargue todo lo demás*/
    var sendButton = document.getElementsByName("enviar")[0];/*cada vez que es con class se pone un 0, porque le entrego una posicion que es 0, por defecto es la primera*/
    var thinkInput = document.getElementsByName("think")[0];
    var comentaries = document.getElementsByName("comments")[0];

    thinkInput.onkeydown = function(e){
        console.log(e)
        var total_caracter = 140;
        var carcateres = thinkInput.value.length;//.value me rescata lo que escribe el usuario
        var caracter_restante = total_caracter - carcateres;
        if(carcateres >= total_caracter && e.key != 'Backspace'){
            return false;
        } else {
             document.getElementById('contador_text').innerHTML = caracter_restante
        }
     }

    sendButton.onclick = function() {
        if (thinkInput.value == "") {
            sendButton == null;
        } else {
            var twitDiv = document.createElement("div");
            var dateSpan = document.createElement("span");
            var nameSpan = document.createElement("span");
            var twitP = document.createElement("p");
            twitDiv.appendChild(nameSpan);
            twitDiv.appendChild(dateSpan);
            twitDiv.appendChild(twitP);
            twitDiv.className = "twit";
            dateSpan.textContent = new Date;
            nameSpan.textContent = "Paulina dice ";
            twitP.textContent = thinkInput.value;
            
            comentaries.insertBefore(twitDiv, comentaries.children[0]);
        }
    }

}