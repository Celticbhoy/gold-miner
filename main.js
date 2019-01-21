var gameData = {
  gold: 0,
  workers: 0,
  goldPerClick: 1,
  goldPerClickCost: 10,
  goldPerWorkerCost: 100
}

function mineGold() {
  gameData.gold += gameData.goldPerClick
  document.getElementById("goldMined").innerHTML = gameData.gold + " Gold Mined"
}

function mineWorkers(){
	gameData.gold += gameData.workers
	document.getElementById("goldMined").innerHTML = gameData.gold + "Gold Mined"
}

function buyGoldPerClick() {
  if (gameData.gold >= gameData.goldPerClickCost) {
    gameData.gold -= gameData.goldPerClickCost
    gameData.goldPerClick += 1
    gameData.goldPerClickCost *= 2
    document.getElementById("goldMined").innerHTML = gameData.gold + " Gold Mined"
    document.getElementById("perClickUpgrade").innerHTML = "Upgrade Pickaxe (Currently Level " + gameData.goldPerClick + ") Cost: " + gameData.goldPerClickCost + " Gold"
  }
}

function buyWorkers(){
	if(gameData.gold >= gameData.goldPerWorkerCost){
		gameData.gold -= gameData.goldPerWorkerCost
		gameData.workers += 1
		gameData.goldPerWorkerCost *= 1.1
		document.getElementById("goldMined").innerHTML = gameData.gold + "Gold Mined"
		document.getElementById("perWorkerUpgrade").innerHTML = "Hire a Worker to mine for you (Currently " gameData.workers + ") Cost:" gameData.goldPerWorkerCost + "Gold"
	}

}

var mainGameLoop = window.setInterval(function() {
  mineWorkers()
}, 1000)

var saveGameLoop = window.setInterval(function() {
	localStorage.setItem('goldMinerSave', JSON.stringify(gameData))
}, 1500)

var saveGame = JSON.parse(localStorage.getItem("goldMinerSave"))

if(saveGame !== null){
	gameData = saveGame
}

