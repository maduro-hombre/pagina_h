
const searchInput = document.getElementById("search-input");
const suggestionsList = document.getElementById("suggestions-list");
const defaultSuggestions = [
    { text: "La PC enciende, pero no tiene imagen", link: "paginas/1pc_enciende_no_tiene_imagen.html" },
    { text: "La notebook enciende, pero no tiene imagen", link: "paginas/2notebook_enciende_no_tiene_imagen.html" },
    { text: "La laptop/notebook se reinicia a cada rato o se cuelga", link: "paginas/3laptopnotebook_se_cuelga.html" },
    { text: "La PC/notebook enciende pero no bootea", link: "paginas/4pc_notebook_no_bootea.html" },
    { text: "La pantalla muestra una resolución menor a la esperada", link: "paginas/5resolucion_menor.html" },
    { text: "Algunos juegos no funcionan", link: "paginas/6juegos_no_funcionan.html" },
    { text: "La PC no tiene sonido", link: "paginas/7pc_no_tiene_sonido.html" },
    { text: "La notebook no tiene sonido", link: "paginas/8notebook_no_tiene_sonido.html" },
    { text: "La PC no enciende", link: "paginas/9pc_no_enciende.html" },
    { text: "La notebook no enciende", link: "paginas/10notebook_no_enciende.html" },
    { text: "La fuente enciende pero la PC no", link: "paginas/11fuente_enciende_pc_no.html" },
    { text: "La impresora está encendida y conectada pero no funciona", link: "paginas/12impresora_encendida_no_funca.html" },
    { text: "La impresora está encendida y conectada a Wi-Fi, pero no imprime", link: "paginas/13impresora_encendida_no_imprime.html" },
    { text: "La PC/notebook no tiene acceso a la red o internet", link: "paginas/14pcnotebook_no_acceso_ala_red.html" },
    { text: "La PC/notebook se conecta a la red, pero no navega", link: "paginas/15pcnotebook_con_red_no_navega" },
    { text: "Los dispositivos USB no funcionan", link: "paginas/16disp_usb_no_funca.html" },
    { text: "Se instaló un nuevo hardware y la computadora se reinicia seguido o se congela", link: "paginas/17nuevo_hardware_se_reinicia.html" },
    { text: "Se enciende la PC y aparece un mensaje de contraseña necesaria para continuar (antes de cargar el sistema operativo)", link: "paginas/18contra_necesaria.html" },
    { text: "La BIOS se desactualiza en cada encendido (fecha, hora, disco)", link: "paginas/19bios_desactualizada.html" },
    { text: "A través de la BIOS o de un software adecuado se realiza overclocking del micro. La PC se reinicia y se cuelga", link: "paginas/20overcloking.html" },
    { text: "Las teclas escriben caracteres diferentes a las que tienen", link: "paginas/21teclas_escribe_diferente.html" },
    { text: "El disco duro es de una capacidad inferior", link: "paginas/22disco_capacidad_inferior.html" },
    { text: "La PC/notebook se “tilda”, la pantalla se pone azul con un mensaje en letras blancas", link: "paginas/23pantalla_azul.html" },
];
searchInput.addEventListener("focus", function() {
    showSuggestions(defaultSuggestions);
});

// Filtrar sugerencias al escribir
searchInput.addEventListener("input", function() {
    const inputText = this.value.toLowerCase();
    
    if (inputText.length === 0) {
        showSuggestions(defaultSuggestions); // Mostrar todas si no hay texto
    } else {
        // Filtrar sugerencias que coincidan
        const filtered = defaultSuggestions.filter(item => 
            item.text.toLowerCase().includes(inputText)  // Cambiado item por item.text
        );
        showSuggestions(filtered);
    }
});
// Función para mostrar sugerencias en el dropdown
function showSuggestions(suggestions) {
    suggestionsList.innerHTML = ""; // Limpiar lista

// crea el elemento con el link
    if (suggestions.length > 0) {
        suggestions.forEach(item => {
            const li = document.createElement("li");
            li.textContent = item.text;
            li.dataset.link = item.link; // Almacenar el enlace en un atributo de datos
            suggestionsList.appendChild(li);
        });
        suggestionsList.style.display = "block";
    } else {
        suggestionsList.style.display = "none";
    }
}


// Clic en una sugerencia te lleva automaticamente al link
suggestionsList.addEventListener("click", function(e) {
    if (e.target.tagName === "LI") {
        const link = e.target.dataset.link;
        if (link) {
            window.location.href = link;
        }
    }
});

// Cerrar dropdown al hacer clic fuera
document.addEventListener("click", function(e) {
    if (e.target !== searchInput) {
        suggestionsList.style.display = "none";
    }
});
