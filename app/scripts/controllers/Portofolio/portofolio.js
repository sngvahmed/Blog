'use strict';
var MainCtrl = angular.module('clientApp');

MainCtrl.controller('PortofolioCtrl', function ($scope , $timeout) {
	
	$scope.project = [
		{
			"name" : "reversi",
			"programming" : "C++",
			"link" : "https://github.com/sngvahmed/Reversi",
			"description" : "description",
			"rel" : "1"
		}
	];

	var tmp = function(){
		console.log("size is " + $scope.project.length);
	}
	tmp();
});

// ,
// 		{
// 			"name" : "reversi",
// 			"programming" : "C++",
// 			"link" : "https://github.com/sngvahmed/Reversi",
// 			"description" : "description",
// 			"rel" : "2"
// 		},
// 		{
// 			"name" : "reversi",
// 			"programming" : "C++",
// 			"link" : "https://github.com/sngvahmed/Reversi",
// 			"description" : "description",
// 			"rel" : "3"
// 		},
// 		{
// 			"name" : "reversi",
// 			"programming" : "C++",
// 			"link" : "https://github.com/sngvahmed/Reversi",
// 			"description" : "description",
// 			"rel" : "4"
// 		}