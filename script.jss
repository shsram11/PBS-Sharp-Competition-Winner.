function pickWinner() {
    const names = document.getElementById('names').value.split(',');
    if (names.length > 0) {
        const winner = names[Math.floor(Math.random() * names.length)].trim();
        document.getElementById('winner').innerText = `Winner: ${winner}`;
    } else {
        document.getElementById('winner').innerText = 'No names entered!';
    }
}
