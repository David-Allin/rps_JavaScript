(() => {
	console.log('loaded!');

	var choices = ["Rock", "Paper", "Scissors"];
	var computer;
	var player - document.querySelector("#weapon");
	var trigger = document. querySelector("#play");
	var status = document.querySelector(".winlose");

	function play_game() {
		console.log("called game function");

		computer = choices[Math.floor(Math.random() * choices.length)];
		console.log(computer);

		var player_choice = player.value;
		console.log(player_choice);

		if (computer.toLowerCase() == player_choice.toLowerCase()) {
			console.log("win");
		} else {
			console.log("lose");
		}
	}

	else if (player_choice.toLowerCase() == "Scissors") {
		if (computer.toLowerCase() == "Paper") {
			console.log("win");
		} else {
			console.log("lose");
		}
	}

	else {
		alert("input a valid selection")
	}

	trigger.addEventListener("click", play_game);
})();