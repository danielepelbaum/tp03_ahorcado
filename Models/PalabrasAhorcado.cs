namespace Ahorcado_danielepelbaum_theoglinsky.Models;

public class PalabrasAhorcado()
    {
        private List<string> palabras;

        private PalabrasAhorcado()
        {
            palabras = new List<string>()
            {
            "DANIELSON";
            "YUPANQUI";
            "JABULANI";
            "AKSARLIAN";
            "ADOBATTOIDE";
            "LEONIDAS";
            "DUCATENSZEILER";
            "UVAPETKIS";
            "";
            "";
            }
        }
        public string ObtenerPalabra()
        {
            Random rnd = new Random();
            int num = rnd.Next(palabras.Count);
            return palabras[num];
        }
    }