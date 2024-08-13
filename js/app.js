function actualizarReloj() {
    const ahora = new Date();
    const dias = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
    const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];

    const diaSemana = dias[ahora.getDay()];
    const dia = ahora.getDate();
    const mes = meses[ahora.getMonth()];
    const año = ahora.getFullYear();

    const horas = ahora.getHours();
    const minutos = ahora.getMinutes();
    const segundos = ahora.getSeconds();
    const ampm = horas >= 12 ? 'PM' : 'AM';

    const horas12 = horas % 12 || 12; // Conversión de formato 24h a 12h

    document.getElementById('fecha').textContent = `${diaSemana} ${dia} de ${mes} del ${año}`;
    document.getElementById('horas').textContent = horas12.toString().padStart(2, '0');
    document.getElementById('minutos').textContent = minutos.toString().padStart(2, '0');
    document.getElementById('segundos').textContent = segundos.toString().padStart(2, '0');
    document.getElementById('ampm').textContent = ampm;
}

setInterval(actualizarReloj, 1000);
actualizarReloj(); // Llamar una vez para evitar el retraso inicial