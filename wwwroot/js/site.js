let palabra = document.getElementById("palabra").value;
let palabraEncriptada = document.getElementById("palabraEncriptada");
let palabraOculta = "";
for (let i = 0; i < palabra.length; i++) {
    palabraOculta = palabraOculta + "-";
}

palabraEncriptada.innerHTML = palabraOculta;

function Arriesgar(){
    const letra = document.getElementById("idLetra").value;
    console.log(letra);
    for (let i = 0; i < palabra.length; i++){
        if (palabra[i] == letra){
            nuevaPalabraOculta += palabra[i];
        }
        else{
            nuevaPalabraOculta += palabraOculta[i];
        }
    }
}