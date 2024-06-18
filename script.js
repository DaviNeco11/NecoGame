document.addEventListener('DOMContentLoaded', function() {
    const groups = []; 

    // Form submission for creating groups
    document.getElementById('groupForm').addEventListener('submit', function(event) {
        event.preventDefault(); 

        const groupName = document.getElementById('groupName').value;
        const participants = document.getElementById('participants').value.split(',');
        const groupType = document.getElementById('groupType').value;

        let groupDescription = '';
        let bodyClass = '';

        switch (groupType) {
            case '1':
                groupDescription = 'Tipo 1: Grupo Pequeno';
                bodyClass = 'type-1';
                break;
            case '2':
                groupDescription = 'Tipo 2: Grupo Médio';
                bodyClass = 'type-2';
                break;
            case '3':
                groupDescription = 'Tipo 3: Grupo Grande';
                bodyClass = 'type-3';
                break;
            case '4':
                groupDescription = 'Tipo 4: Grupo Extra Grande';
                bodyClass = 'type-4';
                break;
            default:
                groupDescription = 'Tipo Desconhecido';
                break;
        }

        document.body.classList.remove('type-1', 'type-2', 'type-3', 'type-4');

        if (bodyClass) {
            document.body.classList.add(bodyClass);
        }

        const group = {
            name: groupName.trim(),
            participants: participants.map(participant => participant.trim()),
            description: groupDescription
        };

        groups.push(group);

        updateGroupsList();
        document.getElementById('groupForm').reset();
    });

    function updateGroupsList() {
        const groupsList = document.getElementById('groupsList');
        groupsList.innerHTML = '';

        groups.forEach((group) => {
            const groupItem = document.createElement('li');
            groupItem.className = 'group';

            const groupName = document.createElement('h3');
            groupName.textContent = `Grupo: ${group.name}`;

            const groupDescription = document.createElement('p');
            groupDescription.textContent = group.description;

            const groupParticipants = document.createElement('p');
            groupParticipants.textContent = `Participantes: ${group.participants.join(', ')}`;

            groupItem.appendChild(groupName);
            groupItem.appendChild(groupDescription);
            groupItem.appendChild(groupParticipants);

            groupsList.appendChild(groupItem);
        });
    }

    // Image movement functionality
    const moveFactorInput = document.getElementById("moveFactor");
    const imagesContainer = document.getElementById("imagesContainer");
    const generateImagesButton = document.getElementById("generateImages");
    const imageCountInput = document.getElementById("imageCount");

    function generateImages(count) {
        imagesContainer.innerHTML = ''; // Clear previous images
        for (let i = 0; i < count; i++) {
            const img = document.createElement("img");
            img.src = "Imagens8bits/CabecaChefe1.png"; // Change to your image path
            img.alt = "ImgTste";
            img.classList.add("movableImage");
            img.style.transform = 'translateX(0px)';
            imagesContainer.appendChild(img);
        }
    }

    generateImagesButton.addEventListener("click", () => {
        const count = parseInt(imageCountInput.value) || 0;
        generateImages(count);
    });

    moveFactorInput.addEventListener("input", () => {
        const factor = parseFloat(moveFactorInput.value) || 0;
        const images = document.querySelectorAll(".movableImage");
        images.forEach((img, index) => {
            img.style.transform = `translateX(${factor * 10}px)`;
        });
    });
});
