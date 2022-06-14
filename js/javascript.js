// Array, incluye listado de locales de comida con y sin opciones gluten-free

const local = [
    {
        id: 1,
        nombre: "Bar Italia",
        comuna: "Providencia",
        gluten: "SÍ tiene opciones en su menú que son libres de gluten y de trazas :)",
    },
    {
        id: 2,
        nombre: "Vapiano",
        comuna: "Las Condes",
        gluten: "NO tiene opciones en su menú que sean libres de gluten y de trazas :(",
    },
    {
        id: 3,
        nombre: "Wonderland Café",
        comuna: "Santiago",
        gluten: "SÍ tiene opciones en su menú que son libres de gluten y de trazas :)",
    },
    {
        id: 4,
        nombre: "Quimey",
        comuna: "Providencia",
        gluten: "SÍ tiene opciones en su menú que son libres de gluten y de trazas :)",
    },
    {
        id: 5,
        nombre: "Tío Tomate",
        comuna: "Vitacura",
        gluten: "NO tiene opciones en su menú que sean libres de gluten y de trazas :(",
    },
    {
        id: 6,
        nombre: "Thani",
        comuna: "Macul",
        gluten: "SÍ tiene opciones en su menú que son libres de gluten y de trazas :)",
    },
    {
        id: 7,
        nombre: "Uncle Fletch",
        comuna: "Ñuñoa",
        gluten: "SÓLO ofrece una opción sin gluten en caso de así solicitarlo, por lo cual debes consultar :/",
    },
    {
        id: 8,
        nombre: "Holy Moly",
        comuna: "Providencia",
        gluten: "NO tiene opciones en su menú que sean libres de gluten y de trazas :(",
    },
    {
        id: 9,
        nombre: "Castillo Hamburgo",
        comuna: "Ñuñoa",
        gluten: "SÍ tiene opciones en su menú que son libres de gluten y de trazas :)",
    },
    {
        id: 10,
        nombre: "De Mi Tierra",
        comuna: "Providencia",
        gluten: "SÍ tiene opciones en su menú que son libres de gluten y de trazas :)",
    },
    {
        id: 11,
        nombre: "Donut Corp.",
        comuna: "Providencia",
        gluten: "NO tiene opciones en su menú que sean libres de gluten y de trazas :(",
    },
    {
        id: 12,
        nombre: "Baco",
        comuna: "Providencia",
        gluten: "NO tiene opciones en su menú que sean libres de gluten y de trazas :(",
    }
 
]

function entrada() {
    let nombre = prompt("¡Hola, celíaco/a! Ingresa el número que está asociado al local de comida para conocer si cuenta con opciones en su menú que sean libres de gluten como también de trazas. También podrás acceder a la ubicación del local:\n[1] Bar Italia\n[2] Vapiano\n[3] Wonderland Café\n[4] Quimey\n[5] Tío Tomate\n[6] Thani\n[7] Uncle Fletch\n[8] Holy Moly\n[9] Castillo Hamburgo\n[10] De Mi Tierra\n[11] Donut Corp.\n[12] Baco");

    const buscarId = local.find((elnombre) => elnombre.id == nombre);

    // Hay un local "dudoso" (Uncle Fletch), por lo cual se mostrará un mensaje distinto si se selecciona:
    if(nombre == 7)
    {
        alert("El local " + buscarId.nombre + ", ubicado en la comuna de " + buscarId.comuna + " en Santiago de Chile, " + buscarId.gluten + " Te recomendamos que seas enfático/a sobre tu enfermedad y/o intolerancia alimentaria para que el chef pueda tomar las precauciones necesarias y evitar que te enfermes.");
    }

    else {
        alert("El local " + buscarId.nombre + ", ubicado en la comuna de " + buscarId.comuna + " en Santiago de Chile, " + buscarId.gluten);
    }
}

entrada();