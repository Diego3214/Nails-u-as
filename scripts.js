function agendarCita(event) {
    event.preventDefault();

    let nombre = document.getElementById("nombre").value;
    let servicio = document.getElementById("servicio").value;
    let fecha = document.getElementById("fecha").value;

    let mensaje = "Hola, quiero agendar una cita.%0A" +
                  "Nombre: " + nombre + "%0A" +
                  "Servicio: " + servicio + "%0A" +
                  "Fecha: " + fecha;

    let telefono = "462-156-1138"; 

    window.open("https://wa.me/" + telefono + "?text=" + mensaje);
}