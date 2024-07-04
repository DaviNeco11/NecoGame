// Referências aos elementos do DOM
const moveFactorInput = document.getElementById("moveFactor");
const imagesContainer = document.getElementById("imagesContainer");
const generateImagesButton = document.getElementById("generateImages");
const imageCountInput = document.getElementById("imageCount");// Contador do numero de imagens
//Utilizar funcao zoho para contar registros e gerar as imagens com base nisso


// Função para gerar pares de imagens
function generateImages(count) {
    imagesContainer.innerHTML = ''; // Limpar imagens anteriores
    for (let i = 0; i < count; i++) {
        const imageContainer = document.createElement("div");
        imageContainer.classList.add("imageContainer");

        // Segunda imagem (Avião)
        const img2 = document.createElement("img");
        img2.src = "Imagens8bits/aviao-removebg-preview.png"; // Caminho para a imagem do avião
        img2.alt = "Avião";
        img2.classList.add("movableImage", "plane");
        imageContainer.appendChild(img2);

        // Primeira imagem (Personagem)
        const img1 = document.createElement("img");
        img1.src = "Imagens8bits/CabecaChefe1.png"; // Caminho para a imagem do personagem
        img1.alt = "Personagem";
        img1.classList.add("movableImage", "character");
        imageContainer.appendChild(img1);

        imagesContainer.appendChild(imageContainer);
    }
}

// Evento para gerar imagens com base na quantidade inserida
generateImagesButton.addEventListener("click", () => {
    const count = parseInt(imageCountInput.value) || 0;
    generateImages(count);
});

// Evento para mover imagens com base no fator de movimento inserido
moveFactorInput.addEventListener("input", () => {
    const factor = parseFloat(moveFactorInput.value) || 0;
    const imageContainers = document.querySelectorAll(".imageContainer");
    imageContainers.forEach((container) => {
        container.style.transform = `translateX(${factor * 10}px)`;
    });
});
