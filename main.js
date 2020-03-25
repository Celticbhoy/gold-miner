var gameData = {
  gold: 1,
  workers: 0,
  goldPerClick: 1,
  goldPerWorkers: 1,
  goldPerClickCost: 10,
  goldPerWorkersCost: 100,
}

function mineGold() {
  gameData.gold += gameData.goldPerClick
  document.getElementById("goldMined").innerHTML = gameData.gold + " Gold Mined"
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
	if (gameData.gold >= gameData.goldPerWorkersCost){
		gameData.gold -= gameData.goldPerWorkersCost
		gameData.workers += 1
		gameData.goldPerWorkersCost *= 1.5
		document.getElementById("goldMined").innerHTML = gameData.gold + " Gold Mined"
		document.getElementById("perWorkersUpgrade").innerHTML = "Hire a Worker to mine for you (Currently " + gameData.workers + ") Cost: " + gameData.goldPerWorkersCost + " Gold"
	if(gameData.workers == 1){
		startWorkers()
	}

	}

}

function mineWorkers(){
	gameData.gold += gameData.workers
	document.getElementById("goldMined").innerHTML = gameData.gold + " Gold Mined"
}

function buyWorkersUpgrades(){
	if(gameData.gold >= gameData.goldPerWorkersUpgrade){
		gameData.gold -= gameData.goldPerWorkersUpgrade
		gameData.goldPerWorkers += 1
		gameData.goldPerWorkersUpgrade *= 2.5
		document.getElementById("goldMined").innerHTML = gameData.gold + " Gold Mined"
		document.getElementById("perWorkersToolUpgrade").innerHTML = "Buy your workers better Tools (Currently " + gameData.goldPerWorkers + ") Cost: " + gameData.goldPerWorkersUpgrade + " Gold"

	}
}

function startWorkers(){
var mainGameLoop = window.setInterval(function() {
 mineWorkers()
}, 1000)

}

var saveGameLoop = window.setInterval(function() {
	localStorage.setItem('goldMinerSave', JSON.stringify(gameData))
}, 1500)

var saveGame = JSON.parse(localStorage.getItem("goldMinerSave"))

if(saveGame !== null){
	gameData = saveGame
	startWorkers()
}
