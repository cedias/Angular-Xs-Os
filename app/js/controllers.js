'use strict';

/* Controllers */


function game($scope) {
	$scope.playing = "X";
	$scope.board = ["","","X","","","","","O",""];


	$scope.restartGame = function() {
		$scope.playing = "X";
		$scope.board = ["","","","","","","","",""];
	};

	$scope.play = function(gridPlay){
		$scope.board[gridPlay]=$scope.playing;
		$scope.playing = ($scope.playing==="X")?"O":"X";
	};

}
