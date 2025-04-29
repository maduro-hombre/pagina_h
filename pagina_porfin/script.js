const searchInput = document.getElementById("search-input");
const suggestionsList = document.getElementById("suggestions-list");
const defaultSuggestions = [
    "La PC enciende, pero no tiene imagen",
    "La notebook enciende, pero no tiene imagen",
    "La laptop/notebook se reinicia a cada rato o se cuelga",
    "La PC/notebook enciende pero no bootea",
    ". La pantalla muestra una resolución menor a la esperada",
    "Algunos juegos no funcionan",
    "La PC no tiene sonido",
    "La notebook no tiene sonido",
    "La PC no enciende",
    "La notebook no enciende",
    "La fuente enciende pero la PC no",
    "La impresora está encendida y conectada pero no funciona",
    "La impresora está encendida y conectada a Wi-Fi, pero no imprime",
    "La PC/notebook no tiene acceso a la red o internet",
    "La PC/notebook se conecta a la red, pero no navega",
    "Los dispositivos USB no funcionan",
    "Se instaló un nuevo hardware y la computadora se reinicia seguido o se congela",
    "Se enciende la PC y aparece un mensaje de contraseña necesaria para continuar (antes de cargar el sistema operativo)",
    "La BIOS se desactualiza en cada encendido (fecha, hora, disco)",
    "A través de la BIOS o de un software adecuado se realiza overclocking del micro. La PC se reinicia y se cuelga",
    "Las teclas escriben caracteres diferentes a las que tienen",
    "El disco duro es de una capacidad inferior",
    "La PC/notebook se “tilda”, la pantalla se pone azul con un mensaje en letras blancas",
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
            item.toLowerCase().includes(inputText)
        );
        showSuggestions(filtered);
    }
});

// Función para mostrar sugerencias en el dropdown
function showSuggestions(suggestions) {
    suggestionsList.innerHTML = ""; // Limpiar lista
    
    if (suggestions.length > 0) {
        suggestions.forEach(item => {
            const li = document.createElement("li");
            li.textContent = item;
            suggestionsList.appendChild(li);
        });
        suggestionsList.style.display = "block";
    } else {
        suggestionsList.style.display = "none";
    }
}

// Clic en una sugerencia → llenar el input
suggestionsList.addEventListener("click", function(e) {
    if (e.target.tagName === "LI") {
        searchInput.value = e.target.textContent;
        suggestionsList.style.display = "none";
    }
});

// Cerrar dropdown al hacer clic fuera
document.addEventListener("click", function(e) {
    if (e.target !== searchInput) {
        suggestionsList.style.display = "none";
    }
});
