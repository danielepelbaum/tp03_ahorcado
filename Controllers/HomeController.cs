using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using Ahorcado_danielepelbaum_theoglinsky.Models;

namespace Ahorcado_danielepelbaum_theoglinsky.Controllers;

public class HomeController : Controller
{
    private readonly ILogger<HomeController> _logger;

    public HomeController(ILogger<HomeController> logger)
    {
        _logger = logger;
    }

    public IActionResult Index()
    {
        PalabrasAhorcado palabra = new PalabrasAhorcado();
        ViewBag.palabra = palabra.ObtenerPalabra();
        return View();
    }

    public IActionResult Reiniciar(){
        return RedirectToAction("index");
    }

    public IActionResult Privacy()
    {
        return View();
    }

    [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
    public IActionResult Error()
    {
        return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
    }
}
