'use strict';

/* Controllers */


function game($scope) {
	


	$scope.restartGame = function() {
		$scope.playing = "X";
		$scope.board = ["","","","","","","","",""];
		$scope.winner ="";
		$scope.gameStatus = "playing";
	};

	$scope.play = function(gridPlay){
		if(!$scope.checkEnd()){

			if($scope.board[gridPlay] === ""){
				
				$scope.board[gridPlay] = $scope.playing;

				if(!$scope.checkEnd()) {
					$scope.playing = ($scope.playing==="X")?"O":"X";
				} else
				{
					$scope.winner ="The player "+$scope.won+" has won the game";
				}
		}
		}
	};

	$scope.checkEnd = function() {
		if($scope.gameStatus === "ended" || $scope.checkPlayerWon("X") || $scope.checkPlayerWon("O") || $scope.board.join("").length === 9 ){
			$scope.gameStatus = "ended";
			return true;
		}
			return false;
	};

	$scope.checkPlayerWon = function(player) {
		var wincases = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
		var winString = ""+player+player+player;
		var testString = "";

		for (var i = wincases.length - 1; i >= 0; i--) {
			var win = wincases[i];
			testString = ""+$scope.board[win[0]]+$scope.board[win[1]]+$scope.board[win[2]];
			if(testString===winString){
				$scope.won = player;
				return true;
			}
		};
		return false;
	};

$scope.restartGame();

}
