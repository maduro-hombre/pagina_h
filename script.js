const searchInput = document.getElementById("search-input");
const suggestionsList = document.getElementById("suggestions-list");
const defaultSuggestions = [
    "PC no enciende",
    "Impresora no funciona",
    "Internet lento",
    "Pantalla azul en Windows",
    "Teclado no responde",
    "Mouse no detectado",
    "No puedo imprimir",
    "El sistema se apaga solo",
    "1",
    "4",
    "3",
    "1",
    "4",
    "3",
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
