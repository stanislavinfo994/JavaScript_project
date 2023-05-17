let votes = [0, 0, 0, 0, 0];
function vote(index) {
    votes[index]++;
}
function showResults() {
    let maxVotes = Math.max(...votes);
    let winningSmiley = votes.indexOf(maxVotes);

    let resultContainer = document.getElementById("result");
    resultContainer.innerHTML = "";
    resultContainer.innerHTML = "<h3>Переможець:</h3>";
    resultContainer.innerHTML += "<div class='smiley'>" + getSmiley(winningSmiley) + "</div>";
    resultContainer.innerHTML += "<p>Кількість голосів: " + maxVotes + "</p>";
}
function getSmiley(index) {
    let smileys = ["😀", "😊", "😎", "🤩", "😍"];
    return smileys[index];
}