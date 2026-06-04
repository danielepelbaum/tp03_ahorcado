namespace Ahorcado_danielepelbaum_theoglinsky.Models;

public class PalabrasAhorcado
    {
        private List<string> palabras;

        public PalabrasAhorcado()
        {
            palabras = new List<string>();
            palabras.Add("DANIELSON");
            palabras.Add("YUPANQUI");
            palabras.Add("JABULANI");
            palabras.Add("AKSARLIAN");
            palabras.Add("ADOBATTOIDE");
            palabras.Add("DUCATENSZEILER");
            palabras.Add("UVAPETKIS");
            palabras.Add("CHERNOPOPO");
            palabras.Add("OMAMATHEUS");
        }
        public string ObtenerPalabra()
        {
            Random rnd = new Random();
            int num = rnd.Next(palabras.Count);
            return palabras[num];
        }
    }