let palabraOriginal = document.getElementById("palabra").value;
let palabraEncriptada = document.getElementById("palabraEncriptada");
let palabraOculta = "";
for (let i = 0; i < palabraOriginal.length; i++) {
    palabraOculta = palabraOculta + "-";
}

let intentos = document.getElementById("intentos");
let intentosDisponibles = 10;
palabraEncriptada.innerHTML = palabraOculta;
intentos.innerHTML = intentosDisponibles;

function Arriesgar(){
    let letra = document.getElementById("idLetra").value;
    letra = letra.toUpperCase();
    let nuevaPalabraOculta ="";
    let bien = false;
    for (let i = 0; i < palabraOriginal.length; i++){
        if (palabraOriginal[i] == letra){
            nuevaPalabraOculta += palabraOriginal[i];
            bien = true;
        }
        else if (palabraOculta[i]){
            nuevaPalabraOculta += palabraOculta[i];
        }
    }
    if(bien == false){
        intentosDisponibles -= 1;
    }
    intentos.innerHTML = intentosDisponibles;
    palabraOculta = nuevaPalabraOculta;
    palabraEncriptada.innerHTML = palabraOculta;
    if(palabraOculta.includes("-") == false){
        let mensaje = document.getElementById("mensaje");
        mensaje.innerHTML = "GANASTE";
    }
    if(intentosDisponibles == 0){
        mensaje.innerHTML = "ALPISTEPERDISTE";
        
    }
}