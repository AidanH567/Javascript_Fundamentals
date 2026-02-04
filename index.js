let homeScoreEl = document.getElementById("score-home")
const guestScoreEl = document.getElementById("score-guest")

let homeScore = homeScoreEl.textContent

function homeOne() {
  homeScoreEl.textContent = parseInt(homeScoreEl.textContent) + 1
  console.log(homeScoreEl.textContent)
}

