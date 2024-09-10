let selectedGames = [];

function addGame(game) {
    if (!selectedGames.includes(game)) {
        selectedGames.push(game);
        updateSelectedGames();
    }
}

function removeGame(game) {
    const index = selectedGames.indexOf(game);
    if (index > -1) {
        selectedGames.splice(index, 1);
        updateSelectedGames();
    }
}

function updateSelectedGames() {
    const list = document.getElementById('selected-games');
    list.innerHTML = ''; // Limpiar la lista actual

    selectedGames.forEach(game => {
        const li = document.createElement('li');
        li.textContent = game;
        list.appendChild(li);
    });
}

function generateLink() {
    const selectedGamesList = selectedGames.join(', ');
    const link = `https://example.com/selection?games=${encodeURIComponent(selectedGamesList)}`;
    window.location.href = link;
}
