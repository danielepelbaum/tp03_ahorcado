let intentosDisponibles = 10;
let palabraOriginal = document.getElementById("palabra").value;
let palabraOculta = "";
for(let i = 0; i < palabraOriginal.length; i++)
{
    palabraOculta += "-";
}

document.getElementById("palabraEncriptada").innerHTML = palabraOculta;
document.getElementById("intentos").innerHTML =
"Intentos restantes: " + intentosDisponibles;
function Arriesgar()
{
    let letra = document.getElementById("idLetra").value.toUpperCase();

    let nuevaPalabraOculta = "";

    let bien = false;

    let mensaje = document.getElementById("mensaje");

    for(let i = 0; i < palabraOriginal.length; i++)
    {
        if(palabraOriginal[i] == letra)
        {
            nuevaPalabraOculta += palabraOriginal[i];

            bien = true;
        }
        else
        {
            nuevaPalabraOculta += palabraOculta[i];
        }
    }
    palabraOculta = nuevaPalabraOculta;
    document.getElementById("palabraEncriptada").innerHTML =
    palabraOculta;
    if(bien == false && intentosDisponibles > 0)
    {
        intentosDisponibles--;
    }
    document.getElementById("intentos").innerHTML =
    "Intentos restantes: " + intentosDisponibles;
    if(palabraOculta.includes("-") == false)
    {
        mensaje.innerHTML = "GANASTE";

        document.getElementById("idLetra").disabled = true;
    }
    if(intentosDisponibles <= 0 )
    {
        mensaje.innerHTML = "PERDISTE";

        document.getElementById("idLetra").disabled = true;
    }
    document.getElementById("idLetra").value = "";

}

 function VolverAJugar()
{
    intentosDisponibles = 10;
    palabraOculta = "";
    for(let i = 0; i < palabraOriginal.length; i++)
    {
        palabraOculta += "-";
    }
    document.getElementById("palabraEncriptada").innerHTML = palabraOculta;
    document.getElementById("intentos").innerHTML =
    "Intentos restantes: " + intentosDisponibles;
    document.getElementById("mensaje").innerHTML = "";
    document.getElementById("idLetra").value = "";
    document.getElementById("idLetra").disabled = false;
}