document.addEventListener("DOMContentLoaded", () => {
    const tableBody = document.querySelector("#tabla-carros tbody");

    // Recuperar los carros guardados en el carrito
    const carrito = JSON.parse(localStorage.getItem("carrito")) || [];

    carrito.forEach(item => {
        const fila = document.createElement("tr");

        const tdImagen = document.createElement("td");
        const img = document.createElement("img");
        img.src = item.foto;
        img.alt = "Vehículo";
        img.style.width = "100px";
        tdImagen.appendChild(img);

        const tdNombre = document.createElement("td");
        tdNombre.textContent = item.nombre;

        const tdMarca = document.createElement("td");
        tdMarca.textContent = item.marca;

        const tdPrecio = document.createElement("td");
        tdPrecio.textContent = item.precio;

        fila.appendChild(tdImagen);
        fila.appendChild(tdNombre);
        fila.appendChild(tdMarca);
        fila.appendChild(tdPrecio);

        tableBody.appendChild(fila);
    });
});
