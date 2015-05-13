'use strict';
var MainCtrl = angular.module('clientApp');

MainCtrl.controller('PortofolioCtrl', function ($scope , $timeout) {
	
	$scope.project = [
		{
			"name" : "Reversi",
			"programming" : "Android , Java",
			"link" : "https://github.com/sngvahmed/Reversi",
			"description" : "reversi is an application for android to be able to play online",
			"source" : "/img/R.png"
		},{
			"name" : "Snake",
			"programming" : "C++",
			"link" : "https://github.com/sngvahmed/Snake",
			"description" : "snake is a game which make of console application using c++ programming language",
			"source" : "/img/snake.png"

		},{
			"name" : "Need For Faka",
			"programming" : "C++",
			"link" : "https://github.com/sngvahmed/NeedForFaka",
			"description" : "need for faka is a car game which make of QT",
			"source" : "/img/needforfaka.png"
		},{
			"name" : "Chess",
			"programming" : "Java",
			"link" : "https://github.com/sngvahmed/Chess",
			"description" : "Chess Viewer send data to Controller and Controller send the data to Parser Then send to Controller Controller send the Parser data to Query to create Query and Back to Controller then Controller send the data to ChessContext . Chess Context sent the Query to DataHandler which is parse the data and CheckMoves check is its move is valid and then start to checks the moves by ChessPicesImplementation and sent the data to ChessContext and chessContext send the data to DataHandler then back to chessContext. chess context send the DataHandler to ChessManager. ChessManager sent the Data to Query to Create Query and then Query Sent to user Viewer. Notes i Know that Query Object Should not be sent Viewer but i am not understand this point",
			"source" : "/img/chess.png"
		},{
			"name" : "Code Force Api",
			"programming" : "php, JavaScript",
			"link" : "https://github.com/sngvahmed/CodeForcesAPI",
			"description" : "talking with CodeForcesAPI to retreive data using handle",
			"source" : "/img/codeForceApi.png"
		},{
			"name" : "Open download manger",
			"programming" : "Java,",
			"link" : "https://github.com/sngvahmed/openDownloudManager",
			"description" : "is an open source download manger for download any type of file from the internet",
			"source" : "/img/openDownManager.png"
		},{
			"name" : "transient watch",
			"programming" : "Java, Android",
			"link" : "https://github.com/sngvahmed/transient-watch",
			"description" : "transient-watch is an android app that provide interested astronomers with ‘daily news’ on the transient high-energy sky",
			"source" : "/img/TW.png"
		},{
			"name" : "SunShine",
			"programming" : "Java, Android",
			"link" : "https://github.com/sngvahmed/SunShine",
			"description" : "sunshine is a applicatioon for weather",
			"source" : "/img/sunshine.png"
		},{
			"name" : "School System",
			"programming" : "C# , ASP",
			"link" : "https://github.com/sngvahmed/SchoolSystem",
			"description" : "school system using ASP and C# programming language",
			"source" : "/img/ss.png"
		},
	];

});
